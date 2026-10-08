'use client';
import { motion } from 'framer-motion';

export default function Skills() {
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

  const skillCategories = [
    {
      title: 'Design Skills',
      icon: '🎨',
      skills: [
        { name: 'UI/UX Design', level: 95, icon: '🎯' },
        { name: 'Figma', level: 98, icon: '🎨' },
        { name: 'Adobe Photoshop', level: 92, icon: '🖌️' },
        { name: 'Adobe Illustrator', level: 88, icon: '✏️' },
        { name: 'Sketch', level: 85, icon: '📝' },
        { name: 'Prototyping', level: 90, icon: '⚡' },
      ],
    },
    {
      title: 'Frontend Development',
      icon: '💻',
      skills: [
        { name: 'React/Next.js', level: 85, icon: '⚛️' },
        { name: 'HTML5', level: 95, icon: '📄' },
        { name: 'CSS3/SCSS', level: 90, icon: '🎨' },
        { name: 'JavaScript', level: 88, icon: '⚡' },
        { name: 'TypeScript', level: 82, icon: '📘' },
        { name: 'Tailwind CSS', level: 92, icon: '🌊' },
      ],
    },
    {
      title: 'Backend Development',
      icon: '🐍',
      skills: [
        { name: 'Python', level: 90, icon: '🐍' },
        { name: 'Django/Flask', level: 85, icon: '🚀' },
        { name: 'Node.js', level: 80, icon: '🟢' },
        { name: 'REST APIs', level: 88, icon: '🔗' },
        { name: 'Database Design', level: 85, icon: '🗄️' },
        { name: 'PostgreSQL/MongoDB', level: 83, icon: '💾' },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: [
        { name: 'Git/GitHub', level: 92, icon: '📂' },
        { name: 'VS Code', level: 95, icon: '💙' },
        { name: 'WordPress', level: 88, icon: '🌐' },
        { name: 'Docker', level: 75, icon: '🐳' },
        { name: 'AWS/Cloud', level: 78, icon: '☁️' },
        { name: 'Agile/Scrum', level: 85, icon: '🔄' },
      ],
    },
  ];

  const achievements = [
    {
      icon: '🏆',
      title: '50+ Projects Completed',
      description:
        'Successfully delivered diverse projects across multiple industries',
    },
    {
      icon: '⭐',
      title: '100% Client Satisfaction',
      description: 'Maintaining excellent relationships with all clients',
    },
    {
      icon: '🚀',
      title: '3+ Years Experience',
      description: 'Continuous learning and growth in design and development',
    },
    {
      icon: '💡',
      title: 'Innovation Focused',
      description: 'Always exploring new technologies and design trends',
    },
  ];

  const certifications = [
    {
      title: 'Google UX Design Certificate',
      issuer: 'Google',
      year: '2023',
      icon: '🎓',
    },
    {
      title: 'Python for Data Science',
      issuer: 'IBM',
      year: '2022',
      icon: '📊',
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta',
      year: '2023',
      icon: '⚛️',
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon',
      year: '2023',
      icon: '☁️',
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
              Skills & Expertise
            </h1>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto mb-12'>
              A comprehensive overview of my technical skills, design expertise,
              and professional achievements in the digital space.
            </p>
          </motion.div>

          {/* Achievement Stats */}
          <motion.div
            variants={containerVariants}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20'
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className='hero-stats py-6'
              >
                <div className='text-3xl mb-3 pulse-glow'>
                  {achievement.icon}
                </div>
                <h3 className='text-lg font-bold gradient-text mb-2'>
                  {achievement.title}
                </h3>
                <p className='text-sm text-gray-400'>
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Categories */}
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
              Technical Skills
            </h2>
            <p className='text-lg text-gray-400 max-w-2xl mx-auto'>
              Proficiency across design, development, and technology stack
            </p>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className='skill-card p-8 rounded-2xl'
              >
                <div className='flex items-center mb-8'>
                  <div className='text-3xl mr-4 pulse-glow'>
                    {category.icon}
                  </div>
                  <h3 className='text-2xl font-bold gradient-text'>
                    {category.title}
                  </h3>
                </div>

                <div className='space-y-6'>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className='skill-item'
                    >
                      <div className='flex items-center justify-between mb-2'>
                        <div className='flex items-center'>
                          <span className='text-lg mr-3'>{skill.icon}</span>
                          <span className='text-white font-medium'>
                            {skill.name}
                          </span>
                        </div>
                        <span className='text-sm gradient-text font-semibold'>
                          {skill.level}%
                        </span>
                      </div>
                      <div className='w-full bg-white/10 rounded-full h-2 overflow-hidden'>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1.5,
                            delay: skillIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                          className='progress-bar h-2'
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
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
              Certifications & Learning
            </h2>
            <p className='text-lg text-gray-400 max-w-2xl mx-auto'>
              Continuous professional development through recognized
              certifications
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className='glass-card p-6 rounded-2xl text-center'
              >
                <div className='text-3xl mb-4 pulse-glow'>{cert.icon}</div>
                <h3 className='text-lg font-semibold text-white mb-2'>
                  {cert.title}
                </h3>
                <p className='text-gray-400 text-sm mb-2'>{cert.issuer}</p>
                <span className='inline-block px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-xs rounded-full'>
                  {cert.year}
                </span>
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
              Let&apos;s Build Something Amazing
            </h2>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Ready to leverage these skills for your next project? Let&apos;s
              discuss how I can help bring your vision to life.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href='/contact'
                className='gradient-button inline-flex items-center px-8 py-4 text-white font-medium rounded-xl shadow-lg'
              >
                Get In Touch
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
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
