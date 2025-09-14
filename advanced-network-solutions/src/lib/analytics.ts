// Google Analytics 4 and HubSpot integration utilities

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
    hbspt: {
      forms: {
        create: (config: {
          portalId: string;
          formId: string;
          target: string;
        }) => void;
      };
    };
  }
}

// Google Analytics 4 Events
export const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Common event tracking functions
export const trackPageView = (url: string) => {
  trackEvent('page_view', {
    page_title: document.title,
    page_location: url,
  });
};

export const trackFormSubmission = (formName: string, formType: string) => {
  trackEvent('form_submit', {
    form_name: formName,
    form_type: formType,
  });
};

export const trackDownload = (resourceName: string, resourceType: string) => {
  trackEvent('file_download', {
    file_name: resourceName,
    file_type: resourceType,
  });
};

export const trackContactAttempt = (method: string) => {
  trackEvent('contact_attempt', {
    contact_method: method,
  });
};

export const trackServiceInterest = (serviceName: string) => {
  trackEvent('service_interest', {
    service_name: serviceName,
  });
};

// HubSpot form integration
export const loadHubSpotForm = (portalId: string, formId: string, targetElement: string) => {
  if (typeof window !== 'undefined' && window.hbspt) {
    window.hbspt.forms.create({
      portalId: portalId,
      formId: formId,
      target: targetElement,
    });
  }
};

// Cookie consent management
export const setCookieConsent = (consent: boolean) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('cookie_consent', consent.toString());
    
    if (consent) {
      // Initialize analytics
      initializeAnalytics();
    }
  }
};

export const getCookieConsent = (): boolean => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('cookie_consent') === 'true';
  }
  return false;
};

// Initialize analytics after consent
const initializeAnalytics = () => {
  // Load Google Analytics
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;
  
  gtag('js', new Date());
  gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Conversion tracking
export const trackConversion = (conversionType: string, value?: number) => {
  trackEvent('conversion', {
    conversion_type: conversionType,
    value: value,
  });
};

// Lead scoring events
export const trackLeadScore = (score: number, source: string) => {
  trackEvent('lead_score', {
    score: score,
    source: source,
  });
};