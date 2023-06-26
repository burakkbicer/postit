import Link from 'next/link';
import { HiPencilAlt } from 'react-icons/hi';

export default function EditBtn({ id }) {
  return (
    <Link href={`/editPost/${id}`}>
      <HiPencilAlt size={24} />
    </Link>
  );
}
