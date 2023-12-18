'use client';
import { useState } from 'react';
import { Button, Card, Image, Select, SelectItem } from '@nextui-org/react';
import { IResultCard } from '@/interfaces';
import { ShoppingCart, Zap } from 'lucide-react';

const ResultCard = ({ productName, imageURL, price }: IResultCard) => {
  const [isInCart] = useState(true);
  const [value] = useState([1]);
  return (
    <Card className="flex flex-row justify-between my-4">
      <Image
        alt={productName}
        removeWrapper
        height={240}
        width={240}
        className="p-3 rounded-lg"
        isZoomed
        src={imageURL}
      />
      <div className="w-3/5 m-6">
        <p className="text-2xl">{productName}</p>
        <div>
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
        {isInCart && (
          <Select
            variant="flat"
            placeholder="Qty"
            label={value}
            defaultSelectedKeys={value}
            className="w-20"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <SelectItem key={item} textValue={value.toString()}>
                {item}
              </SelectItem>
            ))}
          </Select>
        )}
      </div>
      <div className="w-1/5 mr-3 flex flex-col gap-12">
        <p className="text-2xl mt-4"> &#8377;{price}</p>
        <div className="h-1/2 flex mt-9 flex-col gap-5 justify-center items-center">
          <Button
            radius="full"
            fullWidth
            size="lg"
            color={isInCart ? 'danger' : 'warning'}
            startContent={<ShoppingCart />}
          >
            {isInCart ? 'Remove' : 'Add to cart'}
          </Button>
          <Button
            startContent={<Zap />}
            radius="full"
            className="bg-gradient-to-tr from-pink-500 to-orange-500 text-white shadow-lg"
            fullWidth
            size="lg"
          >
            {isInCart ? 'Checkout' : 'Buy Now'}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ResultCard;
