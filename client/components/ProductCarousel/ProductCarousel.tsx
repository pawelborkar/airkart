'use client';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProductCard from '../ProductCard/ProductCard';
import { Card } from '@nextui-org/react';
const ProductCarousel = () => {
  const products = [
    {
      _id: '6538c9cc0592475ff6457ede',
      name: 'Google Pixel 7a',
      category: 'electronics',
      price: 50999,
      description:
        'Immerse yourself in stunning 4K clarity with this smart TV. Stream your favorite content and enjoy vivid colors and sharp images.',
      createdAt: '2023-10-25T07:54:52.611Z',
      slug: '55-inch-4k-ultra-hd-tv',
      __v: 0,
      id: '6538c9cc0592475ff6457ede',
      image_url:
        'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      _id: '6538c9cc0592475ff6457edc',
      name: 'Motorola Edge 40',
      category: 'electronics',
      price: 26999,
      description:
        'Stay connected with the Smartwatch X1. It features a vibrant OLED display, heart rate monitoring, and Bluetooth connectivity.',
      createdAt: '2023-10-25T07:54:52.609Z',
      slug: 'smartwatch-x1',
      __v: 0,
      id: '6538c9cc0592475ff6457edc',
      image_url:
        'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/a/k/-original-imagqx45wnzbh25s.jpeg?q=70',
    },
    {
      _id: '6538c9cc0792475ff6457edc',
      name: 'Nothing Phone 2',
      category: 'electronics',
      price: 40999,
      description:
        'Stay connected with the Smartwatch X1. It features a vibrant OLED display, heart rate monitoring, and Bluetooth connectivity.',
      createdAt: '2023-10-25T07:54:52.609Z',
      slug: 'smartwatch-x1',
      __v: 0,
      id: '6538c9cc0592475ff6457edc',
      image_url:
        'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/s/b/-original-imagrdefh2xgenzz.jpeg?q=70',
    },
    {
      _id: 'a6538c9cc0792475ff6457edc',
      name: 'Nothing Phone 2',
      category: 'electronics',
      price: 40999,
      description:
        'Stay connected with the Smartwatch X1. It features a vibrant OLED display, heart rate monitoring, and Bluetooth connectivity.',
      createdAt: '2023-10-25T07:54:52.609Z',
      slug: 'smartwatch-x1',
      __v: 0,
      id: '6538c9cc0592475ff6457edc',
      image_url:
        'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/s/b/-original-imagrdefh2xgenzz.jpeg?q=70',
    },
    {
      _id: '65w38c9cc0792475ff6457edc',
      name: 'Nothing Phone 2',
      category: 'electronics',
      price: 40999,
      description:
        'Stay connected with the Smartwatch X1. It features a vibrant OLED display, heart rate monitoring, and Bluetooth connectivity.',
      createdAt: '2023-10-25T07:54:52.609Z',
      slug: 'smartwatch-x1',
      __v: 0,
      id: '6538c9cc0592475ff6457edc',
      image_url:
        'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/s/b/-original-imagrdefh2xgenzz.jpeg?q=70',
    },
    {
      _id: '16538c9cc0792475ff6457edc',
      name: 'Nothing Phone 2',
      category: 'electronics',
      price: 40999,
      description:
        'Stay connected with the Smartwatch X1. It features a vibrant OLED display, heart rate monitoring, and Bluetooth connectivity.',
      createdAt: '2023-10-25T07:54:52.609Z',
      slug: 'smartwatch-x1',
      __v: 0,
      id: '6538c9cc0592475ff6457edc',
      image_url:
        'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/s/b/-original-imagrdefh2xgenzz.jpeg?q=70',
    },
    {
      _id: '65398c9cc0792475ff6457edc',
      name: 'Nothing Phone 2',
      category: 'electronics',
      price: 40999,
      description:
        'Stay connected with the Smartwatch X1. It features a vibrant OLED display, heart rate monitoring, and Bluetooth connectivity.',
      createdAt: '2023-10-25T07:54:52.609Z',
      slug: 'smartwatch-x1',
      __v: 0,
      id: '6538c9cc0592475ff6457edc',
      image_url:
        'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/s/b/-original-imagrdefh2xgenzz.jpeg?q=70',
    },
    {
      _id: '6538c9cc0792475ff6457edc',
      name: 'Nothing Phone 2',
      category: 'electronics',
      price: 40999,
      description:
        'Stay connected with the Smartwatch X1. It features a vibrant OLED display, heart rate monitoring, and Bluetooth connectivity.',
      createdAt: '2023-10-25T07:54:52.609Z',
      slug: 'smartwatch-x1',
      __v: 0,
      id: '6538c9cc0592475ff6457edc',
      image_url:
        'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/s/b/-original-imagrdefh2xgenzz.jpeg?q=70',
    },
  ];
  return (
    <Carousel showArrows autoPlay infiniteLoop showStatus={false} showThumbs={false}>
      {products.map((product) => {
        return (
          <Card className="flex flex-row" key={product.id}>
            {products.map((prod) => {
              return (
                <ProductCard
                  key={prod.id}
                  name={prod.name}
                  price={prod.price.toString()}
                  image_url={prod.image_url}
                />
              );
            })}
          </Card>
        );
      })}
    </Carousel>
  );
};

export default ProductCarousel;
