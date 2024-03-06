import Link from 'next/link';
import { Card, CardFooter, Image } from '@nextui-org/react';
import { IProductDetails } from '@/interfaces';

const ProductCard = ({ id, name, price, imageURLs }: IProductDetails) => {
  return (
    <Link href={`/products/${id}`}>
      <Card isFooterBlurred radius="lg" className="m-4">
        <div className="w-full max-h-[280px] flex justify-center items-center object-cover">
          <Image
            alt={name?.toString()}
            isZoomed
            className="min-w-[240px] max-w-md max-h-full object-cover"
            src={imageURLs[0]}
          />
        </div>
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <div className="w-full h-full stify-between items-center">
            <p className="text-lg">{name}</p>
            <p className="text-xl">{price}</p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
export default ProductCard;
