'use client';
import Link from 'next/link';
import { Card, Image } from '@nextui-org/react';
import { categories } from '@/config/site';

export default function Categories() {
  return (
    <Card className="flex flex-row w-full py-2 justify-around items-center overflow-x-scroll md:overflow-hidden">
      {categories?.map((category) => (
        <Link key={category.id} href={`/products?category=${category.path}`}>
          <div className="flex flex-col items-center cursor-pointer w-10 md:w-16" key={category.id}>
            <Image alt={category.name} src={category.banner_url} />
            <p className="text-xs md:text-lg mt-2 hover:text-yellow-400">{category.name}</p>
          </div>
        </Link>
      ))}
    </Card>
  );
}
