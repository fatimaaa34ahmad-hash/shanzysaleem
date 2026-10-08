'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import useSWR, { mutate } from 'swr';
import Link from 'next/link';
import Image from 'next/image';

// Fetcher function for SWR
const fetcher = (url) => fetch(url).then((res) => res.json());

// Optimistic update function for likes
async function likeProject(id) {
  try {
    const response = await fetch(`/api/projects/${id}/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to like project');
    }

    return await response.json();
  } catch (error) {
    console.error('Error liking project:', error);
    throw error;
  }
}

export default function ProjectCard({ project }) {
  const {
    id,
    title,
    description,
    image,
    tags,
    link,
    category,
    featured = false,
  } = project;
  const [isLiked, setIsLiked] = useState(false);

  // Use SWR to manage project data and likes
  const { data: projectData, error } = useSWR(`/api/projects/${id}`, fetcher, {
    fallbackData: project,
    revalidateOnFocus: false,
  });

  const currentLikes = projectData?.likes || project.likes || 0;

  const handleLike = async () => {
    if (isLiked) return; // Prevent double-clicking

    const optimisticData = { ...projectData, likes: currentLikes + 1 };

    // Optimistic update
    mutate(`/api/projects/${id}`, optimisticData, false);
    setIsLiked(true);

    try {
      await likeProject(id);
      // Revalidate to get the real data from server
      mutate(`/api/projects/${id}`);
    } catch (error) {
      // Rollback on error
      mutate(`/api/projects/${id}`);
      setIsLiked(false);
      console.error('Failed to like project:', error);
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.article
      variants={cardVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`group glass-card rounded-2xl overflow-hidden ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Project Image */}
      <div className={`relative overflow-hidden ${featured ? 'h-80' : 'h-48'}`}>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className={`${featured ? 'text-8xl' : 'text-6xl'} opacity-30`}>
              {category === 'design'
                ? '🎨'
                : category === 'web'
                  ? '🌐'
                  : category === 'mobile'
                    ? '📱'
                    : '🚀'}
            </div>
          </div>
        </div>

        {/* Overlay on hover */}
        <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
          <Link
            href={link}
            className='px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white font-medium hover:bg-white/30 transition-all duration-200'
          >
            View Details
          </Link>
        </div>

        {/* Featured badge */}
        {featured && (
          <div className='absolute top-4 left-4'>
            <span className='px-3 py-1 bg-gradient-to-r from-yellow-400/80 to-orange-400/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full'>
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className='p-6'>
        <div className='flex items-start justify-between mb-3'>
          <h3
            className={`font-semibold text-white group-hover:text-blue-400 transition-colors duration-200 ${
              featured ? 'text-xl' : 'text-lg'
            }`}
          >
            {title}
          </h3>
          <div className='flex items-center space-x-2'>
            <motion.button
              onClick={handleLike}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={isLiked}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isLiked
                  ? 'bg-red-500/20 text-red-400 cursor-not-allowed'
                  : 'bg-white/10 text-gray-400 hover:bg-red-500/20 hover:text-red-400'
              }`}
              aria-label='Like project'
            >
              <motion.svg
                animate={isLiked ? { scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 0.3 }}
                className='w-5 h-5'
                fill={isLiked ? 'currentColor' : 'none'}
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                />
              </motion.svg>
            </motion.button>
          </div>
        </div>

        <p
          className={`text-gray-400 mb-4 ${featured ? 'text-base' : 'text-sm'}`}
        >
          {description}
        </p>

        {/* Tags */}
        <div className='flex flex-wrap gap-2 mb-4'>
          {tags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='px-3 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-full hover:bg-white/20 transition-colors duration-200'
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Footer */}
        <div className='flex items-center justify-between'>
          <Link
            href={link}
            className='inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium'
          >
            View Project
            <motion.svg
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
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
            </motion.svg>
          </Link>

          <div className='flex items-center text-gray-400 text-sm'>
            <span className='mr-1'>❤️</span>
            <span>{currentLikes}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
