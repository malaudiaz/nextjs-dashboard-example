import { fetchFilteredProducts } from "@/app/lib/data-local";

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

    return <h1>Tienda</h1>
}