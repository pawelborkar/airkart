import ResultCard from '@/components/ResultCard/ResultCard';
import { IResultCard } from '@/interfaces';

const Cart = () => {
  const cart = [
    {
      id: '1',
      productName: 'College Bag',
      imageURL:
        'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: '4,399',
    },
    {
      id: '2',
      productName: ' Titan Watch for men',
      imageURL:
        'https://rukminim2.flixcart.com/image/612/612/xif0q/watch/k/d/k/-original-imagz4wvdj4wkqhm.jpeg?q=70',
      price: '2,399',
    },
    {
      id: '3',
      productName: ' Titan Watch for men',
      imageURL:
        'https://rukminim2.flixcart.com/image/612/612/xif0q/watch/k/d/k/-original-imagz4wvdj4wkqhm.jpeg?q=70',
      price: '2,399',
    },
  ];
  return (
    <>
      {cart.map((cartItem: IResultCard) => (
        <ResultCard key={cartItem?.id} {...cartItem} />
      ))}
    </>
  );
};

export default Cart;
