import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Shield, 
  Clock, 
  Users, 
  Monitor, 
  Server, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  Calendar
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Managed IT Services - Advanced Network Solutions',
  description: 'Comprehensive managed IT services for NYC SMBs. 24/7 monitoring, proactive maintenance, and expert support with NYDFS and HIPAA compliance.',
  keywords: 'managed IT services, IT support, network monitoring, proactive maintenance, NYC IT services',
};

const ManagedITPage = () => {
  const features = [
    {
      icon: Monitor,
      title: '24/7 Proactive Monitoring',
      description: 'Continuous monitoring of your entire IT infrastructure with instant alerts and automated responses.'
    },
    {
      icon: Shield,
      title: 'Security Management',
      description: 'Comprehensive security including firewalls, antivirus, patch management, and threat detection.'
    },
    {
      icon: Server,
      title: 'Infrastructure Management',
      description: 'Complete management of servers, workstations, network equipment, and cloud resources.'
    },
    {
      icon: Users,
      title: 'User Support',
      description: 'Dedicated help desk with <15 minute response time for critical issues and expert technical support.'
    },
    {
      icon: Clock,
      title: 'Predictable Costs',
      description: 'Fixed monthly pricing with no surprise bills. Budget-friendly IT management for growing businesses.'
    },
    {
      icon: CheckCircle,
      title: 'Compliance Ready',
      description: 'NYDFS and HIPAA compliant solutions with documentation and audit support.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensive evaluation of your current IT infrastructure and business requirements.'
    },
    {
      step: '02',
      title: 'Implementation',
      description: 'Seamless deployment of monitoring tools, security measures, and management systems.'
    },
    {
      step: '03',
      title: '24/7 Monitoring',
      description: 'Continuous oversight with proactive maintenance and instant issue resolution.'
    },
    {
      step: '04',
      title: 'Ongoing Optimization',
      description: 'Regular reviews and improvements to ensure peak performance and security.'
    }
  ];

  const benefits = [
    '99.9% Uptime SLA Guarantee',
    'Reduced IT Costs by 30-40%',
    'Enhanced Security Posture',
    'Improved Employee Productivity',
    'Compliance Documentation',
    'Scalable Solutions',
    'Expert Technical Support',
    'Predictable Monthly Budget'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  <Shield className="h-4 w-4 mr-2" />
                  Fully Managed IT Services
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Complete IT Management for{' '}
                <span className="text-blue-900">NYC Businesses</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Focus on your business while we handle all your IT needs. From 24/7 monitoring 
                to proactive maintenance, we ensure your technology works seamlessly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center group"
                >
                  Get Free Assessment
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  href="/packages-pricing"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  View Pricing
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Monitor className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Your IT Infrastructure
                  </h3>
                  <p className="text-gray-600">
                    Fully managed and monitored
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-sm font-medium text-gray-700">All Systems Operational</span>
                    </div>
                    <span className="text-sm text-green-600 font-medium">99.9%</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-sm font-medium text-gray-700">Security Monitoring</span>
                    </div>
                    <span className="text-sm text-blue-600 font-medium">Active</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-sm font-medium text-gray-700">Backup Status</span>
                    </div>
                    <span className="text-sm text-purple-600 font-medium">Current</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive IT Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to keep your business running smoothly, from infrastructure 
              management to user support and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="card-hover text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to IT management that ensures reliability, security, and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Managed IT Services?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Experience the benefits of professional IT management with measurable results 
                and predictable costs.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6">
                Schedule a free IT assessment to discover how we can optimize your technology infrastructure.
              </p>
              
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="btn-primary w-full inline-flex items-center justify-center group"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Free Assessment
                </Link>
                
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    (555) 123-4567
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    info@advancednetworksolutions.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your IT?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join 200+ NYC businesses that trust us with their IT infrastructure. 
            Get started with a free assessment today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center group"
            >
              Get Free Assessment
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/packages-pricing"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagedITPage;