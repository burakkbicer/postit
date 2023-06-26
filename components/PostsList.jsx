import RemoveBtn from './RemoveBtn';
import EditBtn from './EditBtn';

export default function PostsList({ post }) {
  return (
    <>
      <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
        <div>
          <h2 className='font-bold text-2xl'>{post.title}</h2>
          <div>{post.description}</div>
        </div>

        <div className='flex gap-2'>
          <RemoveBtn id={post.id} />
          <EditBtn id={post.id} />
        </div>
      </div>
    </>
  );
}
