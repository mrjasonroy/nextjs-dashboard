'use client';

import { useState } from 'react';

export default function TextArea({
  label,
  ...props
}: { label: string } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const [value, setValue] = useState(props.value);
  return (
    <div className='flex flex-col border-2 bg-green-50 p-2 m-2'>
      <label className='text-sm font-medium text-gray-700'>{label}</label>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm'
        {...props}
      />
    </div>
  );
}
