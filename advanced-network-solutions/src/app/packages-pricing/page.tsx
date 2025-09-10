import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Check, 
  X, 
  Star, 
  ArrowRight, 
  Shield, 
  Calendar,
  Phone
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Packages & Pricing - Advanced Network Solutions',
  description: 'Transparent pricing for managed IT services. Choose from Essential, Professional, or Enterprise packages with clear SLA differences and feature comparisons.',
  keywords: 'managed IT pricing, IT service packages, SLA comparison, enterprise IT services, NYC IT pricing',
};

const PackagesPricingPage = () => {
  const packages = [
    {
      name: 'Essential',
      price: '$89',
      period: 'per user/month',
      description: 'Perfect for small businesses getting started with managed IT',
      features: [
        '24/7 Help Desk Support',
        'Remote Monitoring & Management',
        'Basic Security Suite',
        'Email Support',
        'Monthly Reporting',
        'Backup & Recovery (Daily)',
        'Software Updates',
        'Basic Compliance Documentation'
      ],
      limitations: [
        'Standard Response Time (4 hours)',
        'Business Hours Support Only',
        'Basic Security Monitoring',
        'Limited Customization'
      ],
      sla: {
        uptime: '99.5%',
        response: '4 hours',
        resolution: '24 hours'
      },
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: 'per user/month',
      description: 'Comprehensive IT management for growing businesses',
      features: [
        '24/7 Proactive Monitoring',
        'Dedicated Account Manager',
        'Advanced Security Suite',
        'Phone & Email Support',
        'Weekly Reporting',
        'Backup & Recovery (Hourly)',
        'Patch Management',
        'Compliance Documentation',
        'Network Management',
        'Cloud Services Management',
        'Mobile Device Management',
        'Security Awareness Training'
      ],
      limitations: [
        'Standard Response Time (2 hours)',
        'Limited Custom Integrations',
        'Basic Disaster Recovery'
      ],
      sla: {
        uptime: '99.9%',
        response: '2 hours',
        resolution: '8 hours'
      },
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$249',
      period: 'per user/month',
      description: 'Full-service IT management with premium support and compliance',
      features: [
        '24/7 Proactive Monitoring',
        'Dedicated Technical Team',
        'Enterprise Security Suite',
        'Priority Support (Phone, Email, Chat)',
        'Daily Reporting & Analytics',
        'Backup & Recovery (Real-time)',
        'Automated Patch Management',
        'Full Compliance Documentation',
        'Advanced Network Management',
        'Multi-Cloud Management',
        'Enterprise Mobile Management',
        'Advanced Security Training',
        'Custom Integrations',
        'Disaster Recovery Planning',
        'vCIO Services (2 hours/month)',
        'Security Audits (Quarterly)',
        'Custom SLA Terms'
      ],
      limitations: [],
      sla: {
        uptime: '99.99%',
        response: '15 minutes',
        resolution: '2 hours'
      },
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'Advanced Threat Protection',
      description: 'Enhanced security monitoring and threat detection',
      price: '$25/user/month'
    },
    {
      name: 'Business Continuity & Disaster Recovery',
      description: 'Comprehensive BCDR planning and implementation',
      price: '$50/user/month'
    },
    {
      name: 'Compliance Consulting',
      description: 'NYDFS, HIPAA, and other regulatory compliance support',
      price: '$150/hour'
    },
    {
      name: 'Cloud Migration Services',
      description: 'Professional migration to Azure, AWS, or M365',
      price: 'Project-based'
    },
    {
      name: 'Security Awareness Training',
      description: 'Regular training sessions for your team',
      price: '$500/session'
    }
  ];

  const mdrLevels = [
    {
      level: 'Basic',
      description: 'Automated threat detection and basic response',
      features: ['Automated Alerts', 'Basic Incident Response', 'Standard Reporting']
    },
    {
      level: 'Advanced',
      description: 'Human-in-the-loop threat hunting and response',
      features: ['24/7 SOC Monitoring', 'Threat Hunting', 'Incident Response', 'Forensic Analysis']
    },
    {
      level: 'Enterprise',
      description: 'Full MDR with custom playbooks and dedicated team',
      features: ['Dedicated Security Team', 'Custom Playbooks', 'Advanced Analytics', 'Threat Intelligence']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              <Shield className="h-4 w-4 mr-2" />
              Transparent Pricing
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Choose Your Perfect{' '}
            <span className="text-blue-900">IT Package</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transparent pricing with no hidden fees. All packages include 24/7 support, 
            security monitoring, and compliance documentation. Scale as you grow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center group"
            >
              Get Custom Quote
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/risk-assessment"
              className="btn-secondary inline-flex items-center justify-center"
            >
              Free Risk Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Packages Comparison */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Compare Our Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the package that fits your business needs. All packages include 
              our core services with different levels of support and features.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-2xl shadow-lg border-2 ${
                  pkg.popular 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 bg-white'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {pkg.description}
                    </p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">
                        {pkg.price}
                      </span>
                      <span className="text-gray-600 ml-1">
                        {pkg.period}
                      </span>
                    </div>
                  </div>

                  {/* SLA Information */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">SLA Guarantees</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Uptime:</span>
                        <span className="font-medium">{pkg.sla.uptime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Response:</span>
                        <span className="font-medium">{pkg.sla.response}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Resolution:</span>
                        <span className="font-medium">{pkg.sla.resolution}</span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What&apos;s Included</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Limitations */}
                  {pkg.limitations.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Limitations</h4>
                      <ul className="space-y-2">
                        {pkg.limitations.map((limitation, limitIndex) => (
                          <li key={limitIndex} className="flex items-start">
                            <X className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA Button */}
                  <Link
                    href="/contact"
                    className={`w-full py-3 px-4 rounded-md font-medium text-center transition-colors ${
                      pkg.popular
                        ? 'bg-blue-900 text-white hover:bg-blue-800'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MDR Levels Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Managed Detection & Response (MDR) Levels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the level of security monitoring and response that matches your risk profile and compliance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mdrLevels.map((level, index) => (
              <div key={index} className="card text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {level.level} MDR
                </h3>
                <p className="text-gray-600 mb-6">
                  {level.description}
                </p>
                <ul className="space-y-2">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your package with specialized services tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="card-hover">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {addon.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {addon.description}
                </p>
                <div className="text-lg font-bold text-blue-900">
                  {addon.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What&apos;s included in the monthly fee?
              </h3>
              <p className="text-gray-600">
                All packages include 24/7 monitoring, security management, backup and recovery, 
                software updates, and compliance documentation. The main differences are in 
                response times, support levels, and additional features.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I change packages later?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your package at any time. We&apos;ll work with 
                you to ensure a smooth transition and adjust your billing accordingly.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you offer custom SLAs?
              </h3>
              <p className="text-gray-600">
                Yes, our Enterprise package includes custom SLA terms. We can also create 
                custom packages for businesses with specific requirements.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What about compliance requirements?
              </h3>
              <p className="text-gray-600">
                All packages include basic compliance documentation. For NYDFS, HIPAA, or 
                other specific requirements, we offer compliance consulting as an add-on service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule a free consultation to discuss your needs and get a custom quote. 
            No obligation, just expert advice.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center group"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Free Consultation
            </Link>
            
            <div className="flex items-center justify-center text-blue-100">
              <Phone className="h-4 w-4 mr-2" />
              (555) 123-4567
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackagesPricingPage;