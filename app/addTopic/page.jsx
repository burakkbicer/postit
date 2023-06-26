import Input from '@/components/Input';

export default function AddTopic() {
  return (
    <form className='flex flex-col gap-3'>
      <Input placeholder='Konu Başlığı' />
      <Input placeholder='Konu Açıklaması' />

      <button className='bg-green-600 font-bold text-white py-2 px-5 w-fit rounded-md'>Konu Ekle</button>
    </form>
  );
}
