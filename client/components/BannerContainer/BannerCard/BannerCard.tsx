'use client';
import React from 'react';
import { Card, CardBody, Image } from '@nextui-org/react';
type BanerCardTypes = {
  banner_url: String;
};
const BannerCard = ({ banner_url }: BanerCardTypes) => {
  return (
    <Card className="m-1 rounded-none	">
      <Image
        alt={banner_url.toString()}
        src={banner_url.toString()}
        removeWrapper
      />
    </Card>
  );
};
export default BannerCard;
