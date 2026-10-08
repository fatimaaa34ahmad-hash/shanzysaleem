export const blogPosts = [
  {
    id: 1,
    title: 'Mastering Glassmorphism in Modern Web Design',
    excerpt: 'Explore the principles and techniques behind creating stunning glassmorphism effects that enhance user experience without sacrificing usability.',
    content: `
Glassmorphism is a UI design trend that emphasizes light or dark objects placed on top of colorful backgrounds. It relies on a backdrop blur effect to allow the background to shine through, giving the impression of frosted glass.

### Key Principles of Glassmorphism
1. **Translucency:** A background blur creates the frosted glass effect.
2. **Multi-layered approach:** Objects float in space with clear hierarchy.
3. **Vivid backgrounds:** Colorful backgrounds highlight the blurred transparency.
4. **Subtle light borders:** Thin, semi-transparent borders add structure to the glass shapes.

### How to Implement in CSS
To create this effect, you typically use the \`backdrop-filter\` property in CSS. 

\`\`\`css
.glass-panel {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
}
\`\`\`

When combined with Tailwind CSS, creating these layouts becomes even easier using utility classes like \`backdrop-blur-md\` and \`bg-white/10\`.
    `,
    author: 'Shanzy Saleem',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'design',
    tags: ['Glassmorphism', 'CSS', 'Design Trends', 'UI/UX'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Building Scalable Python APIs with FastAPI',
    excerpt: 'A comprehensive guide to creating robust, high-performance APIs using FastAPI, including best practices for authentication and database integration.',
    content: `
FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints.

### Why FastAPI?
- **Speed:** It is one of the fastest Python frameworks available, on par with NodeJS and Go.
- **Fast to code:** Increases the speed to develop features by about 200% to 300%.
- **Fewer bugs:** Reduces human-induced errors.
- **Intuitive:** Great editor support with auto-completion everywhere.

### Getting Started
Here is a minimal example of a FastAPI application:

\`\`\`python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}
\`\`\`

FastAPI automatically generates interactive API documentation (using Swagger UI and ReDoc) based on your Python type declarations, making testing and integration incredibly smooth.
    `,
    author: 'Shanzy Saleem',
    date: '2024-01-10',
    readTime: '12 min read',
    category: 'python',
    tags: ['Python', 'FastAPI', 'API Development', 'Backend'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'The Future of React: Server Components and Beyond',
    excerpt: 'Dive into the latest React features including Server Components, Suspense, and how they are reshaping modern web development.',
    content: `
React Server Components (RSC) represent a paradigm shift in how we build React applications. They allow developers to render components on the server ahead of time, reducing the amount of JavaScript sent to the client.

### Benefits of Server Components
- **Zero Bundle Size Impact:** Code for Server Components is never sent to the client.
- **Direct Backend Access:** You can securely access databases and the file system directly from your React components.
- **Automatic Code Splitting:** Client components are dynamically loaded only when needed.

By integrating RSCs with frameworks like Next.js (via the App Router), developers can achieve incredible performance metrics while maintaining the rich interactivity React is known for.
    `,
    author: 'Shanzy Saleem',
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'development',
    tags: ['React', 'Next.js', 'Server Components', 'Frontend'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'User Research Methods for Better UX Design',
    excerpt: 'Learn essential user research techniques that will help you create more user-centered designs and improve overall user satisfaction.',
    content: `
User research is the foundation of any successful UX design process. It helps you understand who your users are, what they need, and how they behave.

### Top Research Methods
1. **User Interviews:** One-on-one conversations to uncover deep qualitative insights about user motivations.
2. **Surveys & Questionnaires:** Broad data collection to validate hypotheses at scale.
3. **Usability Testing:** Observing users as they interact with your product to identify friction points.
4. **Card Sorting:** Helping organize information architecture by seeing how users group content.

Skipping user research leads to designing based on assumptions. Even a small amount of research can dramatically improve the success rate of a digital product.
    `,
    author: 'Shanzy Saleem',
    date: '2023-12-28',
    readTime: '6 min read',
    category: 'ui-ux',
    tags: ['User Research', 'UX Design', 'Design Process', 'User Testing'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1576156291666-4f404d78ba7a?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Building a Design System from Scratch',
    excerpt: 'Step-by-step process of creating a comprehensive design system that scales across multiple products and platforms.',
    content: `
A design system is a complete set of standards intended to manage design at scale using reusable components and patterns.

### Steps to Build a Design System
1. **Conduct a Visual Audit:** Review all current designs to identify inconsistencies.
2. **Define Design Tokens:** Standardize colors, typography, spacing, and shadows as variables.
3. **Build the Component Library:** Create reusable UI components in tools like Figma.
4. **Document Everything:** Ensure developers and designers know exactly how and when to use each component.

A robust design system acts as the single source of truth, dramatically speeding up both design and development phases.
    `,
    author: 'Shanzy Saleem',
    date: '2023-12-20',
    readTime: '15 min read',
    category: 'design',
    tags: ['Design System', 'Figma', 'Component Library', 'Scalability'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Python Data Analysis: Pandas Tips and Tricks',
    excerpt: 'Advanced pandas techniques for data manipulation and analysis that will boost your productivity and code efficiency.',
    content: `
Pandas is the backbone of data manipulation in Python. While basic operations are straightforward, mastering advanced techniques can save you hours of processing time.

### Quick Tips
- **Vectorization over Iteration:** Never use \`iterrows()\` if a vectorized operation is available. Vectorized operations are orders of magnitude faster.
- **Memory Optimization:** Downcast numerical types (e.g., float64 to float32) to drastically reduce memory usage.
- **Query Method:** Use \`df.query('condition')\` for cleaner, more readable filtering syntax compared to boolean indexing.

Mastering these small tricks can turn a clunky script into an efficient data pipeline.
    `,
    author: 'Shanzy Saleem',
    date: '2023-12-15',
    readTime: '9 min read',
    category: 'python',
    tags: ['Python', 'Pandas', 'Data Analysis', 'Tips'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
  },
];
