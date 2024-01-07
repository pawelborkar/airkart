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
    <Card isFooterBlurred className="w-[180px] h-[220px] mx-2 col-span-12 sm:col-span-5">
      <CardBody className="overflow-hidden">
        <Image
          alt={name?.toString()}
          removeWrapper
          isZoomed
          className="z-0 mt-2 -translate-y-6 object-fit"
          src={image_url?.toString()}
        />
      </CardBody>
      <CardFooter className="flex justify-center items-center bg-white/25 bottom-0 border-t-1 border-zinc-100/50 z-10 ">
        <div className="flex flex-col justify-center items-center">
          <p className="text-black text-tiny">{name}</p>
          <p className="text-black text-tiny">{price}</p>
        </div>
      </CardFooter>
    </Card>
  );
};
export default ProductCard;
