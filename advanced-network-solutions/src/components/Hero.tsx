'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Shield, CheckCircle } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const features = [
    'NYDFS & HIPAA Compliant',
    '24/7 Proactive Monitoring',
    'Predictable Monthly Pricing',
    'Dedicated Account Manager'
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const setPlaybackRate = () => {
        video.playbackRate = 0.5;
      };
      
      // Set playback rate when video is ready
      if (video.readyState >= 2) {
        setPlaybackRate();
      } else {
        video.addEventListener('loadeddata', setPlaybackRate);
        video.addEventListener('canplay', setPlaybackRate);
      }
      
      return () => {
        video.removeEventListener('loadeddata', setPlaybackRate);
        video.removeEventListener('canplay', setPlaybackRate);
      };
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          onLoadedData={(e) => {
            e.currentTarget.playbackRate = 0.5;
          }}
          onCanPlay={(e) => {
            e.currentTarget.playbackRate = 0.5;
          }}
          onPlay={(e) => {
            e.currentTarget.playbackRate = 0.5;
          }}
        >
          <source src="/anc-hero-video.mp4" type="video/mp4" />
          {/* Fallback image in case video doesn't load */}
          <Image
            src="/anc-hero-img.png"
            alt="Advanced Network Consulting - Secure IT Infrastructure"
            fill
            className="object-cover"
            priority
          />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-navy-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/40 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-500/20 text-teal-200 border border-teal-400/30">
                <Shield className="h-4 w-4 mr-2" />
                Trusted by 200+ NYC Businesses
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Secure IT and Cybersecurity Solutions for{' '}
              <span className="text-teal-300 drop-shadow-lg">Growing Businesses</span>
            </h1>
            
            <p className="text-xl text-white mb-8 leading-relaxed drop-shadow-md">
              Expert managed IT services and cybersecurity solutions for regulated SMBs and mid-market clients in NYC. 
              Get 99.9% uptime, predictable costs, and peace of mind with NYDFS and HIPAA compliance.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-400 mr-3 flex-shrink-0 drop-shadow-md" />
                  <span className="text-white drop-shadow-md">{feature}</span>
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
            <div className="mt-8 pt-8 border-t border-white/30">
              <p className="text-sm text-white mb-4 drop-shadow-md">Trusted by leading NYC businesses:</p>
              <div className="flex items-center space-x-6">
                <div className="text-sm font-medium text-white drop-shadow-md">Financial Services</div>
                <div className="text-sm font-medium text-white drop-shadow-md">Healthcare</div>
                <div className="text-sm font-medium text-white drop-shadow-md">Professional Services</div>
              </div>
            </div>
          </div>

          {/* Right Column - Key Metrics */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-teal-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Your IT Infrastructure
                </h3>
                <p className="text-gray-300">
                  Fully managed, monitored, and secured
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                  <div className="text-sm text-teal-200">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-teal-200">Support</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-teal-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-navy-500 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;