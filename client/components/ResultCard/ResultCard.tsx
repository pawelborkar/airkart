'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Card, Image } from '@nextui-org/react';
import { IProductDetails } from '@/interfaces';
import { addItem } from '@/store/cart/cartSlice';
import { ShoppingCart, Zap } from 'lucide-react';

const ResultCard = (product: IProductDetails) => {
  const { id, name, imageURLs, price } = product;
  const imageURL = imageURLs[0];

  const [isInCart] = useState(false);

  const dispatch = useDispatch();

  //@ts-ignore next-line
  const handleAddItem = () => dispatch(addItem(product));

  return (
    <Link href={`/products/${id}`}>
      <Card className="flex flex-col rounded-t-3xl justify-between m-4 h-[420px] w-96 shadow-xl">
        <div className="flex flex-col justify-center w-full flex-grow items-start">
          <div className="w-full h-3/4 flex justify-start">
            <Image
              alt={name}
              removeWrapper
              className="w-full rounded-t-3xl rounded-b-none object-cover h-72 p-0 "
              src={imageURL}
            />
          </div>
          <div className="flex flex-col h-1/3 justify-around items-around w-full">
            <div className="flex w-full  px-4 justify-between items-start">
              <span className="text-2xl mr-1 font-bold">{name}</span>

              <span className="text-2xl text-green-500 font-medium">&#8377;{price}</span>
            </div>
            <div className="w-full flex justify-around items-center">
              <Button
                radius="full"
                className="w-36 shadow-xl"
                size="md"
                color={isInCart ? 'danger' : 'warning'}
                startContent={<ShoppingCart />}
                onClick={handleAddItem}
              >
                {isInCart ? 'Remove' : 'Add to cart'}
              </Button>
              <Button
                startContent={<Zap />}
                radius="full"
                className="w-36 bg-gradient-to-tr from-pink-500 to-orange-500 text-white shadow-xl"
                size="md"
              >
                {isInCart ? 'Checkout' : 'Buy Now'}
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ResultCard;
