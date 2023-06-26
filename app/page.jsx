import PostsList from '@/components/PostsList';

async function getPosts() {
  try {
    const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' });
    const posts = await res.json();
    return posts;
  } catch (error) {
    console.log(error.message);
  }
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      {posts.map((post) => (
        <PostsList key={post.id} post={post} />
      ))}
    </>
  );
}
