'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        .gradient-text {
          background: linear-gradient(-45deg, #c9f31d, #0d6665, #c9f31d);
          background-size: 300% 300%;
          animation: gradient-shift 3s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .floating {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.1,
        }}
        className='fixed top-0 left-0 right-0 z-[100] bg-black border-b border-gray-900'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-20'>
            {/* Logo Section */}
            <Link href='/'>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className='cursor-pointer'
              >
                <h1 className='text-xl md:text-2xl font-bold text-[#c9f31d]'>
                  SHANZY
                </h1>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='hidden lg:flex items-center space-x-8'
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Link
                    href={item.href}
                    className={`text-base font-medium transition-all duration-200 ${pathname === item.href
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                      }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* LET'S TALK Button & Hamburger Menu */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                type: 'spring',
                stiffness: 200,
              }}
              className='flex items-center gap-4'
            >
              <span className='hidden lg:block text-sm font-semibold text-gray-300 uppercase tracking-wider'>
                LET&apos;S TALK
              </span>

              {/* Hamburger Menu Button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                animate={{
                  boxShadow: ['0 0 0 0px rgba(201, 243, 29, 0.4)', '0 0 0 10px rgba(201, 243, 29, 0)'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 0.5
                }}
                className='relative w-12 h-12 rounded-full bg-[#c9f31d] flex items-center justify-center focus:outline-none hover:bg-white transition-colors group'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className='w-5 h-4 relative flex flex-col justify-between'>
                  <motion.span
                    animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                    className='w-full h-0.5 bg-black group-hover:bg-black rounded-full origin-left'
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    className='w-full h-0.5 bg-black group-hover:bg-black rounded-full'
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                    className='w-full h-0.5 bg-black group-hover:bg-black rounded-full origin-left'
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.nav >

      {/* Sidebar Menu - WaliShah Style - MOVED OUTSIDE NAV */}
      < AnimatePresence >
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='fixed inset-0 bg-black/70 backdrop-blur-sm z-[500]'
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className='fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-black z-[600] shadow-2xl overflow-y-auto border-l border-gray-800'
            >
              <div className='p-8 pt-20 text-center'>
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className='absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-[#c9f31d] hover:text-[#0d6665] transition-colors'
                >
                  <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                  </svg>
                </button>

                {/* Logo/Title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className='mb-8'
                >
                  <h2 className='text-3xl md:text-4xl font-bold mb-3 text-[#c9f31d]'>
                    Shanzy Saleem
                  </h2>
                  <p className='text-gray-300 text-base md:text-lg font-medium mb-3'>
                    UI/UX Designer & Web Developer
                  </p>
                  <p className='text-gray-500 text-sm leading-relaxed mx-auto max-w-xs'>
                    Transforming Ideas into Beautiful Digital Experiences with Modern UI/UX Design,
                    Figma, SEO, and Next.js Development.
                  </p>
                </motion.div>

                {/* Contact Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className='mb-8 border-t border-gray-800 pt-6'
                >
                  <h3 className='text-white font-semibold mb-4 text-lg'>Contact Me</h3>
                  <div className='space-y-3 flex flex-col items-center'>
                    <a
                      href='mailto:shanzysaleem8@gmail.com'
                      className='flex items-center gap-3 text-gray-400 hover:text-[#c9f31d] transition-colors group'
                    >
                      <span className='text-[#c9f31d] text-lg'>📧</span>
                      <span className='text-sm'>shanzysaleem8@gmail.com</span>
                    </a>
                    <motion.a
                      href='tel:+923467394923'
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className='flex items-center gap-3 text-white bg-[#c9f31d]/10 px-4 py-2 rounded-full border border-[#c9f31d] hover:bg-[#c9f31d] hover:text-black transition-all group'
                    >
                      <span className='text-[#c9f31d] group-hover:text-black text-lg'>📱</span>
                      <span className='text-sm font-bold'>Call Me Now: +92 346 7394923</span>
                    </motion.a>
                  </div>
                </motion.div>

                {/* Follow Me Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className='border-t border-gray-800 pt-6'
                >
                  <h3 className='text-white font-semibold mb-4 text-lg'>Follow Me</h3>
                  <div className='flex gap-4 justify-center'>
                    <a
                      href='https://www.linkedin.com/in/shanzy-saleem-39064236a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white transition-colors group'
                    >
                      <svg className='w-6 h-6 text-white group-hover:text-black' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                      </svg>
                    </a>
                    <a
                      href='https://github.com/shanza211'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white transition-colors group'
                    >
                      <svg className='w-6 h-6 text-white group-hover:text-black' fill='currentColor' viewBox='0 0 24 24'>
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )
        }
      </AnimatePresence >
    </>
  );
}
