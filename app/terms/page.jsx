'use client';
import { motion } from 'framer-motion';

export default function Terms() {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.',
        'If you do not agree to abide by the above, please do not use this service.',
        'These terms constitute the entire agreement between you and Shanzy Portfolio regarding the use of this website.',
      ],
    },
    {
      title: 'Use License',
      content: [
        'Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial transitory viewing only.',
        'This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials, use the materials for any commercial purpose or for any public display, attempt to reverse engineer any software contained on the website, or remove any copyright or other proprietary notations from the materials.',
        'This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time.',
      ],
    },
    {
      title: 'Services and Pricing',
      content: [
        'All prices quoted are estimates and subject to change based on project scope and requirements.',
        'A detailed proposal will be provided before any work begins, outlining specific deliverables, timelines, and costs.',
        'Payment terms will be specified in individual project agreements.',
        'We reserve the right to modify our service offerings and pricing at any time.',
      ],
    },
    {
      title: 'Project Agreements',
      content: [
        'All project work will be governed by separate written agreements that specify deliverables, timelines, payment terms, and other project-specific details.',
        'Any custom terms in project agreements will supersede these general terms of service for that specific project.',
        'Changes to project scope must be agreed upon in writing and may result in additional charges.',
        'Client is responsible for providing necessary materials, access, and feedback in a timely manner.',
      ],
    },
    {
      title: 'Intellectual Property',
      content: [
        'Upon full payment, clients receive ownership rights to the final deliverables as specified in the project agreement.',
        'We retain the right to showcase completed work in our portfolio unless specifically agreed otherwise.',
        'Any pre-existing intellectual property, tools, or methodologies remain our property.',
        'Clients are responsible for ensuring they have rights to any materials they provide for use in the project.',
      ],
    },
    {
      title: 'Disclaimer',
      content: [
        'The materials on this website are provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.',
        'We do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.',
        'While we strive for accuracy, we cannot guarantee that all information on this website is current or error-free.',
      ],
    },
    {
      title: 'Limitations',
      content: [
        'In no event shall Shanzy Portfolio or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.',
        'Some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.',
        'Our total liability for any claim related to our services shall not exceed the amount paid for those specific services.',
      ],
    },
    {
      title: 'Accuracy of Materials',
      content: [
        'The materials appearing on this website could include technical, typographical, or photographic errors.',
        'We do not warrant that any of the materials on its website are accurate, complete, or current.',
        'We may make changes to the materials contained on its website at any time without notice.',
        'However, we do not make any commitment to update the materials.',
      ],
    },
    {
      title: 'Privacy Policy',
      content: [
        'Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information.',
        'By using our website, you agree to the collection and use of information in accordance with our Privacy Policy.',
        'We encourage you to review our Privacy Policy, which also governs your use of the website.',
      ],
    },
    {
      title: 'Governing Law',
      content: [
        'These terms and conditions are governed by and construed in accordance with the laws of Pakistan.',
        'Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in Karachi, Pakistan.',
        'If any provision of these terms is found to be invalid, the remaining provisions will continue to be valid and enforceable.',
      ],
    },
    {
      title: 'Changes to Terms',
      content: [
        'We reserve the right to revise these terms of service at any time without notice.',
        'By using this website, you are agreeing to be bound by the then current version of these terms of service.',
        'Material changes will be highlighted and users will be notified through the website.',
        'Continued use of the website after changes constitutes acceptance of the new terms.',
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
            Terms of{' '}
            <span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
              Service
            </span>
          </h1>
          <p className='text-lg text-gray-300 mb-4'>
            Please read these terms and conditions carefully before using our
            website or services.
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
              Welcome to Shanzy&apos;s Portfolio. These Terms of Service (&ldquo;Terms&rdquo;)
              govern your use of our website and services. By accessing or using
              our website, you agree to be bound by these Terms.
            </p>
            <p>
              These Terms apply to all visitors, users, and others who access or
              use our website and services. Please read these Terms carefully
              before using our website.
            </p>
          </div>
        </motion.div>

        {/* Terms Sections */}
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

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='glass-card p-8 rounded-3xl mb-12'
        >
          <h2 className='text-2xl font-bold text-white mb-6'>Summary</h2>
          <div className='text-gray-300 space-y-4'>
            <p>
              In simple terms: We want to provide you with excellent design and
              development services while protecting both your interests and
              ours. These terms ensure clear expectations for our working
              relationship.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
              <div>
                <h4 className='text-white font-semibold mb-2'>Your Rights:</h4>
                <ul className='space-y-1 text-sm'>
                  <li>• Quality service delivery</li>
                  <li>• Clear project agreements</li>
                  <li>• Ownership of final deliverables</li>
                  <li>• Privacy protection</li>
                </ul>
              </div>
              <div>
                <h4 className='text-white font-semibold mb-2'>
                  Your Responsibilities:
                </h4>
                <ul className='space-y-1 text-sm'>
                  <li>• Provide necessary materials</li>
                  <li>• Timely feedback and communication</li>
                  <li>• Payment as agreed</li>
                  <li>• Respect intellectual property</li>
                </ul>
              </div>
            </div>
          </div>
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
            Questions About These Terms?
          </h2>
          <div className='text-gray-300 space-y-4'>
            <p>
              If you have any questions about these Terms of Service, please
              contact us. We&apos;re happy to clarify any provisions or discuss how
              they apply to your specific situation.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <div className='flex items-center'>
                <span className='text-blue-400 mr-2'>📧</span>
                <a
                  href='mailto:legal@shanzy.dev'
                  className='text-blue-400 hover:text-blue-300 transition-colors duration-200'
                >
                  legal@shanzy.dev
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
              href='/privacy'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='px-6 py-3 glass rounded-lg text-white hover:bg-white/10 transition-all duration-200 text-center'
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href='/contact'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 text-center'
            >
              Start a Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
