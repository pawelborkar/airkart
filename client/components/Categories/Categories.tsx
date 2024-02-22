'use client';
import Link from 'next/link';
import { Card, Image } from '@nextui-org/react';
import { categories } from '@/config/site';

export default function Categories() {
  return (
    <Card className="flex flex-row w-full py-2 justify-around items-center">
      {categories?.map((category) => (
        <Link key={category.id} href={`/products?category=${category.path}`}>
          <div
            className="flex flex-col items-center cursor-pointer"
            key={category.id}
          >
            <Image width={50} alt={category.name} src={category.banner_url} />
            <p className="text-md mt-2 hover:text-yellow-400">
              {category.name}
            </p>
          </div>
        </Link>
      ))}
    </Card>
  );
}
