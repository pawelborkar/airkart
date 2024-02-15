'use client';
import { Button, Card, Image } from '@nextui-org/react';
import { ArrowRight, Minus, MinusSquare, Plus } from 'lucide-react';
import { IProductDetails } from '@/interfaces';
import { useState } from 'react';

const CartItemCard = (cartItem: IProductDetails) => {
  const [quantity, setQuantity] = useState<number>(0);

  const { name, brand, description, price, imageURLs } = cartItem;
  const handleRemoveItem = () => {
    console.log('Remove Item.');
  };
  const handleIncrement = () => {
    if (quantity <= 10) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <Card className="flex my-4 flex-col md:flex-row rounded-t-3xl justify-between w-4/6 shadow-xl">
      <div className="w-full md:w-1/4 flex justify-start">
        <Image
          alt={name}
          removeWrapper
          className="w-full h-48 md:max-w-[280px] md:max-h-[200px] object-cover p-0"
          src={imageURLs[0]}
        />
      </div>
      <div className="w-full flex flex-col md:w-1/4 justify-evenly items-start gap-3 p-3">
        <div className=''>
          <p className="text-xl md:text-2xl font-bold">{name}</p>
          <p className="text-lg md:text-xl text-neutral-500">by {brand}</p>
        </div>

        <div className="flex w-full justify-start gap-4 items-center flex-wrap">
          <Button
            onClick={handleDecrement}
            size={'sm'}
            endContent={<Minus size={20} />}
          />
          <span>{quantity}</span>
          <Button
            onClick={handleIncrement}
            size={'sm'}
            endContent={<Plus size={20} />}
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-4 md:w-1/3">
        <p className="text-xl text-green-500 pb-2 md:text-2xl font-medium">
          &#8377;{price}
        </p>
        <div className="h-full flex flex-col justify-evenly gap-4 items-center">
          <Button
            radius="full"
            className="w-64 md:w-full shadow-xl"
            color="danger"
            startContent={<MinusSquare />}
            onClick={handleRemoveItem}
          >
            Remove
          </Button>
          <Button
            endContent={<ArrowRight />}
            radius="full"
            className="w-64 md:w-48 bg-gradient-to-tr from-pink-500 to-orange-500 text-white shadow-xl"
          >
            Checkout
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CartItemCard;
