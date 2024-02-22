import { IProductDetails } from '@/interfaces';
import { getAllProducts } from '@/services/axios';
import { useQuery } from '@tanstack/react-query';

interface ProductsData {
  data: IProductDetails[];
}

interface ProductsResult {
  products?: IProductDetails[];
  isLoading?: boolean;
  isError?: boolean;
}

export function useProducts(category: string): ProductsResult {
  const { data, isError, isLoading } = useQuery<ProductsData>({
    queryKey: ['products', category],
    queryFn: getAllProducts,
  });

  if (isLoading) {
    return { isLoading };
  }

  if (isError) {
    return { isError };
  }

  const products = data?.data;

  return { products };
}
