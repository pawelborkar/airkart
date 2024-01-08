'use client';
import ResultCard from '@/components/ResultCard/ResultCard';
import { IProductDetails } from '@/interfaces';
import { RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  console.log('cartItems', cartItems);
  return (
    <>
      {cartItems.map((cartItem: IProductDetails) => (
        <ResultCard key={cartItem?.id} {...cartItem} />
      ))}
    </>
  );
};

export default Cart;
