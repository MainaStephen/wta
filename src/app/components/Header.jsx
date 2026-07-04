'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaUser,
  FaCalendarAlt,
  FaMicrophone,
  FaGraduationCap,
  FaEnvelope,
  FaHandshake,
  FaHeart,
} from 'react-icons/fa';
import Logo from '../../../public/assets/logo.webp';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  const isActive = (href) => {
    if (href === '/') return pathname === href;
    return pathname?.startsWith(href);
  };

  const navLinks = [
    {
      href: '/',
      label: 'Home',
    },
    {
      href: '/about-us',
      label: 'Our Conferences',
    },
    { href: '/speakers', label: 'Speakers' },
    { href: '/program', label: 'Program' },
    {
      href: '/scholarship-and-sponsorships',
      label: 'Scholarships & Sponsorships',
      isDropdown: true,
      dropdownItems: [
        {
          href: '/scholarship-and-sponsorships',
          label: 'View Scholarships & Sponsorships',
          icon: FaHandshake,
        },
        { href: '/donate', label: 'Donate', icon: FaHeart },
      ],
    },
    { href: '/welcome-packet', label: 'Welcome Packet' },
    { href: '/contact', label: 'Contact us' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white shadow-sm'
      }`}
    >
      {/* Main Header */}
      <div className="mx-auto px-4 flex items-center justify-between h-16 md:h-[80px]">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src={Logo}
            alt="Women and Transport Africa"
            width={160}
            height={65}
            className="h-12 md:h-[55px] w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, index) => {
            if (link.isDropdown) {
              return (
                <div
                  key={index}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`px-4 py-2 text-gray-700 font-bold hover:text-[#E1251B] transition flex items-center gap-1 ${
                      isActive(link.href) ? 'text-[#E1251B]' : ''
                    }`}
                  >
                    {link.label}
                    <FaChevronDown
                      className={`w-3 h-3 transition-transform duration-200 ${
                        isDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 ${
                      isDropdownOpen
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    {link.dropdownItems.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={idx}
                          href={item.href}
                          className={`flex items-center gap-3 px-5 py-3.5 text-sm text-gray-700 hover:bg-[#f7f0f2] hover:text-[#E1251B] transition-colors border-b border-gray-50 last:border-0 ${
                            isActive(item.href)
                              ? 'bg-[#f7f0f2] text-[#E1251B]'
                              : ''
                          }`}
                        >
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              isActive(item.href)
                                ? 'bg-[#E1251B]/10 text-[#E1251B]'
                                : 'bg-gray-100 text-gray-400'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <span>{item.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={index}
                href={link.href}
                className={`px-4 py-2 text-gray-700 font-bold hover:text-[#E1251B] transition relative ${
                  isActive(link.href) ? 'text-[#E1251B]' : ''
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#E1251B] rounded-full"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSesFn7D1B1K3ngmz007QvpdYt_4H-kr2NHw5GeixArcjGfZ8g/viewform"
            className="bg-[#E1251B] text-white px-5 py-2.5 rounded-[1em_0] font-semibold text-sm hover:bg-transparent hover:text-[#E1251B] hover:border-2 hover:border-[#E1251B] transition-all duration-300 shadow-lg shadow-[#E1251B]/20"
          >
            2026 Conference Registration
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center text-gray-700 hover:bg-[#f7f0f2] hover:text-[#E1251B] transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link, index) => {
            if (link.isDropdown) {
              return (
                <div key={index} className="space-y-1">
                  <div className="text-gray-700 font-bold px-3 py-2.5 bg-[#f7f0f2] rounded-lg">
                    {link.label}
                  </div>
                  <div className="ml-4 space-y-1">
                    {link.dropdownItems.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={idx}
                          href={item.href}
                          className={`flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-[#E1251B] hover:bg-[#f7f0f2] rounded-lg transition-colors ${
                            isActive(item.href)
                              ? 'text-[#E1251B] bg-[#f7f0f2]'
                              : ''
                          }`}
                        >
                          <Icon className="w-4 h-4 text-[#E1251B]" />
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={index}
                href={link.href}
                className={`px-3 py-2.5 text-gray-700 font-bold hover:text-[#E1251B] hover:bg-[#f7f0f2] rounded-lg transition-colors ${
                  isActive(link.href) ? 'text-[#E1251B] bg-[#f7f0f2]' : ''
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSesFn7D1B1K3ngmz007QvpdYt_4H-kr2NHw5GeixArcjGfZ8g/viewform"
            className="bg-[#E1251B] text-white px-5 py-2.5 rounded-[1em_0] font-semibold text-center mt-2 hover:bg-transparent hover:text-[#E1251B] hover:border-2 hover:border-[#E1251B] transition-all duration-300"
          >
            2026 Conference Registration
          </Link>
        </div>
      </div>
    </header>
  );
}
