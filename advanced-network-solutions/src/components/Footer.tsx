import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Managed IT', href: '/services/managed-it' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
    { name: 'Cloud & M365', href: '/services/cloud-m365' },
    { name: 'Network Services', href: '/services/network' },
    { name: 'UCaaS', href: '/services/ucaas' },
    { name: 'Strategy & vCIO', href: '/services/strategy' },
  ];

  const industries = [
    { name: 'Financial Services', href: '/industries/financial' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Professional Services', href: '/industries/professional' },
  ];

  const resources = [
    { name: 'Guides', href: '/resources/guides' },
    { name: 'Webinars', href: '/resources/webinars' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Team', href: '/about#team' },
    { name: 'Careers', href: '/about#careers' },
    { name: 'Testimonials', href: '/about#testimonials' },
    { name: 'Trust Center', href: '/trust-center' },
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Data Processing Agreement', href: '/dpa' },
  ];

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/anc-logo-white.svg"
                alt="Advanced Network Consulting"
                width={120}
                height={40}
                className="h-10 w-auto mb-2"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Expert managed IT services and cybersecurity solutions for regulated SMBs and mid-market clients in NYC. 
              NYDFS and HIPAA compliant with 99.9% uptime SLA.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-3 text-teal-400" />
                <span>New York, NY</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3 text-teal-400" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3 text-teal-400" />
                <span>info@advancednetworkconsulting.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="h-4 w-4 mr-3 text-teal-400" />
                <span>24/7 Support Available</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              {industries.map((industry) => (
                <li key={industry.name}>
                  <Link
                    href={industry.href}
                    className="text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold mb-4 mt-6">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.href}
                    className="text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 mb-6">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-navy-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Advanced Network Consulting (ANC). All rights reserved.
            </div>
            
            {/* Certifications */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>NYDFS Compliant</span>
              <span>HIPAA Compliant</span>
              <span>SOC 2 Type II</span>
              <span>ISO 27001</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;