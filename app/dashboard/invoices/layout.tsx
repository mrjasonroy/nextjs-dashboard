import InvoiceCount from '@/app/ui/invoices/invoice-count';
import TextArea from '@/app/ui/textarea';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between'>
        <div className='border-2 bg-red-50 p-2 m-2'>
          Server Component in Layout
          <InvoiceCount />
        </div>
      </div>
      <TextArea
        label='Client Component with useState in Layout'
        placeholder='Random Text Area...'
      />

      <div className='flex flex-grow'>{children}</div>
    </div>
  );
}
