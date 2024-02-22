import React from 'react';
import { Card, CardFooter, Image, CardBody } from '@nextui-org/react';

type Props = {
  key: String;
  name: String;
  price: String;
  image_url: String;
};

const ProductCard = ({ name, price, image_url }: Props) => {
  return (
    <Card isFooterBlurred radius="lg" className="m-4">
      <div className="w-full max-h-[280px] flex justify-center items-center object-cover">
        <Image
          alt={name?.toString()}
          isZoomed
          className="min-w-[240px] max-w-md max-h-full object-cover"
          // height={320}
          // width={420}
          // removeWrapper
          // className="z-0 -translate-y-6 object-cover"
          src={image_url?.toString()}
        />
      </div>
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <div className="w-full h-full stify-between items-center">
          <p className="text-lg">{name}</p>
          <p className="text-xl">{price}</p>
        </div>
      </CardFooter>
    </Card>
  );
};
export default ProductCard;
