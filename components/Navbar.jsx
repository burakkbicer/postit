import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center bg-slate-800 px-8 py-3'>
      <Link href='/' className='text-white font-bold'>
        Postit.
      </Link>
      <Link href='/addTopic' className='bg-white p-2 rounded-md'>
        Konu Ekle
      </Link>
    </nav>
  );
}
