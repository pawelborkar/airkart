'use client';
import ResultCard from '@/components/ResultCard/ResultCard';
import { IProductDetails } from '@/interfaces';
import { getAllProducts } from '@/services/axios';
import { Spinner } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

const Product = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });

  const responseTimeLimit = 500;

  if (isLoading) {
    return (
      <Spinner
        className="flex w-full h-screen justify-center items-center"
        label={responseTimeLimit ? "This might take some time to load since I'm using free web service which goes under sleep after 15 mins of inactivity. \n This is a one time wait and you wont' have to wait this long once the server is awake.": "Loading..."}
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
  const { products } = data;
  return (
    <div className="flex flex-row flex-wrap justify-around items-center w-full h-full ">
      {products.map((cartItem: IProductDetails) => (
        <ResultCard key={cartItem?.id} {...cartItem} />
      ))}
    </div>
  );
};

export default Product;
