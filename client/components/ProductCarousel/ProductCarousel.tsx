'use client';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProductCard from '../ProductCard/ProductCard';
import { ICategoryProps, IProductDetails } from '@/interfaces';
import { useProducts } from '@/hooks/useProducts';

const ProductCarousel: React.FC<ICategoryProps> = ({ category }: any) => {
  const { products } = useProducts(category);

  const [productChunks, setProductChunks] = useState<IProductDetails[][]>([]);

  // Function to split products into groups of varying sizes based on screen width
  const chunkArray = (arr: any[], screenWidth: number) => {
    let size = 1; // Default size for small screens
    if (screenWidth >= 768 && screenWidth <= 1180) {
      size = 2; // Show 2 cards on iPad screens
    } else {
      size = 4;
    }
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
      arr.slice(index * size, index * size + size)
    );
  };

  useEffect(() => {
    // Calculate screen width
    const getScreenWidth = () => {
      if (window !== undefined) {
        return (
          window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        );
      } else {
        return 720;
      }
    };

    // Function to handle window resize and update productChunks accordingly
    const handleResize = () => {
      setProductChunks(chunkArray(products || [], getScreenWidth()));
    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [products]);

  return (
    <Carousel showArrows autoPlay infiniteLoop showStatus={false} showThumbs={false}>
      {productChunks?.map((chunk: IProductDetails[], index: number) => (
        <div key={index} className="flex flex-row">
          {chunk?.map((product: IProductDetails) => <ProductCard key={product.id} {...product} />)}
        </div>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
