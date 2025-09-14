'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  FileText, 
  Video, 
  Download, 
  Filter, 
  Search,
  ArrowRight,
  Lock,
  Clock
} from 'lucide-react';

const ResourcesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources', count: 24 },
    { id: 'guides', name: 'Guides', count: 12 },
    { id: 'webinars', name: 'Webinars', count: 6 },
    { id: 'checklists', name: 'Checklists', count: 4 },
    { id: 'templates', name: 'Templates', count: 2 }
  ];

  const resources = [
    {
      id: 1,
      title: 'NYDFS Cybersecurity Compliance Checklist',
      description: 'Complete checklist to ensure your financial services firm meets NYDFS Part 500 requirements.',
      category: 'guides',
      type: 'PDF Guide',
      icon: FileText,
      gated: true,
      downloadCount: 1247,
      readTime: '15 min read',
      featured: true
    },
    {
      id: 2,
      title: 'HIPAA Compliance for Healthcare IT',
      description: 'Essential guide to implementing HIPAA-compliant IT infrastructure and security measures.',
      category: 'guides',
      type: 'PDF Guide',
      icon: FileText,
      gated: true,
      downloadCount: 892,
      readTime: '20 min read',
      featured: true
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices for SMBs',
      description: 'Learn the fundamental security practices every small business should implement.',
      category: 'guides',
      type: 'PDF Guide',
      icon: FileText,
      gated: false,
      downloadCount: 2156,
      readTime: '12 min read',
      featured: false
    },
    {
      id: 4,
      title: 'Network Security Assessment Template',
      description: 'Comprehensive template to evaluate your current network security posture.',
      category: 'templates',
      type: 'Excel Template',
      icon: FileText,
      gated: true,
      downloadCount: 634,
      readTime: '5 min setup',
      featured: false
    },
    {
      id: 5,
      title: 'IT Disaster Recovery Planning Webinar',
      description: 'Expert-led session on creating and testing your disaster recovery plan.',
      category: 'webinars',
      type: 'Video',
      icon: Video,
      gated: true,
      downloadCount: 445,
      readTime: '45 min',
      featured: true
    },
    {
      id: 6,
      title: 'Cloud Migration Checklist',
      description: 'Step-by-step checklist for migrating your infrastructure to the cloud.',
      category: 'checklists',
      type: 'PDF Checklist',
      icon: FileText,
      gated: false,
      downloadCount: 1123,
      readTime: '8 min read',
      featured: false
    },
    {
      id: 7,
      title: 'Managed IT Services ROI Calculator',
      description: 'Calculate the potential savings and ROI of switching to managed IT services.',
      category: 'templates',
      type: 'Excel Calculator',
      icon: FileText,
      gated: false,
      downloadCount: 789,
      readTime: '3 min setup',
      featured: false
    },
    {
      id: 8,
      title: 'Cybersecurity Awareness Training Webinar',
      description: 'Train your team on recognizing and preventing common cyber threats.',
      category: 'webinars',
      type: 'Video',
      icon: Video,
      gated: true,
      downloadCount: 567,
      readTime: '30 min',
      featured: false
    },
    {
      id: 9,
      title: 'Backup and Recovery Best Practices',
      description: 'Comprehensive guide to implementing robust backup and recovery procedures.',
      category: 'guides',
      type: 'PDF Guide',
      icon: FileText,
      gated: false,
      downloadCount: 1456,
      readTime: '18 min read',
      featured: false
    },
    {
      id: 10,
      title: 'IT Budget Planning Template',
      description: 'Template to help plan and track your IT budget and expenses.',
      category: 'templates',
      type: 'Excel Template',
      icon: FileText,
      gated: true,
      downloadCount: 423,
      readTime: '10 min setup',
      featured: false
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredResources = resources.filter(resource => resource.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-800">
              <FileText className="h-4 w-4 mr-2" />
              Free Resources
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Expert IT Resources for{' '}
            <span className="text-navy-900">NYC Businesses</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Access our library of guides, checklists, templates, and webinars designed 
            to help you navigate IT challenges and compliance requirements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center group"
            >
              Get Custom Resources
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and valuable resources for NYC businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource) => {
              const IconComponent = resource.icon;
              return (
                <div key={resource.id} className="card-hover group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-teal-600" />
                    </div>
                    {resource.gated && (
                      <Lock className="h-5 w-5 text-gray-400" />
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-navy-900 transition-colors">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      {resource.downloadCount.toLocaleString()} downloads
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {resource.readTime}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-teal-600">
                      {resource.type}
                    </span>
                    <Link
                      href={resource.gated ? `/resources/download/${resource.id}` : `/resources/view/${resource.id}`}
                      className="text-teal-600 hover:text-teal-800 font-medium text-sm flex items-center group"
                    >
                      {resource.gated ? 'Download' : 'View'}
                      <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Resources with Filter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              All Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our complete library of IT resources and tools.
            </p>
          </div>

          {/* Filter and Search */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-navy-900 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent w-64"
                />
              </div>
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => {
              const IconComponent = resource.icon;
              return (
                <div key={resource.id} className="card-hover group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-teal-600" />
                    </div>
                    {resource.gated && (
                      <Lock className="h-4 w-4 text-gray-400" />
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-navy-900 transition-colors">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Download className="h-3 w-3 mr-1" />
                      {resource.downloadCount.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {resource.readTime}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-teal-600">
                      {resource.type}
                    </span>
                    <Link
                      href={resource.gated ? `/resources/download/${resource.id}` : `/resources/view/${resource.id}`}
                      className="text-teal-600 hover:text-teal-800 font-medium text-sm flex items-center group"
                    >
                      {resource.gated ? 'Download' : 'View'}
                      <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No resources found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Need Custom Resources?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Looking for something specific? Our team can create custom guides, 
            templates, and resources tailored to your industry and requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-navy-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center group"
            >
              Request Custom Resource
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;