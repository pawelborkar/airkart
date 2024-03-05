'use client';
import React from 'react';
import { Card, Image } from '@nextui-org/react';

const OfferBanner = () => {
  return (
    <Card className="my-4 h-[10vh] md:h-full">
      <Image
        alt="offer-banner"
        width={'100%'}
        className="scale-125 md:scale-100 h-[10vh]"
        src="https://rukminim1.flixcart.com/fk-p-flap/1600/140/image/e3fab105530a540f.jpg?q=20"
      />
    </Card>
  );
};
export default OfferBanner;
