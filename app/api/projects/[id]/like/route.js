import { NextResponse } from 'next/server';

// In-memory storage for demo purposes
// In a real application, you would use a database
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

export async function POST(request, { params }) {
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

    // Increment like count
    projectLikes[id] = (projectLikes[id] || 0) + 1;

    // In a real application, you would:
    // 1. Update the database
    // 2. Potentially track user likes to prevent spam
    // 3. Add rate limiting

    console.log(`Project ${id} liked. New count: ${projectLikes[id]}`);

    return NextResponse.json(
      {
        id,
        likes: projectLikes[id],
        message: 'Project liked successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Like project error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

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

    return NextResponse.json(
      {
        id,
        likes: projectLikes[id] || 0,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Get project error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
