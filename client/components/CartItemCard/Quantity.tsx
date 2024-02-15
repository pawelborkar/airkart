import React, { useState } from 'react';
import { Button } from '@nextui-org/react';

interface QuantityComponentProps {
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
}

const QuantityComponent: React.FC<QuantityComponentProps> = ({
  quantity,
  onQuantityChange,
}) => {
  const handleIncrement = () => {
    if (quantity < 10) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div>
      <Button onClick={handleDecrement}>-</Button>
      <span>{quantity}</span>
      <Button onClick={handleIncrement}>+</Button>
    </div>
  );
};

export default QuantityComponent;
