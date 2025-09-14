'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const services = [
    { name: 'Managed IT', href: '/services/managed-it' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
    { name: 'Cloud & M365', href: '/services/cloud-m365' },
    { name: 'Network Services', href: '/services/network' },
    { name: 'UCaaS', href: '/services/ucaas' },
    { name: 'Strategy & vCIO', href: '/services/strategy' },
    { name: 'Projects & PaaS', href: '/services/projects' },
    { name: 'SharePoint', href: '/services/sharepoint' },
  ];

  const industries = [
    { name: 'Financial Services', href: '/industries/financial', description: 'NYDFS Compliance & Security' },
    { name: 'Healthcare', href: '/industries/healthcare', description: 'HIPAA Compliant Solutions' },
    { name: 'Professional Services', href: '/industries/professional', description: 'Secure Business Operations' },
  ];

  // Removed resources array as requested

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/anc-logo-blue.svg"
                alt="Advanced Network Consulting"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 ml-8">
            <Link href="/" className="text-gray-700 hover:text-navy-900 px-3 py-2 text-sm font-medium whitespace-nowrap">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-700 hover:text-navy-900 px-3 py-2 text-sm font-medium flex items-center whitespace-nowrap"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'services' && (
                <div
                  className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50"
                  onMouseEnter={() => setActiveDropdown('services')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-navy-900"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-700 hover:text-navy-900 px-3 py-2 text-sm font-medium flex items-center whitespace-nowrap"
                onMouseEnter={() => setActiveDropdown('industries')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Industries
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'industries' && (
                <div
                  className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg py-1 z-50"
                  onMouseEnter={() => setActiveDropdown('industries')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {industries.map((industry) => (
                    <Link
                      key={industry.name}
                      href={industry.href}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-navy-900"
                    >
                      <div className="font-medium">{industry.name}</div>
                      <div className="text-xs text-gray-500">{industry.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/packages-pricing" className="text-gray-700 hover:text-navy-900 px-3 py-2 text-sm font-medium whitespace-nowrap">
              Packages & Pricing
            </Link>

            <Link href="/about" className="text-gray-700 hover:text-navy-900 px-3 py-2 text-sm font-medium whitespace-nowrap">
              About
            </Link>

            <Link href="/contact" className="text-gray-700 hover:text-navy-900 px-3 py-2 text-sm font-medium whitespace-nowrap">
              Contact
            </Link>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="bg-navy-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-navy-800 transition-colors"
            >
              Schedule Call
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-900 focus:outline-none focus:text-blue-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-navy-900">
              Home
            </Link>
            
            <div className="px-3 py-2">
              <div className="text-base font-medium text-gray-700 mb-2">Services</div>
              <div className="pl-4 space-y-1">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-navy-900"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="px-3 py-2">
              <div className="text-base font-medium text-gray-700 mb-2">Industries</div>
              <div className="pl-4 space-y-1">
                {industries.map((industry) => (
                  <Link
                    key={industry.name}
                    href={industry.href}
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-navy-900"
                  >
                    {industry.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/packages-pricing" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-navy-900">
              Packages & Pricing
            </Link>

            <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-navy-900">
              About
            </Link>

            <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-navy-900">
              Contact
            </Link>

            <Link
              href="/contact"
              className="block mx-3 mt-4 bg-navy-900 text-white px-4 py-2 rounded-md text-center font-medium hover:bg-navy-800"
            >
              Schedule Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;