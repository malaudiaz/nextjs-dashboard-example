import { fetchFilteredProducts } from "@/app/lib/data-local";
import { lusitana } from '@/app/ui/fonts';
import { CreateProducts } from "@/app/ui/products/buttons";
import Search from '@/app/ui/search';
import ProductsTable from "@/app/ui/products/table";

export default async function ShopPage({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }){
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
  
    const products = await fetchFilteredProducts(query, currentPage);

    console.log(products);

    return (
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          <Search placeholder="Search invoices..." />
          <CreateProducts />
        </div>
        {/* <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}> */}
        <ProductsTable query={query} currentPage={currentPage} />
        {/* </Suspense> */}
        <div className="mt-5 flex w-full justify-center">
          {/* <Pagination totalPages={totalPages} /> */}
        </div>
      </div>

    );
  }