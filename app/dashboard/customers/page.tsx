// import { fetchFilteredCustomers } from '@/app/lib/data';
import { fetchCustomerPages } from '@/app/lib/data-local';
import CustomersTable from '@/app/ui/customers/table';
import { CustomerTableSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';
import { Suspense } from 'react';
import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import { lusitana } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchCustomerPages(query);


  return (
    <div className="w-full">
        <div className="flex w-full items-center justify-between">
            <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
            <Search placeholder="Search customers..." />
        </div>
        <Suspense key={query + currentPage} fallback={<CustomerTableSkeleton />}>
            <CustomersTable query={query} currentPage={currentPage}/>
        </Suspense>
        <div className="mt-5 flex w-full justify-center">
            <Pagination totalPages={totalPages} />
        </div>
    </div>


  );
}