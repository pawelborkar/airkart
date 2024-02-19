'use client';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { IProductDetails } from '@/interfaces';
import CartItemCard from '@/components/CartItemCard/CartItemCard';

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  return (
    <div className="flex flex-row flex-wrap justify-around items-center w-full h-full ">
      {
        // @ts-ignore next-line
        cartItems.map((cartItem: IProductDetails) => {
          return <CartItemCard key={cartItem?.id} {...cartItem} />;
        })
      }
    </div>
  );
};

export default Cart;
