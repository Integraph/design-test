// Schema.org structured data for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Advanced Network Solutions",
  "alternateName": "ANS",
  "url": "https://advancednetworksolutions.com",
  "logo": "https://advancednetworksolutions.com/logo.png",
  "description": "Expert managed IT services and cybersecurity solutions for regulated SMBs in NYC. NYDFS and HIPAA compliant with 99.9% uptime SLA.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://linkedin.com/company/advanced-network-solutions",
    "https://twitter.com/advancednetworks"
  ],
  "foundingDate": "2008",
  "numberOfEmployees": "25-50",
  "areaServed": {
    "@type": "City",
    "name": "New York"
  },
  "serviceType": [
    "Managed IT Services",
    "Cybersecurity",
    "Cloud Services",
    "Network Management",
    "Compliance Consulting"
  ]
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Managed IT Services",
  "description": "Comprehensive managed IT services including 24/7 monitoring, security management, and compliance support for NYC businesses.",
  "provider": {
    "@type": "Organization",
    "name": "Advanced Network Solutions"
  },
  "areaServed": {
    "@type": "City",
    "name": "New York"
  },
  "serviceType": "Managed IT Services",
  "offers": {
    "@type": "Offer",
    "price": "89",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "89",
      "priceCurrency": "USD",
      "unitText": "per user per month"
    }
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What's included in the monthly fee?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All packages include 24/7 monitoring, security management, backup and recovery, software updates, and compliance documentation. The main differences are in response times, support levels, and additional features."
      }
    },
    {
      "@type": "Question",
      "name": "Can I change packages later?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can upgrade or downgrade your package at any time. We'll work with you to ensure a smooth transition and adjust your billing accordingly."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer custom SLAs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our Enterprise package includes custom SLA terms. We can also create custom packages for businesses with specific requirements."
      }
    },
    {
      "@type": "Question",
      "name": "What about compliance requirements?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All packages include basic compliance documentation. For NYDFS, HIPAA, or other specific requirements, we offer compliance consulting as an add-on service."
      }
    }
  ]
};

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://advancednetworksolutions.com/#organization",
  "name": "Advanced Network Solutions",
  "image": "https://advancednetworksolutions.com/logo.png",
  "description": "Expert managed IT services and cybersecurity solutions for regulated SMBs in NYC.",
  "url": "https://advancednetworksolutions.com",
  "telephone": "+1-555-123-4567",
  "email": "info@advancednetworksolutions.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Business Ave",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "postalCode": "10001",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.7128",
    "longitude": "-74.0060"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "Invoice"],
  "currenciesAccepted": "USD"
};