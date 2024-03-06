import { IProductsData, IProductsResult } from '@/interfaces';
import { getProductsByCategory } from '@/services/axios';
import { useQuery } from '@tanstack/react-query';

export function useProducts(category: string): IProductsResult {
  const { data, isError, isLoading } = useQuery<IProductsData>({
    queryKey: ['products', category],
    queryFn: getProductsByCategory,
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
