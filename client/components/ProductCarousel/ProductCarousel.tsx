'use client';
import { useQuery } from '@tanstack/react-query';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProductCard from '../ProductCard/ProductCard';
import { Card, Spinner } from '@nextui-org/react';
import { toast } from 'react-hot-toast';
import { ICategoryProps, IProductDetails } from '@/interfaces';
import { useProducts } from '@/hooks/useProducts';

const ProductCarousel: React.FC<ICategoryProps> = ({ category }) => {
  const { products, isLoading, isError } = useProducts(category);

  // Function to split products into groups of 6
  const chunkArray = (arr: any[], size: number) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
      arr.slice(index * size, index * size + size)
    );
  };

  // Split products into groups of 6
  const productChunks = chunkArray(products || [], 4);

  return (
    <Carousel
      showArrows
      autoPlay
      infiniteLoop
      showStatus={false}
      showThumbs={false}
    >
      {productChunks.map((chunk: IProductDetails[], index: number) => (
        <div key={index} className="flex flex-row">
          {chunk.map((product: IProductDetails) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price.toString()}
              image_url={product.imageURLs[0]}
            />
          ))}
        </div>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
