// components/Footer.tsx
import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="gradient-primary text-gray-300 px-4 py-4 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo and Intro */}
        <div className="space-y-3">
          <h1 className="text-xl font-bold text-white">Zipserve</h1>
          <p className="text-xs text-gray-200 leading-relaxed">
            Connecting you with trusted professionals anytime, anywhere.
          </p>
          <div className="flex gap-3 text-gray-400">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
            Quick Links
          </h2>
          <ul className="space-y-2 text-xs">
            {[
              { name: "About Us", href: "/about" },
              { name: "Contact", href: "/contact" },
              { name: "Work With Us", href: "/work-with-us" },
              { name: "Register", href: "/register" },
              { name: "Investors", href: "/investors" },
              { name: "Our Services", href: "/services" },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
            Resources
          </h2>
          <ul className="space-y-2 text-xs">
            {[
              { name: "Help Center", href: "/help" },
              { name: "Privacy Policy", href: "/privacy" },
              { name: "Terms of Service", href: "/terms" },
              { name: "Blog", href: "/blog" },
              { name: "FAQs", href: "/faqs" },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
            Stay Updated
          </h2>
          <p className="text-xs text-gray-400 mb-3">
            Subscribe to our newsletter for updates.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="bg-gray-800 text-white text-xs px-3 py-2 rounded flex-1 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-xs font-medium transition-colors"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-gray-800 text-center text-xs text-gray-300">
        © {new Date().getFullYear()} Zipserve. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
