import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactForm from './components/ContactForm';

// Animation on scroll hook
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const [element, setElement] = useState(null);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => observer.disconnect();
  }, [element, options]);

  return [setElement, isIntersecting];
};

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return <span>{count}</span>;
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: 'penetration-testing'
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    setTimeout(() => setIsFormSubmitted(false), 3000);
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
      service: 'penetration-testing'
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="App">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <Hero />

      {/* Stats Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">
                <AnimatedCounter end={500} isVisible={true} />+
              </div>
              <div className="text-gray-300">Companies Protected</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">
                <AnimatedCounter end={99} isVisible={true} />.9%
              </div>
              <div className="text-gray-300">Threat Detection Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">
                <AnimatedCounter end={24} isVisible={true} />/7
              </div>
              <div className="text-gray-300">Security Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">
                <AnimatedCounter end={10} isVisible={true} />+
              </div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <Services />

      {/* Video Testimonials Section */}
      <section id="testimonials" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Client Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our clients about how we've helped them strengthen their security posture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="testimonial-card bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                <img 
                  src="https://images.pexels.com/photos/7616608/pexels-photo-7616608.jpeg" 
                  alt="Sarah Johnson" 
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
                />
                <div className="text-center">
                  <h4 className="text-white font-semibold">Sarah Johnson</h4>
                  <p className="text-gray-400 text-sm">CTO, FinTech Solutions</p>
                </div>
              </div>
              <div className="text-center mb-6">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center mx-auto">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Watch Video
                </button>
              </div>
              <p className="text-gray-300 text-center">
                "CyberShield transformed our security posture. Their penetration testing revealed critical vulnerabilities 
                we never knew existed. The team's expertise and professionalism exceeded our expectations."
              </p>
            </div>

            <div className="testimonial-card bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                  alt="Michael Chen" 
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
                />
                <div className="text-center">
                  <h4 className="text-white font-semibold">Michael Chen</h4>
                  <p className="text-gray-400 text-sm">CISO, Healthcare Corp</p>
                </div>
              </div>
              <div className="text-center mb-6">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center mx-auto">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Watch Video
                </button>
              </div>
              <p className="text-gray-300 text-center">
                "Working with CyberShield on our compliance journey was seamless. They guided us through SOC 2 
                certification and helped us achieve compliance ahead of schedule."
              </p>
            </div>

            <div className="testimonial-card bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b2e0b1b8" 
                  alt="Emily Rodriguez" 
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
                />
                <div className="text-center">
                  <h4 className="text-white font-semibold">Emily Rodriguez</h4>
                  <p className="text-gray-400 text-sm">CEO, E-commerce Plus</p>
                </div>
              </div>
              <div className="text-center mb-6">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center mx-auto">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Watch Video
                </button>
              </div>
              <p className="text-gray-300 text-center">
                "The incident response team at CyberShield was incredible. When we had a security breach, 
                they responded within hours and helped us contain the threat with minimal downtime."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Case Studies</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world examples of how we've helped organizations strengthen their security posture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="case-study-card bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Financial Services</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Major Bank Achieves 99.9% Threat Detection Rate
              </h3>
              <p className="text-gray-300 mb-6">
                Learn how we helped a regional bank implement a comprehensive security monitoring system 
                that increased their threat detection capabilities by 300% while reducing false positives.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">
                  <span className="font-medium">Results:</span> 300% improvement in threat detection
                </div>
                <a 
                  href="#" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                >
                  Download PDF
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="case-study-card bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">Healthcare</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Healthcare Network Prevents $2M Ransomware Attack
              </h3>
              <p className="text-gray-300 mb-6">
                Discover how our proactive security measures and rapid incident response helped a healthcare 
                network prevent a sophisticated ransomware attack that could have cost millions.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">
                  <span className="font-medium">Results:</span> $2M+ in damages prevented
                </div>
                <a 
                  href="#" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                >
                  Download PDF
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="case-study-card bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">Technology</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                SaaS Startup Achieves SOC 2 Compliance in Record Time
              </h3>
              <p className="text-gray-300 mb-6">
                See how we helped a fast-growing SaaS company achieve SOC 2 Type II compliance 
                in just 4 months, enabling them to close major enterprise deals.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">
                  <span className="font-medium">Results:</span> SOC 2 compliance in 4 months
                </div>
                <a 
                  href="#" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                >
                  Download PDF
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="case-study-card bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">Manufacturing</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Manufacturing Giant Secures Industrial IoT Network
              </h3>
              <p className="text-gray-300 mb-6">
                Learn how we helped a Fortune 500 manufacturer secure their industrial IoT network 
                against sophisticated nation-state threats while maintaining operational efficiency.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">
                  <span className="font-medium">Results:</span> 100% uptime maintained
                </div>
                <a 
                  href="#" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                >
                  Download PDF
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section id="blog" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Latest Insights</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed about the latest cybersecurity threats, trends, and best practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="blog-card bg-slate-700/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Threat Intelligence</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  New AI-Powered Phishing Attacks Target Financial Services
                </h3>
                <p className="text-gray-300 mb-4">
                  Learn about the latest AI-powered phishing campaigns targeting financial institutions 
                  and how to protect your organization from these sophisticated attacks.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">March 15, 2024</span>
                  <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">
                    Read More →
                  </a>
                </div>
              </div>
            </article>

            <article className="blog-card bg-slate-700/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-green-500 to-teal-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">Compliance</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  SOC 2 Type II: A Complete Guide for SaaS Companies
                </h3>
                <p className="text-gray-300 mb-4">
                  Everything you need to know about SOC 2 Type II compliance, including timeline, 
                  requirements, and best practices for successful certification.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">March 12, 2024</span>
                  <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">
                    Read More →
                  </a>
                </div>
              </div>
            </article>

            <article className="blog-card bg-slate-700/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-red-500 to-pink-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">Incident Response</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  Building an Effective Incident Response Playbook
                </h3>
                <p className="text-gray-300 mb-4">
                  Step-by-step guide to creating a comprehensive incident response plan that minimizes 
                  damage and ensures rapid recovery from security breaches.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">March 10, 2024</span>
                  <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="#" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              View All Articles
            </a>
          </div>
        </div>
      </section>

      <ContactForm
        formData={formData}
        onInputChange={handleInputChange}
        onFormSubmit={handleFormSubmit}
        isFormSubmitted={isFormSubmitted}
      />

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-white">CyberShield</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Protecting your digital future with advanced cybersecurity solutions. 
                We're your trusted partner in the fight against cyber threats.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Penetration Testing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security Compliance</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Risk Assessment</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Incident Response</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 CyberShield. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;