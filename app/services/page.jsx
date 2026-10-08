'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const services = [
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description:
        'Creating beautiful, intuitive user interfaces with modern design principles and user-centered approach.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design & Branding',
        'Usability Testing',
        'Design System Creation',
      ],
      price: 'Starting at $500',
      popular: false,
    },
    {
      icon: '💻',
      title: 'Web Development',
      description:
        'Building responsive, fast, and scalable web applications using modern technologies and best practices.',
      features: [
        'React/Next.js Development',
        'Responsive Web Design',
        'API Integration',
        'Performance Optimization',
        'SEO Implementation',
      ],
      price: 'Starting at $800',
      popular: true,
    },
    {
      icon: '🐍',
      title: 'Python Development',
      description:
        'Developing powerful backend solutions, automation scripts, and data analysis tools using Python.',
      features: [
        'Backend API Development',
        'Data Analysis & Visualization',
        'Automation Scripts',
        'Database Integration',
        'Third-party API Integration',
      ],
      price: 'Starting at $600',
      popular: false,
    },
    {
      icon: '📱',
      title: 'Mobile App Design',
      description:
        'Designing beautiful and functional mobile applications for iOS and Android platforms.',
      features: [
        'Mobile UI/UX Design',
        'Cross-platform Design',
        'App Prototyping',
        'User Flow Optimization',
        'App Store Assets',
      ],
      price: 'Starting at $700',
      popular: false,
    },
    {
      icon: '🌐',
      title: 'WordPress Development',
      description:
        'Creating custom WordPress themes and plugins with modern design and functionality.',
      features: [
        'Custom Theme Development',
        'Plugin Development',
        'WordPress Customization',
        'Performance Optimization',
        'Security Implementation',
      ],
      price: 'Starting at $400',
      popular: false,
    },
    {
      icon: '🎯',
      title: 'Consulting & Strategy',
      description:
        'Providing expert guidance on digital strategy, technology choices, and project planning.',
      features: [
        'Technical Consultation',
        'Project Planning',
        'Technology Stack Selection',
        'Performance Audit',
        'Growth Strategy',
      ],
      price: 'Starting at $150/hr',
      popular: false,
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description:
        'Understanding your business goals, target audience, and project requirements.',
    },
    {
      step: '02',
      title: 'Planning',
      description:
        'Creating detailed project roadmap, timeline, and resource allocation.',
    },
    {
      step: '03',
      title: 'Design & Development',
      description:
        'Bringing your vision to life with modern design and robust development.',
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description:
        'Thorough testing, optimization, and successful project deployment.',
    },
    {
      step: '05',
      title: 'Support & Maintenance',
      description:
        'Ongoing support, updates, and maintenance to ensure optimal performance.',
    },
  ];

  return (
    <div className='min-h-screen pt-20'>
      {/* Hero Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='max-w-6xl mx-auto text-center'
        >
          <motion.div variants={itemVariants}>
            <h1 className='section-title text-4xl md:text-5xl font-bold mb-6'>
              My Services
            </h1>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto mb-12'>
              Comprehensive digital solutions tailored to your business needs.
              From concept to deployment, I deliver exceptional results.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20'
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`service-card p-8 rounded-2xl relative ${
                  service.popular ? 'border-2 border-purple-500/50' : ''
                }`}
              >
                {service.popular && (
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                    <span className='gradient-button px-4 py-2 rounded-full text-sm font-semibold text-white'>
                      Most Popular
                    </span>
                  </div>
                )}

                <div className='text-4xl mb-6 pulse-glow'>{service.icon}</div>
                <h3 className='gradient-text text-xl font-bold mb-4'>
                  {service.title}
                </h3>
                <p className='text-gray-400 mb-6 leading-relaxed'>
                  {service.description}
                </p>

                <ul className='space-y-3 mb-8'>
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className='flex items-center text-sm text-gray-300'
                    >
                      <svg
                        className='w-4 h-4 text-green-400 mr-3'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className='text-lg font-bold gradient-text mb-6'>
                  {service.price}
                </div>

                <Link
                  href='/contact'
                  className={`block w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 text-center ${
                    service.popular
                      ? 'gradient-button text-white'
                      : 'glass-card text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Process Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='section-title text-3xl md:text-4xl font-bold mb-6'>
              My Process
            </h2>
            <p className='text-lg text-gray-400 max-w-2xl mx-auto'>
              A streamlined approach that ensures quality delivery and client
              satisfaction
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text-center'
              >
                <div className='w-16 h-16 mx-auto mb-4 rounded-full glass-card flex items-center justify-center'>
                  <span className='text-xl font-bold gradient-text'>
                    {step.step}
                  </span>
                </div>
                <h3 className='text-lg font-semibold text-white mb-3'>
                  {step.title}
                </h3>
                <p className='text-sm text-gray-400 leading-relaxed'>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='max-w-4xl mx-auto text-center'
        >
          <div className='glass-card p-12 rounded-3xl animated-bg'>
            <h2 className='section-title text-3xl md:text-4xl font-bold mb-6'>
              Ready to Start Your Project?
            </h2>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Let&apos;s discuss your ideas and create something amazing together.
              Get in touch for a free consultation.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href='/contact'
                  className='gradient-button inline-flex items-center px-8 py-4 text-white font-medium rounded-xl shadow-lg'
                >
                  Start a Project
                  <svg
                    className='ml-2 w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    />
                  </svg>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href='/projects'
                  className='glass-card inline-flex items-center px-8 py-4 text-gray-300 hover:text-white font-medium rounded-xl transition-all duration-200'
                >
                  View Portfolio
                  <svg
                    className='ml-2 w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
