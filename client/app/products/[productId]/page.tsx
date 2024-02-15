'use client';
import { Button, Card, Image } from '@nextui-org/react';
import { ShoppingCart, Zap } from 'lucide-react';
import ProductCarousel from '@/components/ProductCarousel/ProductCarousel';
const product = {
  id: '1',
  productName: 'College Bag',
  imageURL:
    'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  price: '4,399',
};
const ProductDetails = () => {
  const { id, productName, imageURL, price } = product;
  const isInCart = true;
  return (
    <>
      <Card className="flex flex-row p-4 mb-8 justify-evenly">
        <div className="w-4/6 h-[60vh]">
          <Image
            height={480}
            width={540}
            isZoomed
            className="object-fit"
            aria-label={productName}
            src={imageURL}
          />
        </div>
        <div className="w-2/6 m-6">
          <div className="h-1/5">
            <p className="text-3xl">{productName}</p>
            <div>
              <p className="text-2xl mt-"> &#8377;{price}</p>
            </div>
          </div>
          <div className="mt-4 h-2/5">
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
          <div className="flex flex-col gap-5 justify-center items-center">
            <Button
              radius="full"
              fullWidth
              size="lg"
              color="warning"
              startContent={<ShoppingCart />}
            >
              {isInCart ? 'Remove from cart' : 'Add to Cart'}
            </Button>
            <Button
              startContent={<Zap />}
              radius="full"
              className="bg-gradient-to-tr from-pink-500 to-orange-500 text-white shadow-lg"
              fullWidth
              size="lg"
            >
              {isInCart ? 'Go to cart' : 'Buy Now'}
            </Button>
          </div>
        </div>
      </Card>
      <ProductCarousel />
      <ProductCarousel />
    </>
  );
};

export default ProductDetails;
