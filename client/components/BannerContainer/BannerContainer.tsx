import React from 'react';
import BannerCard from './BannerCard/BannerCard';

type Props = {};

const BannerContainer = () => {
  return (
    <div className="flex flex-row">
      <BannerCard
        banner_url={
          'https://rukminim1.flixcart.com/fk-p-flap/520/280/image/338a93428849c594.jpg?q=20 '
        }
      />
      <BannerCard
        banner_url={
          'https://rukminim1.flixcart.com/fk-p-flap/520/280/image/6ae6496d87b04fbc.jpg?q=20'
        }
      />
      <BannerCard
        banner_url={
          'https://rukminim1.flixcart.com/fk-p-flap/520/280/image/4ac3a2dbba18d5a9.jpg?q=20'
        }
      />
    </div>
  );
};

export default BannerContainer;
