'use client';
import { Image } from '@nextui-org/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// This is for the development purpose only and the data wil come from the backend
const bannerImageURL = [
  'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/56b1db1dc4feb1c2.jpg?q=20',
  'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/039ec2390c9d9c67.jpeg?q=20',
  'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1d106026d4daf695.jpg?q=20',
  'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2c7142dcb842dc4b.jpeg?q=20',
  'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b8e07ff39439d998.jpg?q=20',
  'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/48d3b0ee90e0e632.jpeg?q=20',
  'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/34fcbf942d20fe6b.jpg?q=20',
  'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/e5abec1836e9fcd7.jpeg?q=20',
  'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2d46d868f6692aeb.jpg?q=20',
  'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/6f431c55d08a768a.jpg?q=20',
  'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/a199943586459434.jpg?q=20',
];

const Banner = () => {
  return (
    <Carousel showArrows autoPlay infiniteLoop showThumbs={false} showStatus={false}>
      {bannerImageURL.map((image, index) => (
        <div key={index}>
          <Image width={'100%'} height={600} src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
