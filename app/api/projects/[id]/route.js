import { NextResponse } from 'next/server';

// In-memory storage for demo purposes
const projectLikes = {
  p1: 47,
  p2: 52,
  p3: 34,
  p4: 28,
  p5: 41,
  p6: 23,
  p7: 39,
  p8: 31,
};

export async function GET(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { error: 'Project ID is required' },
        { status: 400 }
      );
    }

    // Check if project exists
    if (!(id in projectLikes)) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    // In a real application, you would fetch from database
    const projectData = {
      id,
      likes: projectLikes[id] || 0,
      title: getProjectTitle(id),
      lastUpdated: new Date().toISOString(),
    };

    return NextResponse.json(projectData, { status: 200 });
  } catch (error) {
    console.error('Get project error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function getProjectTitle(id) {
  const titles = {
    p1: 'Amazon FBA Analytics Dashboard',
    p2: 'Glassmorphism Design System',
    p3: 'E-Commerce Mobile App',
    p4: 'Portfolio Website Template',
    p5: 'Data Visualization Dashboard',
    p6: 'SaaS Landing Page',
    p7: 'Finance Mobile App UI',
    p8: 'API Management Platform',
  };
  return titles[id] || 'Unknown Project';
}
