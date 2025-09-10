import Link from 'next/link';
import { ArrowRight, Shield, CheckCircle } from 'lucide-react';

const Hero = () => {
  const features = [
    'NYDFS & HIPAA Compliant',
    '24/7 Proactive Monitoring',
    'Predictable Monthly Pricing',
    'Dedicated Account Manager'
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                <Shield className="h-4 w-4 mr-2" />
                Trusted by 200+ NYC Businesses
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Managed IT & Cybersecurity for{' '}
              <span className="text-blue-900">Regulated SMBs</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Expert IT services with NYDFS and HIPAA compliance. Get 99.9% uptime, 
              predictable costs, and peace of mind with our proven managed IT solutions.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center group"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/risk-assessment"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Get Risk Snapshot
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Trusted by leading NYC businesses:</p>
              <div className="flex items-center space-x-6 opacity-60">
                <div className="text-sm font-medium text-gray-400">Financial Services</div>
                <div className="text-sm font-medium text-gray-400">Healthcare</div>
                <div className="text-sm font-medium text-gray-400">Professional Services</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Your IT Infrastructure
                </h3>
                <p className="text-gray-600">
                  Fully managed, monitored, and secured
                </p>
              </div>

              {/* Dashboard Mockup */}
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

                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-gray-700">Compliance Check</span>
                  </div>
                  <span className="text-sm text-orange-600 font-medium">Passed</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">24/7 Support</div>
                  <div className="text-sm text-gray-600">Expert help when you need it</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-500 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;