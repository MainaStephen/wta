"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaExternalLinkAlt,
  FaShieldAlt,
  FaHeart,
  FaArrowRight,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-800">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#E1251B] to-[#A61F1F] py-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-5xl mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-white font-bold text-xl md:text-2xl font-['Josefin_Sans']">
                Be part of revolutionizing the public transport industry in Africa
              </h4>
              <p className="text-white/80 text-sm mt-1">
                Join us in building inclusive and climate-resilient transport systems
              </p>
            </div>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 bg-white text-[#E1251B] px-8 py-3 rounded-[1em_0] font-semibold hover:bg-transparent hover:text-white hover:border-2 hover:border-white transition-all duration-300 whitespace-nowrap group"
            >
              Learn more
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <h5 className="text-sm font-bold text-gray-800 uppercase tracking-wider">
                Contact Us
              </h5>
              <div className="space-y-3">
                <a
                  href="mailto:Witconference@floneinitiative.org"
                  className="flex items-center gap-3 text-gray-600 hover:text-[#E1251B] transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#f7f0f2] flex items-center justify-center text-[#E1251B] group-hover:bg-[#E1251B] group-hover:text-white transition-all duration-300">
                    <FaEnvelope className="w-4 h-4" />
                  </div>
                  <span className="text-sm">Witconference@floneinitiative.org</span>
                </a>
                <a
                  href="tel:+254768052577"
                  className="flex items-center gap-3 text-gray-600 hover:text-[#E1251B] transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#f7f0f2] flex items-center justify-center text-[#E1251B] group-hover:bg-[#E1251B] group-hover:text-white transition-all duration-300">
                    <FaPhone className="w-4 h-4" />
                  </div>
                  <span className="text-sm">+254 768 052 577</span>
                </a>
                <div className="flex items-start gap-3 text-gray-600 group">
                  <div className="w-10 h-10 rounded-xl bg-[#f7f0f2] flex items-center justify-center text-[#E1251B] flex-shrink-0 group-hover:bg-[#E1251B] group-hover:text-white transition-all duration-300">
                    <FaMapMarkerAlt className="w-4 h-4" />
                  </div>
                  <span className="text-sm">
                    Kenya Police Sacco Plaza Ngara, <br />Nairobi, 4th floor wing B.
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">
                Quick Links
              </h5>
              <ul className="space-y-2">
                <li>
                  <Link href="/about-us" className="text-sm text-gray-600 hover:text-[#E1251B] transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#E1251B] rounded-full"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/speakers" className="text-sm text-gray-600 hover:text-[#E1251B] transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#E1251B] rounded-full"></span>
                    Speakers
                  </Link>
                </li>
                <li>
                  <Link href="/program" className="text-sm text-gray-600 hover:text-[#E1251B] transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#E1251B] rounded-full"></span>
                    Program
                  </Link>
                </li>
                <li>
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLSesFn7D1B1K3ngmz007QvpdYt_4H-kr2NHw5GeixArcjGfZ8g/viewform" className="text-sm text-gray-600 hover:text-[#E1251B] transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#E1251B] rounded-full"></span>
                    Register
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-gray-600 hover:text-[#E1251B] transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#E1251B] rounded-full"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h5 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">
                Resources
              </h5>
              <ul className="space-y-2">
                <li>
                  <Link href="/scholarship-and-sponsorships" className="text-sm text-gray-600 hover:text-[#E1251B] transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#E1251B] rounded-full"></span>
                    Scholarships
                  </Link>
                </li>
                <li>
                  <Link href="/scholarship-and-sponsorships" className="text-sm text-gray-600 hover:text-[#E1251B] transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#E1251B] rounded-full"></span>
                    Sponsorship
                  </Link>
                </li>
                {/* <li>
                  <Link href="/past-conferences" className="text-sm text-gray-600 hover:text-[#E1251B] transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#E1251B] rounded-full"></span>
                    Past Conferences
                  </Link>
                </li> */}
                <li>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc_qWWxQayiLmkF__GvFJUpEPpuwe442amg_cvQ330QCnHa1g/viewform"
                    target="_blank"
                    rel="noopener"
                    className="text-sm text-gray-600 hover:text-[#E1251B] transition-colors duration-300 flex items-center gap-2"
                  >
                    <FaShieldAlt className="w-3 h-3 text-[#E1251B]" />
                    Confidential Form
                  </a>
                </li>
              </ul>
            </div>

            {/* Flone Initiative */}
            <div>
              <h5 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">
                About Flone
              </h5>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Flone Initiative is a women-led organization working to create safe, inclusive, and accessible public transport systems across Africa.
              </p>
              <Link
                href="https://floneinitiative.org/"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 bg-[#E1251B] text-white px-5 py-2.5 rounded-[1em_0] font-semibold text-sm hover:bg-transparent hover:text-[#E1251B] hover:border-2 hover:border-[#E1251B] transition-all duration-300 group"
              >
                Flone Main Website
                <FaExternalLinkAlt className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </Link>
            </div>
          </div>

        
        </div>
      </div>

    <div className="bg-[#1a1a1a] text-white py-4">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm">
          <p className="flex flex-col sm:flex-row items-center justify-center gap-2">
            <span>Women and Transport Africa © {currentYear} | All Rights Reserved</span>
            <span className="hidden sm:inline text-gray-600">|</span>
            <span className="text-gray-400">
              Designed by{" "}
              <a
                href="https://edeldigital.co.ke/"
                target="_blank"
                rel="noopener"
                className="text-[#E1251B] hover:text-white hover:underline transition-colors duration-300 font-medium"
              >
                Edel Digital
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}