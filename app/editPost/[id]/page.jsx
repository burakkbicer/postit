import EditPostForm from '@/components/EditPostForm';

async function getPost(id) {
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, { cache: 'no-store' });
    const post = await res.json();
    return post;
  } catch (error) {
    console.log(error.message);
  }
}

export default async function EditPost({ params }) {
  const post = await getPost(params.id);

  return <EditPostForm id={params.id} post={post} />;
}
