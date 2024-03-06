'use client';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { Button, Card, Image, Spinner } from '@nextui-org/react';
import { ShoppingCart, Zap } from 'lucide-react';
import { getProduct } from '@/services/axios';
import { IProductDetails, IProductParams, IProductsResult } from '@/interfaces';
import ProductCarousel from '@/components/ProductCarousel/ProductCarousel';

const ProductDetails = ({ params }: IProductParams) => {
  const isInCart = false;

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
  const { name, price, description, brand, category, countryOfOrigin, stock, imageURLs } = product;
  return (
    <>
      <Card className="flex flex-col md:flex-row p-4 m-4 items-center justify-evenly">
        <div className="w-full md:h-2/6 flex justify-center items-center mb-4 md:mb-0">
          <Image
            height={680}
            width={680}
            isZoomed
            className="object-cover"
            aria-label={name}
            src={imageURLs[0]}
          />
        </div>
        <div className="w-full md:w-2/4 h-4/6  flex flex-col justify-around md:m-4 p-4">
          <div className="h-1/5">
            <p className="text-3xl py-2"> {name} </p>
            <p className="text-2xl text-green-500 font-medium">&#8377;{price}</p>
          </div>
          <div className="text-xl mt-2 mb-4 h-1/5">{description}</div>
          <div className="h-3/5 flex flex-col justify-evenly items-center md:w-full p-2">
            {stock > 0 ? (
              <div className="w-full">
                <div className="w-full mb-2">
                  <Button
                    radius="full"
                    fullWidth
                    size="lg"
                    color="warning"
                    startContent={<ShoppingCart />}
                  >
                    {isInCart ? 'Remove from cart' : 'Add to Cart'}
                  </Button>
                </div>

                <div>
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
            ) : (
              <Button radius="full" fullWidth size="lg" color="warning" variant="faded">
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
