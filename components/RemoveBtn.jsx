'use client';

import { HiOutlineTrash } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function RemoveBtn({ id }) {
  const router = useRouter();

  const handleRemove = () => {
    const confirmed = confirm('Bu yazıyı silmek istediğinize emin misiniz?');
    if (!confirmed) return;

    axios
      .delete(`/api/posts/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        router.refresh();
        router.push('/');
      });
  };

  return (
    <button className='text-red-400' onClick={handleRemove}>
      <HiOutlineTrash size={24} />
    </button>
  );
}
