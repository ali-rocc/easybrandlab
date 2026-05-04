/**
 * Google Analytics Event Types with proper typing
 */
export type AnalyticsEventParams = {
  [key: string]: string | number | boolean | undefined;
};

const EVENT_TIMEOUT_MS = 500;
const ATTRIBUTION_STORAGE_KEY = "easybrandlabs_attribution";
const ATTRIBUTION_QUERY_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
  "msclkid",
  "ttclid",
] as const;

const getPageLocation = (): string | undefined => {
  if (typeof window === "undefined") return undefined;
  return window.location.href;
};

const getPagePath = (): string | undefined => {
  if (typeof window === "undefined") return undefined;
  return window.location.pathname;
};

const getPageReferrer = (): string | undefined => {
  if (typeof document === "undefined") return undefined;
  return document.referrer || undefined;
};

const cleanParams = (params: AnalyticsEventParams): AnalyticsEventParams => {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== "")
  ) as AnalyticsEventParams;
};

const safeSessionStorage = (): Storage | undefined => {
  if (typeof window === "undefined") return undefined;

  try {
    const testKey = "__analytics_storage_test__";
    window.sessionStorage.setItem(testKey, "1");
    window.sessionStorage.removeItem(testKey);
    return window.sessionStorage;
  } catch {
    return undefined;
  }
};

const readStoredAttribution = (): AnalyticsEventParams => {
  const storage = safeSessionStorage();
  if (!storage) return {};

  try {
    const stored = storage.getItem(ATTRIBUTION_STORAGE_KEY);
    return stored ? (JSON.parse(stored) as AnalyticsEventParams) : {};
  } catch {
    return {};
  }
};

const getQueryAttribution = (): AnalyticsEventParams => {
  if (typeof window === "undefined") return {};

  const searchParams = new URLSearchParams(window.location.search);

  return ATTRIBUTION_QUERY_KEYS.reduce<AnalyticsEventParams>((params, key) => {
    const value = searchParams.get(key);
    if (value) params[key] = value;
    return params;
  }, {});
};

const getAttributionParams = (): AnalyticsEventParams => {
  if (typeof window === "undefined") return {};

  const storedAttribution = readStoredAttribution();
  const queryAttribution = getQueryAttribution();
  const hasStoredAttribution = Object.keys(storedAttribution).length > 0;
  const firstTouchAttribution = hasStoredAttribution
    ? storedAttribution
    : cleanParams({
        first_landing_page: window.location.href,
        original_referrer: getPageReferrer(),
        ...queryAttribution,
      });

  if (!hasStoredAttribution) {
    const storage = safeSessionStorage();
    try {
      storage?.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(firstTouchAttribution));
    } catch {
      // Attribution is helpful, but tracking should never fail because storage is unavailable.
    }
  }

  return cleanParams({
    ...firstTouchAttribution,
    ...queryAttribution,
    page_referrer: getPageReferrer(),
  });
};

/**
 * Track custom events in Google Analytics
 * Follows GA4 documentation: gtag('event', '<event_name>', { <event_parameters> })
 *
 * @example
 * trackEvent("cta_click", {
 *   button_name: "contact_cta",
 *   button_location: "/home",
 * });
 */
export const trackEvent = (
  eventName: string,
  params?: AnalyticsEventParams
): Promise<void> => {
  return new Promise((resolve) => {
    if (typeof window === "undefined" || !(window as any).gtag) {
      resolve();
      return;
    }

    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      resolve();
    };

    window.setTimeout(finish, EVENT_TIMEOUT_MS);

    (window as any).gtag("event", eventName, {
      ...getAttributionParams(),
      ...cleanParams(params || {}),
      event_callback: finish,
      event_timeout: EVENT_TIMEOUT_MS,
    });
  });
};

/**
 * Set user properties for better audience segmentation
 * Usage: setUserProperty('user_segment', 'premium_client');
 */
export const setUserProperty = (
  propertyName: string,
  propertyValue: string | number
): void => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("set", { [propertyName]: propertyValue });
  }
};

/**
 * Track form submission - GA4 recommended event
 * Note: "form_submit" is GA4's recommended event name (not "form_submission")
 */
export const trackFormSubmission = (formName: string): void => {
  trackEvent("form_submit", {
    form_name: formName,
    page_location: getPageLocation(),
    page_referrer: getPageReferrer(),
  });
};

/**
 * Track CTA/button clicks - Custom event (not GA4 automated)
 * Consistent with existing implementation (14 historical events)
 */
export const trackCTAClick = (
  buttonName: string,
  buttonLocation?: string,
  destinationUrl?: string
): Promise<void> => {
  return trackEvent("cta_click", {
    button_name: buttonName,
    button_location: buttonLocation || getPagePath(),
    link_url: destinationUrl,
    page_location: getPageLocation(),
    page_referrer: getPageReferrer(),
  });
};

export const trackNavigationClick = (
  linkText: string,
  linkUrl: string,
  linkLocation: string
): Promise<void> => {
  return trackEvent("navigation_click", {
    link_text: linkText,
    link_url: linkUrl,
    link_location: linkLocation,
    page_location: getPageLocation(),
    page_referrer: getPageReferrer(),
  });
};

export const trackScheduleCallClick = (
  buttonLocation: string,
  schedulerUrl?: string
): Promise<void> => {
  return trackEvent("schedule_call_click", {
    button_name: "schedule_now",
    button_location: buttonLocation,
    scheduler_provider: "calcom",
    scheduler_url: schedulerUrl,
    page_location: getPageLocation(),
    page_referrer: getPageReferrer(),
  });
};

/**
 * Track error events for monitoring and debugging
 */
export const trackError = (
  errorMessage: string,
  errorLocation?: string
): void => {
  trackEvent("page_error", {
    error_message: errorMessage,
    error_location: errorLocation || getPagePath(),
    page_location: getPageLocation(),
    page_referrer: getPageReferrer(),
  });
};

/**
 * Track conversion/lead generation
 * Recommended: Use this for high-value user actions
 */
export const trackConversion = (
  conversionType: string,
  conversionValue?: number
): void => {
  trackEvent("conversion", {
    conversion_type: conversionType,
    conversion_value: conversionValue || 1,
    value: conversionValue || 1,
    currency: "USD",
    page_location: getPageLocation(),
    page_referrer: getPageReferrer(),
  });
};

/**
 * Track service inquiry - custom event for service-based businesses
 */
export const trackServiceInquiry = (serviceName: string): void => {
  trackEvent("service_inquiry", {
    service_name: serviceName,
    page_location: getPageLocation(),
    page_referrer: getPageReferrer(),
  });
};
