'use client';
import { Spinner } from '@nextui-org/react';
import { toast } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import { getProductsByCategory } from '@/services/axios';
import { IProductDetails, IProductsData } from '@/interfaces';
import Categories from '@/components/Categories/Categories';
import ResultCard from '@/components/ResultCard/ResultCard';

const Product = (category: any) => {
  category = category.searchParams?.category;

  const { data, isError, isLoading } = useQuery<IProductsData>({
    queryKey: ['products', category],
    queryFn: getProductsByCategory,
  });

  if (isLoading) {
    return (
      <Spinner
        className="flex w-full h-screen justify-center items-center"
        label={'Loading...'}
        color="warning"
      />
    );
  }

  if (isError) {
    return toast.error('Unable to fetch products.', {
      style: {
        border: '1px solid #c1c1c142',
        borderRadius: '12px',
        background: 'transparent',
        color: '#f73d69',
      },
    });
  }
  const products = data?.data;
  return (
    <>
      <Categories />
      <div className="flex flex-row flex-wrap justify-around items-center w-full h-full ">
        {products.map((cartItem: IProductDetails) => (
          <ResultCard key={cartItem?.id} {...cartItem} />
        ))}
      </div>
    </>
  );
};

export default Product;
