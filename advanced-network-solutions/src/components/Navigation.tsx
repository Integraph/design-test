'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Server, Shield, Cloud, Network, Headphones, Brain, Wrench, ArrowUp } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const services = [
    { name: 'Managed IT', href: '/services/managed-it', description: '24/7 IT support & monitoring', icon: Server },
    { name: 'Cloud & M365', href: '/services/cloud-m365', description: 'Azure & Office 365 solutions', icon: Cloud },
    { name: 'UCaaS', href: '/services/ucaas', description: 'Unified communications', icon: Headphones },
    { name: 'Projects & PaaS', href: '/services/projects', description: 'Technology projects', icon: Wrench },
    { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Advanced threat protection', icon: Shield },
    { name: 'Network Infrastructure', href: '/services/network', description: 'Reliable network design', icon: Network },
    { name: 'Strategy & vCIO', href: '/services/strategy', description: 'Virtual CIO services', icon: Brain },
    { name: 'SharePoint', href: '/services/sharepoint', description: 'Collaboration platforms', icon: ArrowUp },
  ];

  const industries = [
    { name: 'Financial Services', href: '/industries/financial', description: 'NYDFS compliance expertise' },
    { name: 'Healthcare', href: '/industries/healthcare', description: 'HIPAA compliant solutions' },
    { name: 'Professional Services', href: '/industries/professional', description: 'Tailored business solutions' },
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
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'services' && (
                <div
                  className="absolute left-0 mt-2 w-96 bg-white rounded-md shadow-lg py-4 z-50"
                  onMouseEnter={() => handleMouseEnter('services')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid grid-cols-2 gap-4 px-4">
                    {services.map((service) => {
                      const IconComponent = service.icon;
                      return (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="flex items-start space-x-3 p-3 rounded-md hover:bg-teal-50 transition-colors group"
                        >
                          <div className="flex-shrink-0">
                            <IconComponent className="h-5 w-5 text-navy-900 group-hover:text-teal-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold text-gray-900 group-hover:text-navy-900">
                              {service.name}
                            </div>
                            <div className="text-xs text-gray-500 group-hover:text-gray-700">
                              {service.description}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-700 hover:text-navy-900 px-3 py-2 text-sm font-medium flex items-center whitespace-nowrap"
                onMouseEnter={() => handleMouseEnter('industries')}
                onMouseLeave={handleMouseLeave}
              >
                Industries
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'industries' && (
                <div
                  className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg py-4 z-50"
                  onMouseEnter={() => handleMouseEnter('industries')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="px-4 space-y-2">
                    {industries.map((industry) => (
                      <Link
                        key={industry.name}
                        href={industry.href}
                        className="block p-3 rounded-md hover:bg-teal-50 transition-colors group"
                      >
                        <div className="text-sm font-semibold text-gray-900 group-hover:text-navy-900">
                          {industry.name}
                        </div>
                        <div className="text-xs text-gray-500 group-hover:text-gray-700">
                          {industry.description}
                        </div>
                      </Link>
                    ))}
                  </div>
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
              <div className="pl-4 space-y-2">
                {services.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="flex items-start space-x-3 px-3 py-2 text-sm text-gray-600 hover:text-navy-900 hover:bg-teal-50 rounded-md transition-colors"
                    >
                      <IconComponent className="h-4 w-4 text-navy-900 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{service.name}</div>
                        <div className="text-xs text-gray-500">{service.description}</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="px-3 py-2">
              <div className="text-base font-medium text-gray-700 mb-2">Industries</div>
              <div className="pl-4 space-y-2">
                {industries.map((industry) => (
                  <Link
                    key={industry.name}
                    href={industry.href}
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-navy-900 hover:bg-teal-50 rounded-md transition-colors"
                  >
                    <div className="font-medium">{industry.name}</div>
                    <div className="text-xs text-gray-500">{industry.description}</div>
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