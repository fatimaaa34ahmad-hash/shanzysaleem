'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog';

export default function BlogPost({ params }) {
  const post =
    blogPosts.find((p) => p.slug === params.id) ||
    blogPosts.find((p) => p.id === parseInt(params.id));

  if (!post) {
    notFound();
  }

  // Related posts (exclude current)
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className='min-h-screen bg-black text-white pt-24 pb-24'>
      {/* Top Header / Breadcrumb */}
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8'>
        <div className='flex items-center justify-between'>
          <Link
            href='/blog'
            className='inline-flex items-center text-sm font-medium text-gray-400 hover:text-[#c9f31d] transition-colors duration-200 group'
          >
            <span className='w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-3 group-hover:bg-[#c9f31d] group-hover:text-black transition-all'>
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
              </svg>
            </span>
            Back to All Articles
          </Link>

          <span className='text-xs uppercase tracking-widest text-gray-500 font-mono'>
            Article #{post.id}
          </span>
        </div>
      </div>

      {/* Hero Header Section */}
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className='flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-6'>
            <span className='px-3.5 py-1 bg-[#c9f31d] text-black font-bold rounded-full uppercase tracking-wider text-xs shadow-[0_0_15px_rgba(201,243,29,0.3)]'>
              {post.category}
            </span>
            <span className='text-gray-600'>•</span>
            <span className='flex items-center gap-1.5 text-gray-300'>
              <svg className='w-4 h-4 text-[#c9f31d]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
              </svg>
              {post.date}
            </span>
            <span className='text-gray-600'>•</span>
            <span className='flex items-center gap-1.5 text-gray-300'>
              <svg className='w-4 h-4 text-[#c9f31d]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
              {post.readTime}
            </span>
            <span className='text-gray-600'>•</span>
            <span className='text-gray-400'>By <strong className='text-white'>{post.author}</strong></span>
          </div>

          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8'>
            {post.title}
          </h1>

          <p className='text-lg md:text-xl text-gray-300 leading-relaxed font-light border-l-2 border-[#c9f31d] pl-5 py-1 mb-10'>
            {post.excerpt}
          </p>

          {/* Featured Image */}
          <div className='relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl group'>
            <Image
              src={post.image}
              alt={post.title}
              fill
              className='object-cover transition-transform duration-700 group-hover:scale-105'
              priority
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent' />
          </div>
        </motion.div>
      </div>

      {/* Main Content & Sidebar Layout */}
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          
          {/* Article Main Body */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='lg:col-span-8'
          >
            {/* Sections Loop */}
            <div className='space-y-12'>
              {post.sections && post.sections.length > 0 ? (
                post.sections.map((section, idx) => (
                  <article
                    key={idx}
                    className='glass-card p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-all'
                  >
                    <div className='flex items-center gap-3 mb-4'>
                      <span className='w-7 h-7 rounded-lg bg-[#c9f31d]/10 border border-[#c9f31d]/30 text-[#c9f31d] flex items-center justify-center font-mono text-xs font-bold'>
                        {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </span>
                      <h2 className='text-xl sm:text-2xl font-bold text-white'>
                        {section.heading}
                      </h2>
                    </div>

                    <p className='text-gray-300 leading-relaxed text-base sm:text-lg mb-6'>
                      {section.body}
                    </p>

                    {/* Bullet Points */}
                    {section.points && section.points.length > 0 && (
                      <div className='space-y-3 my-6 pl-2'>
                        {section.points.map((point, pIdx) => (
                          <div key={pIdx} className='flex items-start gap-3'>
                            <span className='mt-1.5 w-2 h-2 rounded-full bg-[#c9f31d] flex-shrink-0 shadow-[0_0_8px_#c9f31d]' />
                            <p className='text-gray-300 text-base leading-relaxed'>
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Pro Tip Box */}
                    {section.proTip && (
                      <div className='mt-6 p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#c9f31d]/10 to-transparent border-l-4 border-[#c9f31d]'>
                        <div className='flex items-center gap-2 text-[#c9f31d] font-bold text-sm mb-1'>
                          <span>💡</span>
                          <span>Pro Tip & Expert Strategy</span>
                        </div>
                        <p className='text-gray-300 text-sm leading-relaxed'>
                          {section.proTip}
                        </p>
                      </div>
                    )}

                    {/* Code Snippet */}
                    {section.code && (
                      <div className='mt-6 rounded-xl overflow-hidden border border-white/10 bg-[#0d1117]'>
                        <div className='px-4 py-2 bg-white/5 border-b border-white/10 flex items-center justify-between'>
                          <div className='flex items-center gap-1.5'>
                            <div className='w-2.5 h-2.5 rounded-full bg-red-500/80' />
                            <div className='w-2.5 h-2.5 rounded-full bg-yellow-500/80' />
                            <div className='w-2.5 h-2.5 rounded-full bg-green-500/80' />
                          </div>
                          <span className='text-xs font-mono text-gray-400'>
                            {section.code.language || 'code'}
                          </span>
                        </div>
                        <pre className='p-4 overflow-x-auto text-sm text-gray-200 font-mono leading-relaxed'>
                          <code>{section.code.snippet}</code>
                        </pre>
                      </div>
                    )}
                  </article>
                ))
              ) : (
                <div className='text-gray-300 leading-relaxed text-lg whitespace-pre-line'>
                  {post.content}
                </div>
              )}
            </div>

            {/* Tags & Share */}
            <div className='mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4'>
              <div className='flex flex-wrap items-center gap-2'>
                <span className='text-xs uppercase tracking-wider text-gray-400 font-semibold mr-1'>
                  Tags:
                </span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className='px-3.5 py-1.5 bg-white/5 border border-white/10 text-gray-300 rounded-full text-xs font-medium hover:bg-white/10 hover:text-white transition-all'
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <Link
                href='/contact'
                className='inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c9f31d] hover:underline'
              >
                Discuss This Topic With Me →
              </Link>
            </div>
          </motion.div>

          {/* Sticky Sidebar */}
          <div className='lg:col-span-4 space-y-8'>
            {/* Author Bio Card */}
            <div className='glass-card p-6 rounded-2xl border border-white/10 bg-white/[0.02]'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-14 h-14 rounded-full overflow-hidden relative border-2 border-[#c9f31d] shadow-[0_0_12px_rgba(201,243,29,0.3)]'>
                  <Image
                    src='/shanzy-saleem.png'
                    alt='Shanzy Saleem'
                    fill
                    className='object-cover'
                  />
                </div>
                <div>
                  <h3 className='font-bold text-white text-base'>Shanzy Saleem</h3>
                  <p className='text-xs text-[#c9f31d]'>Shopify SEO & AI Expert</p>
                </div>
              </div>
              <p className='text-xs text-gray-400 leading-relaxed mb-4'>
                Helping ecommerce stores, brands & founders scale traffic, search rankings, and automate business processes with AI.
              </p>
              <Link
                href='/contact'
                className='block text-center w-full py-2.5 px-4 bg-[#c9f31d] text-black font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-white transition-all shadow-md'
              >
                Work With Me
              </Link>
            </div>

            {/* Key Takeaways Card */}
            <div className='glass-card p-6 rounded-2xl border border-white/10 bg-white/[0.02]'>
              <h3 className='font-bold text-white text-sm uppercase tracking-wider mb-4 flex items-center gap-2'>
                <span className='text-[#c9f31d]'>⚡</span> Quick Takeaways
              </h3>
              <ul className='space-y-3 text-xs text-gray-300'>
                <li className='flex items-start gap-2'>
                  <span className='text-[#c9f31d] font-bold'>✓</span>
                  <span>Actionable, industry-tested frameworks only.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-[#c9f31d] font-bold'>✓</span>
                  <span>Data-driven strategies designed for maximum ROI.</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-[#c9f31d] font-bold'>✓</span>
                  <span>Updated with 2026 design & search trends.</span>
                </li>
              </ul>
            </div>

            {/* Related Articles */}
            <div className='glass-card p-6 rounded-2xl border border-white/10 bg-white/[0.02]'>
              <h3 className='font-bold text-white text-sm uppercase tracking-wider mb-4'>
                Related Reads
              </h3>
              <div className='space-y-4'>
                {relatedPosts.map((rPost) => (
                  <Link
                    key={rPost.id}
                    href={`/blog/${rPost.slug || rPost.id}`}
                    className='group block'
                  >
                    <p className='text-xs text-[#c9f31d] uppercase tracking-wider font-semibold mb-1'>
                      {rPost.category}
                    </p>
                    <h4 className='text-sm text-gray-200 font-semibold group-hover:text-[#c9f31d] transition-colors line-clamp-2'>
                      {rPost.title}
                    </h4>
                    <span className='text-[11px] text-gray-500 mt-1 block'>
                      {rPost.readTime}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
