import React from 'react';

function Services() {
  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Cybersecurity Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive security solutions tailored to protect your business from modern cyber threats
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="service-card bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
            <div className="mb-6">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Penetration Testing"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Penetration Testing</h3>
            <p className="text-gray-300 mb-6">
              Comprehensive security assessments to identify vulnerabilities before attackers do.
              Our expert team simulates real-world attacks to strengthen your defenses.
            </p>
            <div className="flex items-center text-blue-400 font-medium">
              <span>Learn More</span>
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          <div className="service-card bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
            <div className="mb-6">
              <img
                src="https://images.unsplash.com/photo-1593407089396-93f0c7a575f0"
                alt="Security Compliance"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Security Compliance</h3>
            <p className="text-gray-300 mb-6">
              Ensure your organization meets industry standards with our compliance expertise.
              We help you navigate SOC 2, ISO 27001, GDPR, and other regulatory requirements.
            </p>
            <div className="flex items-center text-blue-400 font-medium">
              <span>Learn More</span>
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          <div className="service-card bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
            <div className="mb-6">
              <img
                src="https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg"
                alt="Risk Assessment"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Risk Assessment</h3>
            <p className="text-gray-300 mb-6">
              Comprehensive risk analysis to identify, assess, and prioritize security threats.
              We provide actionable insights to strengthen your security posture.
            </p>
            <div className="flex items-center text-blue-400 font-medium">
              <span>Learn More</span>
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          <div className="service-card bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
            <div className="mb-6">
              <img
                src="https://images.unsplash.com/photo-1639815188507-f99cc0aae22f"
                alt="Incident Response"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Incident Response</h3>
            <p className="text-gray-300 mb-6">
              Rapid response to security incidents with our expert team. We help contain,
              investigate, and recover from security breaches with minimal business impact.
            </p>
            <div className="flex items-center text-blue-400 font-medium">
              <span>Learn More</span>
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          <div className="service-card bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
            <div className="mb-6">
              <img
                src="https://images.unsplash.com/photo-1590494165264-1ebe3602eb80"
                alt="Security Training"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Security Training</h3>
            <p className="text-gray-300 mb-6">
              Empower your team with comprehensive security awareness training.
              Build a human firewall against social engineering and phishing attacks.
            </p>
            <div className="flex items-center text-blue-400 font-medium">
              <span>Learn More</span>
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          <div className="service-card bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
            <div className="mb-6">
              <img
                src="https://images.pexels.com/photos/6075005/pexels-photo-6075005.jpeg"
                alt="Security Architecture"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Security Architecture</h3>
            <p className="text-gray-300 mb-6">
              Design and implement robust security architectures tailored to your business needs.
              We create layered defense strategies that scale with your organization.
            </p>
            <div className="flex items-center text-blue-400 font-medium">
              <span>Learn More</span>
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
