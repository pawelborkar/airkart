'use client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Image, Select, SelectItem } from '@nextui-org/react';
import { IProductDetails } from '@/interfaces';
import { addItem } from '@/store/cart/cartSlice';
import { RootState } from '@/store/store';
import { ShoppingCart, Zap } from 'lucide-react';

const ResultCard = (product: IProductDetails) => {
  const { name, imageURL, description, price } = product;
  //@ts-ignore next-line
  const descriptionBullets = description?.split('.');

  const [isInCart] = useState(false);

  const [value] = useState([1]);

  const dispatch = useDispatch();

  //@ts-ignore next-line
  const handleAddItem = () => dispatch(addItem(product));

  return (
    <Card className="flex flex-col rounded-t-3xl justify-between m-4 h-[496px] w-96 shadow-xl">
      <div className="flex flex-col justify-between w-full items-start">
        <div className="w-full  flex justify-start">
          <Image
            alt={name}
            removeWrapper
            className="w-full rounded-t-3xl rounded-b-none object-cover h-80 p-0 "
            src={
              'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
          />
        </div>
        <div className="p-4 flex flex-col justify-center items-center w-full h-full">
          <div className="flex flex-col justify-between items-start ">
            <p className="text-2xl font-bold">{name}</p>
            {/* <div> */}
            {/*   <li>{descriptionBullets[0]}</li> */}
            {/* </div> */}
            {isInCart && (
              <Select
                variant="flat"
                placeholder="Qty"
                label={value}
                defaultSelectedKeys={value}
                className="w-20"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                  <SelectItem key={item} textValue={value.toString()}>
                    {item}
                  </SelectItem>
                ))}
              </Select>
            )}
          </div>
          <div className="flex flex-col w-full h-32 justify-evenly items-center">
            <p className="text-2xl font-medium"> &#8377;{price}</p>
            <div className="w-full h-1/2 flex justify-around items-center">
              <Button
                radius="full"
                className="w-36 shadow-xl "
                size="md"
                color={isInCart ? 'danger' : 'warning'}
                startContent={<ShoppingCart />}
                onClick={handleAddItem}
              >
                {isInCart ? 'Remove' : 'Add to cart'}
              </Button>
              <Button
                startContent={<Zap />}
                radius="full"
                className="w-36 bg-gradient-to-tr from-pink-500 to-orange-500 text-white shadow-xl"
                size="md"
              >
                {isInCart ? 'Checkout' : 'Buy Now'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ResultCard;
