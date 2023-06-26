export default function Input({ placeholder, name, value, onChange }) {
  return (
    <input
      type='text'
      name={name}
      placeholder={placeholder}
      className='border border-slate-500 px-8 py-2 rounded-md'
      value={value}
      onChange={onChange}
    />
  );
}
