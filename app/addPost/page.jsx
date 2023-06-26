'use client';

import { useState } from 'react';
import Input from '@/components/Input';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function AddPostForm() {
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
  });

  const router = useRouter();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputs.title || !inputs.description) return;
    axios
      .post('/api/posts', inputs)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setInputs({ title: '', description: '' });
        router.refresh();
        router.push('/');
      });
  };

  return (
    <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
      <Input placeholder='Yazı Başlığı' name='title' value={inputs.title} onChange={handleChange} />
      <Input placeholder='Yazı Açıklaması' name='description' value={inputs.description} onChange={handleChange} />

      <button
        className='bg-green-600 font-bold text-white py-2 px-5 w-fit rounded-md disabled:opacity-25'
        type='submit'
        disabled={!inputs.title || !inputs.description}
      >
        Yazı Ekle
      </button>
    </form>
  );
}
