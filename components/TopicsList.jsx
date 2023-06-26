import RemoveBtn from './RemoveBtn';
import EditBtn from './EditBtn';

export default function TopicsList() {
  return (
    <>
      <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
        <div>
          <h2 className='font-bold text-2xl'>Konu Başlığı</h2>
          <div>Konu açıklaması</div>
        </div>

        <div className='flex gap-2'>
          <RemoveBtn />
          <EditBtn />
        </div>
      </div>
    </>
  );
}
