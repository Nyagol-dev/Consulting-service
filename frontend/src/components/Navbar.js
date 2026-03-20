import React from 'react';

function Navbar({ isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-white">CyberShield</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="#services" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
              <a href="#testimonials" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Testimonials</a>
              <a href="#case-studies" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Case Studies</a>
              <a href="#blog" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Blog</a>
              <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">Book Consultation</a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95 backdrop-blur-md">
            <a href="#home" className="text-gray-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#services" className="text-gray-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#testimonials" className="text-gray-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">Testimonials</a>
            <a href="#case-studies" className="text-gray-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">Case Studies</a>
            <a href="#blog" className="text-gray-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">Blog</a>
            <a href="#contact" className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors">Book Consultation</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
