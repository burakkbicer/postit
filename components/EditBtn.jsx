import Link from 'next/link';
import { HiPencilAlt } from 'react-icons/hi';

export default function EditBtn() {
  return (
    <Link href='/editTopic/123'>
      <HiPencilAlt size={24} />
    </Link>
  );
}
