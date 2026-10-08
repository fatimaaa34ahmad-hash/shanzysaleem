'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='min-h-screen bg-black'>
      {/* Hero Section */}
      <section className='relative py-20 px-4 sm:px-6 lg:px-8 pt-32'>
        <div className='max-w-7xl mx-auto text-center'>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-white text-sm font-medium mb-4'
          >
            Shanzy Saleem/Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='text-4xl md:text-5xl lg:text-6xl font-bold mb-8'
          >
            Contact
          </motion.h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className='relative py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Left - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className='text-white mb-4'>Get In Touch</p>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-8'>
                Let&apos;s Talk For your<br /><span className='text-[#c9f31d]'>Next Projects</span>
              </h2>

              <div className='space-y-6 mb-8'>
                <div>
                  <h3 className='text-white font-semibold mb-2'>Contact Me</h3>
                  <div className='flex items-center gap-2 text-white'>
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                      <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                    </svg>
                    <a href='mailto:shanzysaleem8@gmail.com' className='hover:text-[#c9f31d] transition-colors'>
                      shanzysaleem8@gmail.com
                    </a>
                  </div>
                </div>

                <div>
                  <div className='flex items-center gap-2 text-white'>
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                    </svg>
                    <a href='tel:+923467394923' className='hover:text-[#c9f31d] transition-colors'>
                      +92 346 7394923
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className='text-white font-semibold mb-4'>Follow Me</h3>
                <div className='flex flex-wrap gap-4'>
                  <a
                    href='https://github.com/shanza211'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors'
                  >
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href='https://www.linkedin.com/in/shanzy-saleem-39064236a/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors'
                  >
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                    </svg>
                  </a>
                  <a
                    href='https://www.youtube.com/@shanza211'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors'
                  >
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.872.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a
                    href='https://x.com/shanza211'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors'
                  >
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <a
                    href='https://www.facebook.com/profile.php?id=61594977775807'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors'
                  >
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a
                    href='https://www.instagram.com/shanzysaleem211/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors'
                  >
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor='fullName' className='block text-white font-medium mb-2'>
                      Full Name <span className='text-[#c9f31d]'>*</span>
                    </label>
                    <input
                      type='text'
                      id='fullName'
                      name='fullName'
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder='Shanzy Saleem'
                      className='w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9f31d] transition-colors'
                    />
                  </div>

                  <div>
                    <label htmlFor='email' className='block text-white font-medium mb-2'>
                      Email Address <span className='text-[#c9f31d]'>*</span>
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder='hello@example.com'
                      className='w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9f31d] transition-colors'
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor='phone' className='block text-white font-medium mb-2'>
                      Phone Number <span className='text-[#c9f31d]'>*</span>
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder='+92 346 7394923'
                      className='w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9f31d] transition-colors'
                    />
                  </div>

                  <div>
                    <label htmlFor='subject' className='block text-white font-medium mb-2'>
                      Subject <span className='text-[#c9f31d]'>*</span>
                    </label>
                    <input
                      type='text'
                      id='subject'
                      name='subject'
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder='I Would Like to Discuss'
                      className='w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9f31d] transition-colors'
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor='message' className='block text-white font-medium mb-2'>
                    Textarea <span className='text-[#c9f31d]'>*</span>
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder='Write message'
                    className='w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9f31d] transition-colors resize-none'
                  />
                </div>

                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full bg-[#c9f31d] hover:bg-white text-black hover:text-black px-8 py-4 rounded-full font-bold text-base transition-all duration-300 shadow-lg hover:shadow-white/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
                >
                  {isSubmitting ? 'Sending...' : 'Send Us Message'}
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </button>

                {submitStatus === 'success' && (
                  <p className='text-[#c9f31d] text-center'>Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className='text-red-500 text-center'>Failed to send message. Please try again.</p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
