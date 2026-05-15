"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-[0_1px_2px_rgba(0,0,0,0.02)] py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center cursor-pointer">
            <Image 
              src="/logo_cropped.png" 
              alt="MetaMate Logo" 
              width={120} 
              height={32} 
              style={{ width: 'auto', height: 'auto' }}
              className="object-contain"
              priority
            />
          </Link>

          {/* CENTER NAVIGATION */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="/vision" className="flex items-center gap-1.5 text-[14px] font-medium text-gray-800 hover:text-black transition-colors">
              Vision <ChevronDown size={14} className="text-gray-500" strokeWidth={3} />
            </Link>
            <Link href="/technology" className="flex items-center gap-1.5 text-[14px] font-medium text-gray-800 hover:text-black transition-colors">
              Technology <ChevronDown size={14} className="text-gray-500" strokeWidth={3} />
            </Link>
            <Link href="/founder" className="text-[14px] font-medium text-gray-800 hover:text-black transition-colors">
              Founder
            </Link>
            <Link href="/faq" className="text-[14px] font-medium text-gray-800 hover:text-black transition-colors">
              FAQ
            </Link>
            <Link href="/whitepaper" className="text-[14px] font-medium text-purple-600 hover:text-purple-800 transition-colors">
              Whitepaper
            </Link>
          </div>

          {/* RIGHT SIDE ACTIONS */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="https://twitter.com/villainmonkey" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor"/>
              </svg>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-gray-800"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* FULLSCREEN MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[100] bg-white/70 flex flex-col items-center justify-center p-6"
          >
            <button 
              className="absolute top-8 right-6 w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={20} className="text-black" />
            </button>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center gap-8 w-full max-w-sm"
            >
              {[
                { name: 'Vision', href: '/vision' }, 
                { name: 'Technology', href: '/technology' }, 
                { name: 'Founder', href: '/founder' }, 
                { name: 'FAQ', href: '/faq' },
                { name: 'Whitepaper', href: '/whitepaper' }
              ].map((item, i) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-medium tracking-tight text-gray-900 hover:text-gray-600 transition-colors"
                >
                  <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              ))}

              <motion.button 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.dispatchEvent(new CustomEvent('open-beta-modal'));
                }}
                className="mt-8 w-full h-16 bg-black text-white rounded-full font-bold text-lg shadow-2xl"
              >
                Request Beta Access
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
