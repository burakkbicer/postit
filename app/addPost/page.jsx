import Input from '@/components/Input';

export default function AddPost() {
  return (
    <form className='flex flex-col gap-3'>
      <Input placeholder='Yazı Başlığı' />
      <Input placeholder='Yazı Açıklaması' />

      <button className='bg-green-600 font-bold text-white py-2 px-5 w-fit rounded-md'>Yazı Ekle</button>
    </form>
  );
}
