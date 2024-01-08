import { ThemeProviderProps } from 'next-themes/dist/types';
export interface ICustomNextUIProviderProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export interface IProvider {
  children: React.ReactNode;
}

export interface IProductDetails {
  id: string;
  name: string;
  price: string;
  imageURL: string;
  description?: Array<string>;
}

export interface FormData {
  productName: string;
  price: number;
  description?: string;
}

export interface AddProductFormProps {
  onSubmit: SubmitHandler<FormData>;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}
