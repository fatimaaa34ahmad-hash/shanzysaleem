'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { blogPosts } from '@/data/blog';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'design', label: 'Design' },
    { id: 'development', label: 'Development' },
    { id: 'python', label: 'Python' },
    { id: 'ui-ux', label: 'UI/UX' },
    { id: 'tutorials', label: 'Tutorials' },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === 'all' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const recentPosts = blogPosts.slice(0, 3);

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
    <div className='min-h-screen pt-20'>
      {/* Hero Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <h1 className='section-title text-4xl md:text-5xl font-bold mb-6'>
              Blog & Insights
            </h1>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              Sharing knowledge, experiences, and insights about design,
              development, and the latest trends in technology.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='mb-12'
          >
            <div className='flex flex-col lg:flex-row gap-6 items-center justify-between'>
              {/* Search */}
              <div className='relative w-full lg:w-96'>
                <input
                  type='text'
                  placeholder='Search articles...'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className='w-full px-4 py-3 pl-12 glass-card rounded-xl text-white placeholder-gray-400 border border-white/10 focus:border-purple-500/50 focus:outline-none transition-colors duration-200'
                />
                <svg
                  className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </div>

              {/* Categories */}
              <div className='flex flex-wrap gap-3'>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'gradient-button text-white'
                        : 'glass-card text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='mb-16'
            >
              <h2 className='text-2xl font-bold text-white mb-8'>
                Featured Articles
              </h2>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className='glass-card rounded-2xl overflow-hidden group'
                  >
                    <div className='aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden'>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className='object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300'
                      />
                      <div className='absolute top-4 left-4'>
                        <span className='px-3 py-1 bg-gradient-to-r from-yellow-400/80 to-orange-400/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full'>
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className='p-6'>
                      <div className='flex items-center text-sm text-gray-400 mb-3'>
                        <span>{post.date}</span>
                        <span className='mx-2'>•</span>
                        <span>{post.readTime}</span>
                        <span className='mx-2'>•</span>
                        <span className='capitalize'>{post.category}</span>
                      </div>
                      <h3 className='text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200'>
                        {post.title}
                      </h3>
                      <p className='text-gray-400 mb-4'>{post.excerpt}</p>
                      <div className='flex flex-wrap gap-2 mb-4'>
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className='px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-full'
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className='inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200'
                      >
                        Read More
                        <svg
                          className='ml-1 w-4 h-4'
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
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.section>
          )}

          {/* All Posts */}
          <motion.section
            variants={containerVariants}
            initial='hidden'
            animate='visible'
          >
            <h2 className='text-2xl font-bold text-white mb-8'>
              {selectedCategory === 'all'
                ? 'All Articles'
                : `${categories.find((c) => c.id === selectedCategory)?.label} Articles`}
            </h2>

            {filteredPosts.length > 0 ? (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className='glass-card rounded-2xl overflow-hidden group'
                  >
                    <div className='aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden'>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className='object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300'
                      />
                    </div>
                    <div className='p-6'>
                      <div className='flex items-center text-sm text-gray-400 mb-3'>
                        <span>{post.date}</span>
                        <span className='mx-2'>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className='text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200'>
                        {post.title}
                      </h3>
                      <p className='text-gray-400 mb-4 text-sm'>
                        {post.excerpt}
                      </p>
                      <div className='flex flex-wrap gap-2 mb-4'>
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className='px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-full'
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className='inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200'
                      >
                        Read More
                        <svg
                          className='ml-1 w-4 h-4'
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
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='text-center py-20'
              >
                <div className='text-6xl mb-4'>📝</div>
                <h3 className='text-xl font-semibold text-white mb-2'>
                  No articles found
                </h3>
                <p className='text-gray-400'>
                  Try adjusting your search or filter criteria.
                </p>
              </motion.div>
            )}
          </motion.section>

          {/* Newsletter Signup */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='mt-20'
          >
            <div className='glass-card p-12 rounded-3xl text-center'>
              <h2 className='text-3xl font-bold text-white mb-6'>
                Stay Updated
              </h2>
              <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
                Get notified when I publish new articles about design,
                development, and technology.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='flex-1 px-4 py-3 glass rounded-lg text-white placeholder-gray-400 border border-white/10 focus:border-blue-500/50 focus:outline-none transition-colors duration-200'
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200'
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.section>
        </div>
      </section>
    </div>
  );
}
