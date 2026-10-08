'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useMemo } from 'react';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Emma L.',
      role: 'CEO, Muskoka Limos',
      content: "Working with Shanzy was an absolute pleasure. The website designed for us is sleek, easy to navigate, and fully optimized for mobile devices. The content writing service helped us rank higher on search engines, attracting more potential clients. Shanzy's dedication and expertise truly set them apart."
    },
    {
      name: 'Omar Sheikh',
      role: 'Business Owner',
      content: "I approached Shanzy for website development, and they didn't disappoint. The site is fast, secure, and visually appealing. It's exactly what I needed to stand out in my industry."
    },
    {
      name: 'Sarah J.',
      role: 'Marketing Director',
      content: "Shanzy's UI/UX skills are top-notch. The prototyping phase was crucial for visualising our product. The Figma designs were pixel-perfect and easy to implement."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = useMemo(() => [
    'UI/UX Designer',
    'Figma Expert',
    'Web Developer',
    'Prototyping Specialist',
    'SEO Specialist',
  ], []);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 100 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentTitle.length) {
          setCurrentText(currentTitle.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTitleIndex, titles]);

  const cursor = '|'; const skills = [
    {
      name: 'UI/UX Design',
      icon: '🎨',
      description:
        'Creating intuitive and beautiful user interfaces with modern design principles and user-centered approach.',
      level: '95%',
    },
    {
      name: 'Figma',
      icon: '🎯',
      description:
        "Expert in crafting pixel-perfect designs and interactive prototypes using Figma's advanced features and components.",
      level: '98%',
    },
    {
      name: 'Prototyping',
      icon: '🔄',
      description:
        'Building interactive mockups and prototypes that bring designs to life and validate user experiences.',
      level: '93%',
    },
    {
      name: 'SEO',
      icon: '📊',
      description:
        'Optimizing websites for search engines to improve visibility, rankings, and organic traffic growth.',
      level: '88%',
    },
    {
      name: 'Web Development',
      icon: '⚛️',
      description:
        'Developing fast, scalable, and modern web applications with Next.js and React framework.',
      level: '90%',
    },
    {
      name: 'Next.js',
      icon: '▲',
      description:
        'Building production-ready web applications with Next.js, server-side rendering, and optimal performance.',
      level: '92%',
    },
    {
      name: 'n8n Automation',
      icon: '🤖',
      description:
        'Expert in creating AI agents, WhatsApp bots, Telegram bots, and lead generation automation using n8n workflow automation.',
      level: '94%',
    },
  ];

  const featuredProjects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A responsive e-commerce website built with Next.js featuring modern UI/UX, optimized performance, and seamless shopping experience.',
      image: '/project-1.jpg',
      tags: ['Next.js', 'React', 'UI/UX', 'SEO'],
      link: '/projects',
    },
    {
      title: 'Startup Web App',
      description:
        'Interactive Next.js web application with mobile-first design, featuring advanced prototyping and user-centered interface.',
      image: '/project-2.jpg',
      tags: ['Next.js', 'Figma', 'Prototyping', 'Web Dev'],
      link: '/projects',
    },
  ];

  return (
    <div className='min-h-screen'>
      {/* Hero Section - WaliShah Inspired */}
      <section className='relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20'>
        <div className='max-w-7xl mx-auto w-full'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className='text-left'
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className='text-white text-lg mb-3'
              >
                Hello, I&apos;m
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6'
              >
                <span className='text-white'>Shanzy Saleem</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className='text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6'
              >
                <span className='inline-flex items-center'>
                  {currentText}
                  <span className='animate-pulse ml-1 text-[#c9f31d]'>{cursor}</span>
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className='text-white text-base md:text-lg leading-relaxed mb-10 max-w-xl'
              >
                Transforming Ideas into Beautiful Digital Experiences with Modern UI/UX Design,
                Figma Prototyping, SEO Optimization, and Web Developer.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className='flex flex-wrap gap-4'
              >
                <Link
                  href='/contact'
                  className='bg-[#c9f31d] hover:bg-white text-black hover:text-black px-8 py-4 rounded-full font-medium text-base transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-white/50'
                >
                  Hire Me
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </Link>

                <Link
                  href='/projects'
                  className='border-2 border-[#c9f31d] text-[#c9f31d] hover:bg-white hover:text-black hover:border-white px-8 py-4 rounded-full font-medium text-base transition-all duration-300 inline-flex items-center gap-2'
                >
                  Portfolio
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='space-y-8'
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className='text-left'
              >
                <h3 className='text-5xl md:text-6xl font-bold text-[#c9f31d] mb-2'>30+</h3>
                <p className='text-white text-base'>Happy Clients</p>
              </motion.div>

              <div className='w-full h-px bg-gray-800' />

              <motion.div
                whileHover={{ scale: 1.05 }}
                className='text-left'
              >
                <h3 className='text-5xl md:text-6xl font-bold text-[#c9f31d] mb-2'>25+</h3>
                <p className='text-white text-base'>Positive Reviews</p>
              </motion.div>

              <div className='w-full h-px bg-gray-800' />

              <motion.div
                whileHover={{ scale: 1.05 }}
                className='text-left'
              >
                <h3 className='text-5xl md:text-6xl font-bold text-[#c9f31d] mb-2'>100%</h3>
                <p className='text-white text-base'>Client Satisfactions</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - WaliShah Style */}
      <section className='relative py-20 px-4 sm:px-6 lg:px-8 bg-black'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className='inline-flex items-center gap-2 mb-6'
              >
                <span className='text-[#c9f31d] text-xl'></span>
                <span className='text-white text-sm font-medium'>About Shanzy Saleem</span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight'
              >
                Creative <span className='text-[#c9f31d]'>UI/UX Designer</span> Based in Pakistan
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className='text-white text-base leading-relaxed mb-6'
              >
                With over 2 years of experience, I specialize in empowering businesses to thrive in the digital space by leveraging my expertise in <span className='text-[#c9f31d] font-bold'>UI/UX Design</span>, <span className='text-[#c9f31d] font-bold'>Figma</span>, and <span className='text-[#c9f31d] font-bold'>Web Developer</span>. My approach is tailored to ensure each client achieves measurable growth and establishes a strong online presence.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className='text-white text-base leading-relaxed mb-8'
              >
                From designing intuitive interfaces to building modern web applications, I&apos;ve helped businesses unlock their potential through impactful digital strategies. Let&apos;s create a roadmap to take your business to the next level!
              </motion.p>

              {/* Services Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className='grid grid-cols-2 gap-4 mb-8'
              >
                <div className='flex items-center gap-2'>
                  <svg className='w-5 h-5 text-[#c9f31d]' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                  </svg>
                  <span className='text-white text-sm font-medium'>UI/UX Design</span>
                </div>
                <div className='flex items-center gap-2'>
                  <svg className='w-5 h-5 text-[#c9f31d]' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                  </svg>
                  <span className='text-white text-sm font-medium'>Figma Prototyping</span>
                </div>
                <div className='flex items-center gap-2'>
                  <svg className='w-5 h-5 text-[#c9f31d]' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                  </svg>
                  <span className='text-white text-sm font-medium'>SEO Optimization</span>
                </div>
                <div className='flex items-center gap-2'>
                  <svg className='w-5 h-5 text-[#c9f31d]' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                  </svg>
                  <span className='text-white text-sm font-medium'>Web Developer</span>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
                className='flex flex-wrap items-center gap-6 text-gray-400'
              >
                <a
                  href='mailto:shanzysaleem8@gmail.com'
                  className='flex items-center gap-2 hover:text-[#c9f31d] transition-colors'
                >
                  <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                    <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                  </svg>
                  <span className='text-sm'>shanzysaleem8@gmail.com</span>
                </a>

                <a
                  href='tel:+923467394923'
                  className='flex items-center gap-2 hover:text-[#c9f31d] transition-colors'
                >
                  <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                  </svg>
                  <span className='text-sm'>+92 346 7394923</span>
                </a>

                <a
                  href='/Shanzy%20(1).pdf'
                  download='Shanzy_Saleem_CV.pdf'
                  className='flex items-center gap-2 bg-[#c9f31d] text-black px-4 py-2 rounded-full font-medium hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg'
                >
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4' />
                  </svg>
                  <span className='text-sm'>Download CV</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='relative'
            >
              <div className='relative w-full h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-800'>
                {/* Profile Image */}
                <Image
                  src='/shanzy-saleem.png'
                  alt='Shanzy Saleem - UI/UX Designer'
                  fill
                  className='object-cover'
                  priority
                />

                {/* Badge on Image */}
                <div className='absolute top-6 left-6 bg-white rounded-full px-4 py-2 shadow-lg'>
                  <div className='flex items-center gap-2'>
                    <div className='w-2 h-2 bg-[#c9f31d] rounded-full animate-pulse' />
                    <span className='text-sm font-semibold text-gray-800'>UI/UX Designer</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resume/Experience Section */}
      <section className='relative py-20 px-4 sm:px-6 lg:px-8 bg-black'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='lg:col-span-3 flex justify-center items-center'
            >
              <div className='relative w-64 h-64'>
                {/* Background Circle */}
                <motion.div
                  className='absolute inset-0 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700'
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                {/* Asterisk Icon */}
                <motion.div
                  className='absolute inset-0 flex items-center justify-center'
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                  <span className='text-[#c9f31d]' style={{ fontSize: '200px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', lineHeight: '1' }}>*</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <div className='lg:col-span-9'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='mb-12'
              >
                <p className='text-gray-400 text-sm font-medium mb-4'>My Resume</p>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>
                  Real <span className='text-[#c9f31d]'>Problem Solutions</span><br />Experience
                </h2>
              </motion.div>

              {/* Experience Cards Grid */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* Card 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className='group bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-[#c9f31d] transition-all duration-300 cursor-pointer relative'
                >
                  <div className='flex items-start justify-between mb-4'>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className='w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center flex-shrink-0'
                    >
                      <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                      </svg>
                    </motion.div>
                    <div className='w-8 h-8 rounded-full bg-[#c9f31d] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0'>
                      <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                      </svg>
                    </div>
                  </div>
                  <p className='text-white text-sm mb-3 uppercase tracking-wide'>2024 - PRESENT</p>
                  <h3 className='text-white text-xl font-bold mb-2'>UI/UX Designer</h3>
                  <p className='text-white text-sm'>Freelance Projects</p>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className='group bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-[#c9f31d] transition-all duration-300 cursor-pointer relative'
                >
                  <div className='flex items-start justify-between mb-4'>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className='w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center flex-shrink-0'
                    >
                      <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
                      </svg>
                    </motion.div>
                    <div className='w-8 h-8 rounded-full bg-[#c9f31d] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0'>
                      <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                      </svg>
                    </div>
                  </div>
                  <p className='text-white text-sm mb-3 uppercase tracking-wide'>2023 - 2024</p>
                  <h3 className='text-white text-xl font-bold mb-2'>Figma Specialist</h3>
                  <p className='text-white text-sm'>Design Agency</p>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className='group bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-[#c9f31d] transition-all duration-300 cursor-pointer relative'
                >
                  <div className='flex items-start justify-between mb-4'>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      className='w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center flex-shrink-0'
                    >
                      <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' />
                      </svg>
                    </motion.div>
                    <div className='w-8 h-8 rounded-full bg-[#c9f31d] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0'>
                      <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                      </svg>
                    </div>
                  </div>
                  <p className='text-white text-sm mb-3 uppercase tracking-wide'>2023 - PRESENT</p>
                  <h3 className='text-white text-xl font-bold mb-2'>Web Developer</h3>
                  <p className='text-white text-sm'>Tech Startups</p>
                </motion.div>

                {/* Card 4 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className='group bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-[#c9f31d] transition-all duration-300 cursor-pointer relative'
                >
                  <div className='flex items-start justify-between mb-4'>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                      className='w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center flex-shrink-0'
                    >
                      <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                      </svg>
                    </motion.div>
                    <div className='w-8 h-8 rounded-full bg-[#c9f31d] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0'>
                      <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                      </svg>
                    </div>
                  </div>
                  <p className='text-white text-sm mb-3 uppercase tracking-wide'>2022 - 2024</p>
                  <h3 className='text-white text-xl font-bold mb-2'>SEO Specialist</h3>
                  <p className='text-white text-sm'>Digital Marketing</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className='relative py-20 px-4 sm:px-6 lg:px-8 bg-black'>
        <div className='max-w-7xl mx-auto'>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <p className='text-gray-400 text-sm font-medium mb-4'>Latest Work</p>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
              Explore My <span className='text-[#c9f31d]'>Popular</span> Projects
            </h2>
          </motion.div>

          {/* Projects Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
            {/* SEO Project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className='group cursor-pointer'
            >
              <div className='relative overflow-hidden rounded-2xl mb-4 aspect-[16/10] hover:shadow-2xl transition-all duration-300 group-hover:scale-105'>
                <Image
                  src='/seo-project.png'
                  alt='SEO Performance Growth'
                  fill
                  className='object-cover'
                  priority
                />
              </div>
              <div className='flex flex-wrap gap-2 mb-3'>
                <span className='px-3 py-1 bg-[#c9f31d] text-black text-sm rounded-full'>
                  SEO
                </span>
                <span className='px-3 py-1 bg-[#c9f31d] text-black text-sm rounded-full'>
                  Analytics
                </span>
              </div>
              <h3 className='text-2xl font-bold text-white mb-2 group-hover:text-[#c9f31d] transition-colors'>
                SEO Performance Growth
              </h3>
            </motion.div>

            {/* Chipotle Menus Project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className='group cursor-pointer'
            >
              <Link href='https://chipotlemenus.us/' target='_blank' rel='noopener noreferrer'>
                <div className='relative overflow-hidden rounded-2xl mb-4 aspect-[16/10] hover:shadow-2xl transition-all duration-300 group-hover:scale-105'>
                  <Image
                    src='/chipotle-project.png'
                    alt='Chipotle Menus'
                    fill
                    className='object-cover'
                    priority
                  />
                  <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                    <span className='px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white font-medium'>
                      View Website
                    </span>
                  </div>
                </div>
                <div className='flex flex-wrap gap-2 mb-3'>
                  <span className='px-3 py-1 bg-[#c9f31d] text-black text-sm rounded-full'>
                    SEO Optimization
                  </span>
                  <span className='px-3 py-1 bg-[#c9f31d] text-black text-sm rounded-full'>
                    Ranking
                  </span>
                </div>
                <h3 className='text-2xl font-bold text-white mb-2 group-hover:text-[#c9f31d] transition-colors'>
                  Chipotle Menus
                </h3>
              </Link>
            </motion.div>

            {/* Chick-fil-A Menus Project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className='group cursor-pointer'
            >
              <Link href='https://www.chick-fila-menus.com/' target='_blank' rel='noopener noreferrer'>
                <div className='relative overflow-hidden rounded-2xl mb-4 aspect-[16/10] hover:shadow-2xl transition-all duration-300 group-hover:scale-105'>
                  <Image
                    src='/chickfila-project.png'
                    alt='Chick-fil-A Menus'
                    fill
                    className='object-cover'
                    priority
                  />
                  <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                    <span className='px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white font-medium'>
                      View Website
                    </span>
                  </div>
                </div>
                <div className='flex flex-wrap gap-2 mb-3'>
                  <span className='px-3 py-1 bg-[#c9f31d] text-black text-sm rounded-full'>
                    SEO Optimization
                  </span>
                  <span className='px-3 py-1 bg-[#c9f31d] text-black text-sm rounded-full'>
                    Ranking
                  </span>
                </div>
                <h3 className='text-2xl font-bold text-white mb-2 group-hover:text-[#c9f31d] transition-colors'>
                  Chick-fil-A Menus
                </h3>
              </Link>
            </motion.div>

            {/* Tech Life Pulse Project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className='group cursor-pointer'
            >
              <Link href='https://techlifepulse.site/' target='_blank' rel='noopener noreferrer'>
                <div className='relative overflow-hidden rounded-2xl mb-4 aspect-[16/10] hover:shadow-2xl transition-all duration-300 group-hover:scale-105'>
                  <Image
                    src='/techlifepulse-project.png'
                    alt='Tech Life Pulse'
                    fill
                    className='object-cover'
                    priority
                  />
                  <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                    <span className='px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white font-medium'>
                      View Website
                    </span>
                  </div>
                </div>
                <div className='flex flex-wrap gap-2 mb-3'>
                  <span className='px-3 py-1 bg-[#c9f31d] text-black text-sm rounded-full'>
                    Web Development
                  </span>
                  <span className='px-3 py-1 bg-[#c9f31d] text-black text-sm rounded-full'>
                    Tech Blog
                  </span>
                </div>
                <h3 className='text-2xl font-bold text-white mb-2 group-hover:text-[#c9f31d] transition-colors'>
                  Tech Life Pulse
                </h3>
              </Link>
            </motion.div>

            {/* Zayan Tech Project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className='group cursor-pointer'
            >
              <Link href='https://zayan-tech-zd2l.vercel.app/' target='_blank' rel='noopener noreferrer'>
                <div className='relative overflow-hidden rounded-2xl mb-4 aspect-[16/10] hover:shadow-2xl transition-all duration-300 group-hover:scale-105'>
                  <Image
                    src='/zayan-tech-project.png'
                    alt='Zayan Tech'
                    fill
                    className='object-cover'
                    priority
                  />
                  <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                    <span className='px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white font-medium'>
                      View Website
                    </span>
                  </div>
                </div>
                <div className='flex flex-wrap gap-2 mb-3'>
                  <span className='px-3 py-1 bg-[#c9f31d] text-black text-sm rounded-full'>
                    Web Development
                  </span>
                  <span className='px-3 py-1 bg-[#c9f31d] text-black text-sm rounded-full'>
                    Portfolio
                  </span>
                </div>
                <h3 className='text-2xl font-bold text-white mb-2 group-hover:text-[#c9f31d] transition-colors'>
                  Zayan Tech
                </h3>
              </Link>
            </motion.div>

            {/* Emaan Couture Project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className='group cursor-pointer'
            >
              <Link href='https://emaancouture.com/' target='_blank' rel='noopener noreferrer'>
                <div className='relative overflow-hidden rounded-2xl mb-4 aspect-[16/10] hover:shadow-2xl transition-all duration-300 group-hover:scale-105'>
                  <Image
                    src='/Emaan-couture.png'
                    alt='Emaan Couture - Fashion Website'
                    fill
                    className='object-cover'
                    priority
                  />
                  <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                    <span className='px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white font-medium'>
                      View Website
                    </span>
                  </div>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <span className='px-3 py-1 bg-[#c9f31d] text-black text-sm rounded-full'>Fashion</span>
                  <span className='px-3 py-1 bg-[#c9f31d] text-black text-sm rounded-full'>E-Commerce</span>
                </div>
              </Link>
            </motion.div>

            {/* NexWel Project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='group cursor-pointer'
            >
              <Link href='https://nexwelllc.vercel.app/' target='_blank' rel='noopener noreferrer'>
                <div className='relative overflow-hidden rounded-2xl mb-4 aspect-[16/10] hover:shadow-2xl transition-all duration-300 group-hover:scale-105'>
                  <Image
                    src='/nexwell-llc.png'
                    alt='NexWel - Organic Products'
                    fill
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                    <span className='px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white font-medium'>
                      View Website
                    </span>
                  </div>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <span className='px-3 py-1 bg-[#c9f31d] text-black text-sm rounded-full'>Organic</span>
                  <span className='px-3 py-1 bg-[#c9f31d] text-black text-sm rounded-full'>E-Commerce</span>
                </div>
              </Link>
            </motion.div>

            {/* SmartVine Inc Project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className='group cursor-pointer'
            >
              <Link href='https://smartvineinc.com/' target='_blank' rel='noopener noreferrer'>
                <div className='relative overflow-hidden rounded-2xl mb-4 aspect-[16/10] hover:shadow-2xl transition-all duration-300 group-hover:scale-105'>
                  <Image
                    src='/smart-vini-llc.png'
                    alt='SmartVine Inc - Tech Solutions'
                    fill
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                    <span className='px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white font-medium'>
                      View Website
                    </span>
                  </div>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <span className='px-3 py-1 bg-[#c9f31d] text-black text-sm rounded-full'>Tech</span>
                  <span className='px-3 py-1 bg-[#c9f31d] text-black text-sm rounded-full'>Business</span>
                </div>
              </Link>
            </motion.div>

            {/* Figma Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className='group cursor-pointer'
            >
              <Link href='https://www.figma.com/design/RAec0mgBA82umJunD44unO/Untitled?node-id=0-1&t=cuxC6YJvVVzckkBi-1' target='_blank' rel='noopener noreferrer'>
                <div className='relative overflow-hidden rounded-2xl mb-4 aspect-[16/10] hover:shadow-2xl transition-all duration-300 group-hover:scale-105'>
                  <Image
                    src='/coffee-shop-figma.png'
                    alt='Coffee Shop Design'
                    fill
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                    <span className='px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white font-medium'>
                      View Design
                    </span>
                  </div>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <span className='px-3 py-1 bg-[#c9f31d] text-black text-sm rounded-full'>Figma</span>
                  <span className='px-3 py-1 bg-[#c9f31d] text-black text-sm rounded-full'>UI/UX</span>
                </div>
              </Link>
            </motion.div>

            {/* Figma Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className='group cursor-pointer'
            >
              <Link href='https://www.figma.com/design/bNxsmc7TxFiShDBGb3W3NK/Professional-Figma-UI-Cloning---Redesign-Assignment?t=cuxC6YJvVVzckkBi-1' target='_blank' rel='noopener noreferrer'>
                <div className='relative overflow-hidden rounded-2xl mb-4 aspect-[16/10] hover:shadow-2xl transition-all duration-300 group-hover:scale-105'>
                  <Image
                    src='/saas-platform-figma.png'
                    alt='SaaS Platform UI'
                    fill
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                    <span className='px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white font-medium'>
                      View Design
                    </span>
                  </div>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <span className='px-3 py-1 bg-[#c9f31d] text-black text-sm rounded-full'>SaaS</span>
                  <span className='px-3 py-1 bg-[#c9f31d] text-black text-sm rounded-full'>Wireframing</span>
                </div>
              </Link>
            </motion.div>

            {/* Figma Project 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className='group cursor-pointer'
            >
              <Link href='https://www.figma.com/design/cRPkWHULHzUmv2ssIEvW9G/Design-Test-Shanzy-Saleem?node-id=0-1&t=MBQ14AmGAtPQi1QU-1' target='_blank' rel='noopener noreferrer'>
                <div className='relative overflow-hidden rounded-2xl mb-4 aspect-[16/10] hover:shadow-2xl transition-all duration-300 group-hover:scale-105'>
                  <Image
                    src='/beauty-ecommerce-figma.png'
                    alt='Beauty E-Commerce Design'
                    fill
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                    <span className='px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white font-medium'>
                      View Design
                    </span>
                  </div>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <span className='px-3 py-1 bg-[#c9f31d] text-black text-sm rounded-full'>E-Commerce</span>
                  <span className='px-3 py-1 bg-[#c9f31d] text-black text-sm rounded-full'>Figma</span>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className='text-center'
          >
            <Link
              href='/projects'
              className='inline-flex items-center gap-2 bg-[#c9f31d] hover:bg-white text-black hover:text-black px-8 py-4 rounded-full font-bold text-base transition-all duration-300 shadow-lg hover:shadow-white/50'
            >
              View All Portfolio
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className='relative py-20 px-4 sm:px-6 lg:px-8 bg-black'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <p className='text-gray-400 text-sm font-medium mb-4'>Popular Services</p>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
              My <span className='text-[#c9f31d]'>Special Service</span> For your<br />Business Development
            </h2>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Service 1 - Local SEO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className='group bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-[#c9f31d] transition-all duration-300 cursor-pointer relative'
            >
              <div className='flex items-start justify-between mb-4'>
                <span className='text-4xl font-bold text-[#c9f31d]'>01</span>
                <div className='w-10 h-10 rounded-full bg-[#c9f31d] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
                  <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </div>
              </div>
              <h3 className='text-2xl font-bold text-white mb-4'>Local SEO</h3>
              <p className='text-white leading-relaxed'>
                I optimize your business to rank at the top of local search results, ensuring customers in your target area find you easily. From geo-targeted keywords to Google My Business (GMB) enhancements, I help businesses dominate local markets and generate consistent leads.
              </p>
            </motion.div>

            {/* Service 2 - Website Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='group bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-[#c9f31d] transition-all duration-300 cursor-pointer relative'
            >
              <div className='flex items-start justify-between mb-4'>
                <span className='text-4xl font-bold text-[#c9f31d]'>02</span>
                <div className='w-10 h-10 rounded-full bg-[#c9f31d] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
                  <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </div>
              </div>
              <h3 className='text-2xl font-bold text-white mb-4'>Website Design</h3>
              <p className='text-white leading-relaxed'>
                I design websites that not only look stunning but also perform flawlessly. A great website is more than just visualsit&apos;s a customer conversion tool. I design user-friendly, mobile-optimized websites that reflect your brand, engage visitors, and encourage action.
              </p>
            </motion.div>

            {/* Service 3 - Google Ads */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className='group bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-[#c9f31d] transition-all duration-300 cursor-pointer relative'
            >
              <div className='flex items-start justify-between mb-4'>
                <span className='text-4xl font-bold text-[#c9f31d]'>03</span>
                <div className='w-10 h-10 rounded-full bg-[#c9f31d] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
                  <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </div>
              </div>
              <h3 className='text-2xl font-bold text-white mb-4'>Prototyping</h3>
              <p className='text-white leading-relaxed'>
                I transform concepts into interactive, high-fidelity prototypes. This allows you to visualize the final product, test user flows, and gather feedback early in the design process, ensuring a polished and user-friendly experience.
              </p>
            </motion.div>

            {/* Service 4 - Content Writing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className='group bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-[#c9f31d] transition-all duration-300 cursor-pointer relative'
            >
              <div className='flex items-start justify-between mb-4'>
                <span className='text-4xl font-bold text-[#c9f31d]'>04</span>
                <div className='w-10 h-10 rounded-full bg-[#c9f31d] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
                  <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </div>
              </div>
              <h3 className='text-2xl font-bold text-white mb-4'>User Research</h3>
              <p className='text-white leading-relaxed'>
                Understanding your users is key to success. I conduct in-depth user research to identify needs, behaviors, and pain points, informing design decisions that create meaningful and effective solutions for your target audience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workflow Process Section - Adding uniqueness as requested */}
      <section className='relative py-20 px-4 sm:px-6 lg:px-8 bg-black'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <p className='text-gray-400 text-sm font-medium mb-4'>How I Work</p>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
              My <span className='text-[#c9f31d]'>Work Process</span> Used<br />For All Projects
            </h2>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              { num: '01', title: 'Discovery', desc: 'Understanding your business goals & target audience.' },
              { num: '02', title: 'Design', desc: 'Creating intuitive wireframes & high-fidelity prototypes.' },
              { num: '03', title: 'Development', desc: 'Building robust, scalable, & clean code solutions.' },
              { num: '04', title: 'Launch', desc: 'Testing, optimizing, and deploying your digital product.' },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='relative group bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-[#c9f31d] transition-all duration-300'
              >
                <div className='text-5xl font-bold text-[#c9f31d] group-hover:text-[#c9f31d]/20 transition-colors mb-4'>{step.num}</div>
                <h3 className='text-xl font-bold text-white mb-2'>{step.title}</h3>
                <p className='text-white text-sm'>{step.desc}</p>
                {index < 3 && (
                  <div className='hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gray-700' />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Experience Section */}
      <section className='relative py-20 px-4 sm:px-6 lg:px-8 bg-black'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className='text-white text-sm font-medium mb-4'>My Skills</p>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-8'>
                Let&apos;s Explore Popular<br /><span className='text-[#c9f31d]'>Skills & Experience</span>
              </h2>
              <p className='text-white leading-relaxed mb-8 max-w-lg'>
                Shanzy Saleem is UI/UX Design, Figma & Web Developer expert based in Pakistan. In today&apos;s fast-paced digital world, establishing a strong online presence is no longer optionalit&apos;s essential. I specialize in helping businesses like yours thrive in the digital space.
              </p>
              <Link
                href='/about'
                className='inline-flex items-center gap-2 bg-[#c9f31d] hover:bg-white text-black hover:text-black px-8 py-4 rounded-full font-bold text-base transition-all duration-300 shadow-lg hover:shadow-white/50'
              >
                Learn More
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                </svg>
              </Link>
            </motion.div>

            {/* Right - Skills Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='grid grid-cols-2 gap-4'
            >
              {/* SEO Skill */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className='bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 text-center hover:border-[#c9f31d] transition-all duration-300'
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className='w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-gray-700'
                >
                  <svg className='w-8 h-8 text-[#c9f31d]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' />
                  </svg>
                </motion.div>
                <h3 className='text-white font-bold mb-2'>SEO</h3>
                <p className='text-3xl font-bold text-gray-400'>88%</p>
              </motion.div>

              {/* Figma Skill */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className='bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 text-center hover:border-[#c9f31d] transition-all duration-300'
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className='w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-gray-700'
                >
                  <svg className='w-8 h-8 text-[#c9f31d]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' />
                  </svg>
                </motion.div>
                <h3 className='text-white font-bold mb-2'>Figma</h3>
                <p className='text-3xl font-bold text-gray-400'>98%</p>
              </motion.div>

              {/* UI/UX Design Skill */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className='bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 text-center hover:border-[#c9f31d] transition-all duration-300'
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className='w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-gray-700'
                >
                  <svg className='w-8 h-8 text-[#c9f31d]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                  </svg>
                </motion.div>
                <h3 className='text-white font-bold mb-2'>UI/UX Design</h3>
                <p className='text-3xl font-bold text-gray-400'>95%</p>
              </motion.div>

              {/* Web Development Skill */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className='bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 text-center hover:border-[#c9f31d] transition-all duration-300'
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                  className='w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-gray-700'
                >
                  <svg className='w-8 h-8 text-[#c9f31d]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' />
                  </svg>
                </motion.div>
                <h3 className='text-white font-bold mb-2'>Web Development</h3>
                <p className='text-3xl font-bold text-gray-400'>90%</p>
              </motion.div>

              {/* Next.js Skill */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className='col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 text-center hover:border-[#c9f31d] transition-all duration-300'
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                  className='w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-gray-700'
                >
                  <svg className='w-8 h-8 text-[#c9f31d]' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z' />
                  </svg>
                </motion.div>
                <h3 className='text-white font-bold mb-2'>Next.js</h3>
                <p className='text-3xl font-bold text-gray-400'>92%</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      <section className='relative py-20 px-4 sm:px-6 lg:px-8 bg-black'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className='text-white text-sm font-medium mb-4'>Clients Testimonials</p>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-8'>
                I&apos;ve 120+ Clients<br />Positive<br /><span className='text-[#c9f31d]'>Feedback</span>
              </h2>
              <div className='flex gap-4'>
                <button
                  onClick={prevTestimonial}
                  className='w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-white hover:border-white hover:text-black transition-all duration-300'
                >
                  <svg className='w-5 h-5 text-white hover:text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className='w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-white hover:border-white hover:text-black transition-all duration-300'
                >
                  <svg className='w-5 h-5 text-white hover:text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </button>
              </div>
            </motion.div>

            {/* Right - Testimonial Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='space-y-6'
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className='bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8'
                >
                  <p className='text-white leading-relaxed mb-6'>
                    &quot;{testimonials[currentTestimonial].content}&quot;
                  </p>
                  <div className='flex items-center justify-between'>
                    <div>
                      <h4 className='text-white font-bold mb-1'>{testimonials[currentTestimonial].name}</h4>
                      <p className='text-[#c9f31d] text-sm'>{testimonials[currentTestimonial].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
