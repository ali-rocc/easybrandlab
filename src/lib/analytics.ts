/**
 * Google Analytics Event Types with proper typing
 */
export type AnalyticsEventParams = {
  [key: string]: string | number | boolean | undefined;
};

const EVENT_TIMEOUT_MS = 500;

const getPageLocation = (): string | undefined => {
  if (typeof window === "undefined") return undefined;
  return window.location.href;
};

const getPagePath = (): string | undefined => {
  if (typeof window === "undefined") return undefined;
  return window.location.pathname;
};

const cleanParams = (params: AnalyticsEventParams): AnalyticsEventParams => {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== "")
  ) as AnalyticsEventParams;
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
  });
};

/**
 * Track service inquiry - custom event for service-based businesses
 */
export const trackServiceInquiry = (serviceName: string): void => {
  trackEvent("service_inquiry", {
    service_name: serviceName,
    page_location: getPageLocation(),
  });
};
