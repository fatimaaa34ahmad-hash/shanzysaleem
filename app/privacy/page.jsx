'use client';
import { motion } from 'framer-motion';

export default function Privacy() {
  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'When you visit our website, we may collect certain information automatically, including your IP address, browser type, operating system, and usage patterns.',
        'When you contact us through our contact form, we collect the information you provide, such as your name, email address, and message content.',
        'We may use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic.',
      ],
    },
    {
      title: 'How We Use Your Information',
      content: [
        'To respond to your inquiries and provide customer support.',
        'To improve our website and services based on user feedback and analytics.',
        'To send you updates about our services (only if you have opted in to receive such communications).',
        'To comply with legal obligations and protect our rights.',
      ],
    },
    {
      title: 'Information Sharing',
      content: [
        'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.',
        'We may share information with trusted service providers who assist us in operating our website and conducting our business.',
        'We may disclose information when required by law or to protect our rights and safety.',
      ],
    },
    {
      title: 'Data Security',
      content: [
        'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
        'However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.',
        'We regularly review and update our security practices to ensure the protection of your data.',
      ],
    },
    {
      title: 'Your Rights',
      content: [
        'You have the right to access, update, or delete your personal information.',
        'You can opt out of receiving promotional communications from us at any time.',
        'You can disable cookies in your browser settings, though this may affect your experience on our website.',
        'If you have any concerns about how we handle your data, please contact us.',
      ],
    },
    {
      title: 'Cookies and Tracking',
      content: [
        'Our website uses cookies to improve functionality and user experience.',
        'We may use Google Analytics or similar services to understand how visitors interact with our website.',
        'You can control cookie settings through your browser preferences.',
        'Some features of our website may not function properly if cookies are disabled.',
      ],
    },
    {
      title: 'Third-Party Services',
      content: [
        'Our website may contain links to external websites. We are not responsible for the privacy practices of these sites.',
        'We may use third-party services for analytics, hosting, or other business purposes.',
        'These services have their own privacy policies, and we encourage you to review them.',
        'We carefully select service providers who maintain high standards of data protection.',
      ],
    },
    {
      title: 'Changes to This Policy',
      content: [
        'We may update this privacy policy from time to time to reflect changes in our practices or legal requirements.',
        'We will notify you of any significant changes by posting the updated policy on our website.',
        'The "Last Updated" date at the top of this policy indicates when it was last revised.',
        'Your continued use of our website after any changes constitutes acceptance of the updated policy.',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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

  return (
    <div className='min-h-screen py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Privacy{' '}
            <span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
              Policy
            </span>
          </h1>
          <p className='text-lg text-gray-300 mb-4'>
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your information.
          </p>
          <p className='text-sm text-gray-400'>
            Last updated: January 15, 2024
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='glass-card p-8 rounded-3xl mb-12'
        >
          <h2 className='text-2xl font-bold text-white mb-4'>Introduction</h2>
          <div className='text-gray-300 space-y-4'>
            <p>
              Welcome to Shanzy&apos;s Portfolio. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website or use our services. Please read this privacy
              policy carefully.
            </p>
            <p>
              By accessing or using our website, you agree to this Privacy
              Policy. If you do not agree with the terms of this Privacy Policy,
              please do not access the site.
            </p>
          </div>
        </motion.div>

        {/* Policy Sections */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='space-y-8 mb-12'
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              variants={itemVariants}
              className='glass-card p-8 rounded-2xl'
            >
              <h3 className='text-xl font-semibold text-white mb-6'>
                {section.title}
              </h3>
              <div className='space-y-4'>
                {section.content.map((paragraph, idx) => (
                  <p key={idx} className='text-gray-300 leading-relaxed'>
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='glass-card p-8 rounded-3xl'
        >
          <h2 className='text-2xl font-bold text-white mb-6'>
            Contact Us About Privacy
          </h2>
          <div className='text-gray-300 space-y-4'>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please don&apos;t hesitate to contact us:
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <div className='flex items-center'>
                <span className='text-blue-400 mr-2'>📧</span>
                <a
                  href='mailto:privacy@shanzy.dev'
                  className='text-blue-400 hover:text-blue-300 transition-colors duration-200'
                >
                  privacy@shanzy.dev
                </a>
              </div>
              <div className='flex items-center'>
                <span className='text-blue-400 mr-2'>🌐</span>
                <a
                  href='/contact'
                  className='text-blue-400 hover:text-blue-300 transition-colors duration-200'
                >
                  Contact Form
                </a>
              </div>
            </div>
            <p className='text-sm text-gray-400 mt-6'>
              We will respond to your privacy-related inquiries within 30 days
              of receipt.
            </p>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='flex justify-center mt-12'
        >
          <div className='flex flex-col sm:flex-row gap-4'>
            <motion.a
              href='/terms'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='px-6 py-3 glass rounded-lg text-white hover:bg-white/10 transition-all duration-200 text-center'
            >
              Terms of Service
            </motion.a>
            <motion.a
              href='/contact'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 text-center'
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
