import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Check, 
  X, 
  Star, 
  Shield, 
  Calendar,
  Phone,
  Clock,
  Users
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Transparent Pricing for Managed IT Services - Advanced Network Consulting (ANC)',
  description: 'Choose the right level of IT support for your business. All plans include proactive monitoring, security management, and NYC-based support.',
  keywords: 'managed IT pricing, IT service packages, SLA comparison, enterprise IT services, NYC IT pricing, transparent pricing',
};

const PackagesPricingPage = () => {
  const packages = [
    {
      name: 'Essential',
      price: '$2,500',
      period: '/month',
      description: 'Core managed IT services for small businesses',
      features: [
        '24/7 Network Monitoring',
        'Help Desk Support (Business Hours)',
        'Patch Management',
        'Basic Backup & Recovery',
        'Antivirus Management',
        'Monthly Reporting',
        '99.5% Uptime SLA'
      ],
      excluded: [
        'Advanced Threat Detection',
        '24/7 Help Desk',
        'Compliance Monitoring',
        'vCIO Services',
        'Priority Response (<15min)'
      ],
      metrics: {
        uptime: '99.5%',
        response: '4 hours',
        support: 'Business Hours'
      },
      popular: false
    },
    {
      name: 'Professional',
      price: '$4,200',
      period: '/month',
      description: 'Comprehensive IT management for growing companies',
      features: [
        '24/7 Network Monitoring',
        'Help Desk Support (Business Hours)',
        'Patch Management',
        'Basic Backup & Recovery',
        'Antivirus Management',
        'Monthly Reporting',
        '99.9% Uptime SLA',
        'Advanced Threat Detection',
        '24/7 Help Desk',
        'Compliance Monitoring'
      ],
      excluded: [
        'vCIO Services',
        'Priority Response (<15min)'
      ],
      metrics: {
        uptime: '99.9%',
        response: '1 hour',
        support: '24/7'
      },
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$6,800',
      period: '/month',
      description: 'Full-service IT with compliance and strategic guidance',
      features: [
        '24/7 Network Monitoring',
        'Help Desk Support (Business Hours)',
        'Patch Management',
        'Basic Backup & Recovery',
        'Antivirus Management',
        'Monthly Reporting',
        '99.95% Uptime SLA',
        'Advanced Threat Detection',
        '24/7 Help Desk',
        'Compliance Monitoring',
        'vCIO Services',
        'Priority Response (<15min)'
      ],
      excluded: [],
      metrics: {
        uptime: '99.95%',
        response: '15 minutes',
        support: '24/7 Priority'
      },
      popular: false
    }
  ];

  const complianceAddOns = [
    {
      name: 'NYDFS Compliance Package',
      price: '$1,200/month',
      features: [
        'NYDFS 23 NYCRR 500 monitoring',
        'Quarterly compliance reporting',
        'Risk assessment updates',
        'Incident response planning'
      ]
    },
    {
      name: 'HIPAA Compliance Package',
      price: '$900/month',
      features: [
        'BAA documentation',
        'PHI security monitoring',
        'HIPAA risk assessments',
        'Staff training programs'
      ]
    },
    {
      name: 'Advanced BCDR',
      price: '$800/month',
      features: [
        '4-hour RTO/RPO',
        'Automated failover',
        'Disaster recovery testing',
        'Business continuity planning'
      ]
    }
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Transparent Pricing for Managed IT Services
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Choose the right level of IT support for your business. All plans include proactive monitoring, security management, and NYC-based support.
          </p>

          {/* Proof Bar */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
            <div className="flex items-center">
              <Shield className="h-6 w-6 text-teal-600 mr-3" />
              <span className="text-gray-700 font-medium">NYDFS & HIPAA Ready</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-6 w-6 text-teal-600 mr-3" />
              <span className="text-gray-700 font-medium">24/7 Monitoring</span>
            </div>
            <div className="flex items-center">
              <Users className="h-6 w-6 text-teal-600 mr-3" />
              <span className="text-gray-700 font-medium">NYC-Based Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Comparison */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-2xl shadow-lg border-2 ${
                  pkg.popular 
                    ? 'border-navy-500 bg-navy-50' 
                    : 'border-gray-200 bg-white'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-navy-900 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
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
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">
                        {pkg.price}
                      </span>
                      <span className="text-gray-600 ml-1">
                        {pkg.period}
                      </span>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{pkg.metrics.uptime}</div>
                        <div className="text-xs text-gray-500">Uptime SLA</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{pkg.metrics.response}</div>
                        <div className="text-xs text-gray-500">Response</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{pkg.metrics.support}</div>
                        <div className="text-xs text-gray-500">Support</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/contact"
                    className={`w-full py-3 px-4 rounded-md font-medium text-center transition-colors mb-6 ${
                      pkg.popular
                        ? 'bg-navy-900 text-white hover:bg-navy-800'
                        : 'bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    Get Started →
                  </Link>

                  {/* Included Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Included Features</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Excluded Features */}
                  {pkg.excluded.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Excluded Features</h4>
                      <ul className="space-y-2">
                        {pkg.excluded.map((excluded, excludedIndex) => (
                          <li key={excludedIndex} className="flex items-start">
                            <X className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{excluded}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Add-ons Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Compliance & Security Add-Ons
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhanced packages for regulated industries requiring specialized compliance and security measures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {complianceAddOns.map((addon, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {addon.name}
                </h3>
                <div className="text-2xl font-bold text-navy-900 mb-4">
                  {addon.price}
                </div>
                <ul className="space-y-3 mb-6">
                  {addon.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="w-full bg-white text-gray-900 border-2 border-gray-900 py-2 px-4 rounded-md font-medium text-center hover:bg-gray-50 transition-colors"
                >
                  Add to Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What&apos;s included in the monthly fee?
              </h3>
              <p className="text-gray-600">
                All packages include 24/7 network monitoring, help desk support, patch management, 
                backup & recovery, antivirus management, and monthly reporting. The main differences 
                are in response times, support levels, and additional features like compliance monitoring.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I upgrade or downgrade my package?
              </h3>
              <p className="text-gray-600">
                Yes, you can change your package at any time. We&apos;ll work with you to ensure 
                a smooth transition and adjust your billing accordingly.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What compliance add-ons are available?
              </h3>
              <p className="text-gray-600">
                We offer NYDFS Compliance Package ($1,200/month), HIPAA Compliance Package 
                ($900/month), and Advanced BCDR ($800/month) to meet specific regulatory requirements.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you offer custom SLAs?
              </h3>
              <p className="text-gray-600">
                Yes, our Enterprise package includes priority response times and custom SLA terms. 
                We can also create custom packages for businesses with specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Schedule a free consultation to discuss your needs and get a custom quote. 
            No obligation, just expert advice.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-navy-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center group"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Free Consultation
            </Link>
            
            <div className="flex items-center justify-center text-teal-100">
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