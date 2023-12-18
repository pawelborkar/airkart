'use client';
import { Button, Card, Image } from '@nextui-org/react';
import { IResultCard } from '@/interfaces';
import { ShoppingCart, Zap } from 'lucide-react';
import { useState } from 'react';

const ProductDetails = ({ productName, imageURL, price, description }: IResultCard) => {
  const [isInCart] = useState(true);
  return (
    <Card className="flex flex-row p-4 justify-evenly ">
      <div className="w-4/6">
        <Image width={480} height={480} isZoomed aria-label={productName} src={imageURL} />
      </div>
      <div className="w-2/6 m-6">
        <div className="p-2 h-1/6">
          <div></div>
          <p className="text-3xl">{productName}</p>
          <div>
            <p className="text-2xl"> &#8377;{price}</p>
          </div>
        </div>
        <div className="mt-4 h-3/6">
          {[
            'Titan Watch Stainless Steel Matte Black',
            'Stainless Steel Strap',
            'Casual Wear',
            '5 Yr Warranty',
            '1 Yr Battery Warranty',
          ].map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </div>
        {/* <div>{description}</div> */}
        <div className="flex flex-col gap-5 justify-center items-center">
          <Button radius="full" fullWidth size="lg" color="warning" startContent={<ShoppingCart />}>
            {isInCart ? 'Remove from cart' : 'Add to Cart'}
          </Button>
          <Button
            startContent={<Zap />}
            radius="full"
            className="bg-gradient-to-tr from-pink-500 to-orange-500 text-white shadow-lg"
            fullWidth
            size="lg"
          >
            {isInCart ? 'Go to cart' : 'Buy Now'}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductDetails;
