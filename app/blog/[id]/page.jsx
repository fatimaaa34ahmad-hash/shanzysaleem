'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog';

export default function BlogPost({ params }) {
  const postId = parseInt(params.id);
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    notFound();
  }

  return (
    <div className='min-h-screen pt-24 pb-20'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Breadcrumb / Back Link */}
        <Link
          href='/blog'
          className='inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200 mb-8'
        >
          <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
          </svg>
          Back to Blog
        </Link>

        {/* Full-width Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='relative w-full h-[50vh] md:h-[60vh] rounded-3xl overflow-hidden mb-16 shadow-2xl group'
        >
          {/* Background Image */}
          <Image
            src={post.image}
            alt={post.title}
            fill
            className='object-cover transition-transform duration-700 group-hover:scale-105'
            priority
          />
          {/* Gradient Overlay */}
          <div className='absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent' />
          
          {/* Content Overlay */}
          <div className='absolute bottom-0 left-0 right-0 p-8 md:p-12 flex flex-col justify-end h-full'>
            <div className='flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-6'>
              <span className='px-4 py-1.5 bg-[#c9f31d] text-black font-bold rounded-full uppercase tracking-wider text-xs shadow-lg'>
                {post.category}
              </span>
              <div className='flex items-center gap-3 backdrop-blur-md bg-black/30 px-4 py-1.5 rounded-full border border-white/10'>
                <span>{post.date}</span>
                <span className='text-[#c9f31d]'>•</span>
                <span>{post.readTime}</span>
                <span className='text-[#c9f31d]'>•</span>
                <span>By {post.author}</span>
              </div>
            </div>

            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl'>
              {post.title}
            </h1>
          </div>
        </motion.div>

        {/* Post Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='prose prose-invert prose-lg max-w-none'
        >
          {/* We use a simple split/map to render the content with some basic markdown-like support for this example */}
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('### ')) {
              return <h3 key={index} className='text-2xl font-bold text-white mt-8 mb-4'>{paragraph.replace('### ', '')}</h3>;
            }
            if (paragraph.startsWith('\`\`\`')) {
              // Extract code block
              const code = paragraph.replace(/\`\`\`(css|python)?\n/g, '').replace(/\`\`\`/g, '');
              return (
                <div key={index} className='bg-gray-900 rounded-xl p-4 my-6 overflow-x-auto border border-white/10'>
                  <pre className='text-sm text-gray-300 font-mono'>
                    <code>{code}</code>
                  </pre>
                </div>
              );
            }
            if (paragraph.trim() !== '') {
               // Render markdown lists simply
               if (paragraph.includes('- **') || paragraph.includes('1. **')) {
                   const items = paragraph.split('\n').filter(i => i.trim() !== '');
                   return (
                       <ul key={index} className='list-disc pl-6 my-4 space-y-2 text-gray-300'>
                         {items.map((item, i) => (
                           <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/(\d\. |\- )?\*\*(.*?)\*\*/, '<strong>$2</strong>') }} />
                         ))}
                       </ul>
                   )
               }
               
               // Render bold text
               let text = paragraph;
               const boldRegex = /\*\*(.*?)\*\*/g;
               if (boldRegex.test(text)) {
                 return <p key={index} className='text-gray-300 leading-relaxed mb-6' dangerouslySetInnerHTML={{ __html: text.replace(boldRegex, '<strong>$1</strong>') }} />;
               }
               
              return <p key={index} className='text-gray-300 leading-relaxed mb-6'>{text}</p>;
            }
            return null;
          })}
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='mt-12 pt-8 border-t border-white/10'
        >
          <div className='flex flex-wrap gap-3'>
            <span className='text-gray-400 font-medium mr-2 flex items-center'>Tags:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className='px-4 py-2 bg-white/5 border border-white/10 text-gray-300 rounded-full text-sm hover:bg-white/10 transition-colors cursor-pointer'
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
