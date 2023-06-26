import prisma from '@/libs/prismadb';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
  try {
    const { title, description } = await request.json();

    if (!title || !description) {
      return NextResponse.json({ message: 'Başlık ve açıklama alanı boş bırakılamaz!' }, { status: 400 });
    }

    const post = await prisma.post.create({
      data: {
        title,
        description,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ message: 'POST Error', error }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ message: 'GET Error', error }, { status: 500 });
  }
};
