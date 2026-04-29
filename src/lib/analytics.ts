/**
 * Google Analytics Event Types with proper typing
 */
export type AnalyticsEventParams = {
  [key: string]: string | number | boolean | undefined;
};

/**
 * Initialize Google Analytics - tracks page views automatically
 */
export const initGA = (): void => {
  if (typeof window !== "undefined") {
    const gtag = window.gtag;
    if (gtag) {
      // Set default properties for all events
      gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
        page_path: window.location.pathname,
        page_title: document.title,
      });
    }
  }
};

/**
 * Track custom events in Google Analytics
 * @example
 * trackEvent("contact_form_submission", {
 *   form_type: "contact",
 *   lead_value: 100,
 * });
 */
export const trackEvent = (
  eventName: string,
  params?: AnalyticsEventParams
): void => {
  if (typeof window !== "undefined") {
    const gtag = (window as any).gtag;
    if (gtag) {
      gtag("event", eventName, {
        ...params,
        timestamp: new Date().toISOString(),
      });
    }
  }
};

/**
 * Track page views (useful for client-side navigation)
 */
export const trackPageView = (path: string, title?: string): void => {
  if (typeof window !== "undefined") {
    const gtag = (window as any).gtag;
    if (gtag) {
      gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
        page_path: path,
        page_title: title || document.title,
      });
    }
  }
};

/**
 * Set user properties for better audience segmentation
 */
export const setUserProperty = (
  propertyName: string,
  propertyValue: string | number
): void => {
  if (typeof window !== "undefined") {
    const gtag = (window as any).gtag;
    if (gtag) {
      gtag("set", { [propertyName]: propertyValue });
    }
  }
};

/**
 * Track form submission events
 */
export const trackFormSubmission = (formName: string): void => {
  trackEvent("form_submission", {
    form_name: formName,
    form_location: window.location.pathname,
  });
};

/**
 * Track CTA button clicks
 */
export const trackCTAClick = (
  buttonName: string,
  buttonLocation?: string
): void => {
  trackEvent("cta_click", {
    button_name: buttonName,
    button_location: buttonLocation || window.location.pathname,
  });
};

/**
 * Track error events
 */
export const trackError = (
  errorMessage: string,
  errorLocation?: string
): void => {
  trackEvent("page_error", {
    error_message: errorMessage,
    error_location: errorLocation || window.location.pathname,
  });
};

/**
 * Track conversion/lead generation
 */
export const trackConversion = (
  conversionType: string,
  conversionValue?: number
): void => {
  trackEvent("conversion", {
    conversion_type: conversionType,
    conversion_value: conversionValue || 1,
  });
};

/**
 * Track service inquiry
 */
export const trackServiceInquiry = (serviceName: string): void => {
  trackEvent("service_inquiry", {
    service_name: serviceName,
    inquiry_source: window.location.pathname,
  });
};