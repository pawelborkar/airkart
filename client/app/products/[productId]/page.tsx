'use client';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { Button, Card, Image, Spinner } from '@nextui-org/react';
import { ShoppingCart, Zap } from 'lucide-react';
import { getProduct } from '@/services/axios';
import { IProductDetails, IProductParams, IProductsResult } from '@/interfaces';
import ProductCarousel from '@/components/ProductCarousel/ProductCarousel';

const ProductDetails = ({ params }: IProductParams) => {
  const isInCart = true;

  const productId = params.productId;
  const { data, isError, isLoading } = useQuery({
    queryKey: ['productDetails', productId],
    queryFn: getProduct,
  });

  if (isLoading) {
    return (
      <Spinner
        className="flex w-full h-screen justify-center items-center"
        label={'Loading...'}
        color="warning"
      />
    );
  }

  if (isError) {
    return toast.error('Unable to fetch product details.', {
      style: {
        border: '1px solid #c1c1c142',
        borderRadius: '12px',
        background: 'transparent',
        color: '#f73d69',
      },
    });
  }
  const product = data?.products;
  const {
    name,
    price,
    description,
    brand,
    category,
    countryOfOrigin,
    stock,
    imageURLs,
  } = product;
  return (
    <>
      <Card className="flex flex-col md:flex-row p-4 m-4 items-center justify-evenly">
        <div className="w-full md:h-[60vh] flex justify-center items-center mb-4 md:mb-0">
          <Image
            height={680}
            width={680}
            isZoomed
            className="object-cover"
            aria-label={name}
            src={imageURLs[0]}
          />
        </div>
        <div className="w-full h-[42vh] md:w-2/4 flex flex-col justify-evenly md:m-4 p-4">
          <div className="h-1/5">
            <p className="text-3xl">&#8377; {price}</p>
          </div>
          <div className="text-xl mt-2 mb-4 h-2/5 ">{description}</div>
          <div className="flex flex-col justify-center border-1 items-center md:w-full md:h-24 mt-6 p-2">
            {stock > 0 ? (
              <>
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
              </>
            ) : (
              <Button
                radius="full"
                fullWidth
                size="lg"
                color="warning"
                variant="faded"
              >
                Out of Stock
              </Button>
            )}
          </div>
        </div>
      </Card>
      <div>
        <p className="text-2xl">People also bought </p>
      </div>
      <ProductCarousel category={category.toString()} />
    </>
  );
};

export default ProductDetails;
