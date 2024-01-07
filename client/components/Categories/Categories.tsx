'use client';
import { categories } from '@/config/site';
import { Card, Image } from '@nextui-org/react';
import Link from 'next/link';

export default function Categories() {
  return (
    <Card className="flex flex-row w-full h-28 justify-around items-center">
      {categories?.map((category) => (
        <Link key={category.id} href={`/${category.path}`}>
          <div
            className="flex flex-col items-center cursor-pointer"
            key={category.id}
          >
            <Image width={50} alt={category.name} src={category.banner_url} />
            <p className="text-md mt-2">{category.name}</p>
          </div>
        </Link>
      ))}
    </Card>
  );
}
