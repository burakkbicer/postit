import prisma from '@/libs/prismadb';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
  try {
    const { id } = params;

    const post = await prisma.post.findUnique({
      where: {
        id,
      },
    });

    if (!post) {
      return NextResponse.json({ message: 'Post bulunamadı!' }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ message: 'GET Error', error }, { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const { id } = params;
    const { title, description } = await request.json();

    const post = await prisma.post.update({
      where: {
        id,
      },
      data: {
        title,
        description,
      },
    });

    if (!post) {
      return NextResponse.json({ message: 'Post bulunamadı!' }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ message: 'PATCH Error', error }, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const { id } = params;

    const post = await prisma.post.delete({
      where: {
        id,
      },
    });

    if (!post) {
      return NextResponse.json({ message: 'Post bulunamadı!' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Post başarıyla silindi!' });
  } catch (error) {
    return NextResponse.json({ message: 'DELETE Error', error }, { status: 500 });
  }
};
