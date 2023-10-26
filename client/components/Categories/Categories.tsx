'use client';
import React from 'react';
import { Card, Image } from '@nextui-org/react';

export default function Categories() {
  const categories = [
    {
      id: 1,
      name: 'All Products',
      url: 'https://rukminim1.flixcart.com/fk-p-flap/68/68/image/790b539a57f7b8cd.png?q=100',
    },
    {
      id: 2,
      name: 'Mobiles & Tablets',
      url: 'https://rukminim1.flixcart.com/fk-p-flap/68/68/image/444802d58a814f57.png?q=100',
    },
    {
      id: 3,
      name: 'Electronics',
      url: 'https://rukminim1.flixcart.com/fk-p-flap/68/68/image/ce3744f59fadb72e.png?q=100',
    },
    {
      id: 6,
      name: 'Fashion',
      url: 'https://rukminim1.flixcart.com/fk-p-flap/68/68/image/e4b01f3d783c49a1.png?q=100',
    },
    {
      id: 4,
      name: 'TV & Appliances',
      url: 'https://rukminim1.flixcart.com/fk-p-flap/68/68/image/5b8ad952a656b015.png?q=100',
    },
    {
      id: 5,
      name: 'Home & kitchen',
      url: 'https://rukminim1.flixcart.com/fk-p-flap/68/68/image/9ba7be5608413886.png?q=100',
    },
  ];
  return (
    <Card className="flex flex-row w-full h-32 justify-around items-center">
      {categories.map((category) => {
        return (
          <div className="flex flex-col items-center" key={category.id}>
            <Image width={80} alt={category.name} src={category.url} />
            <p className="text-md mt-2">{category.name}</p>
          </div>
        );
      })}
    </Card>
  );
}
