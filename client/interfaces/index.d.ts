import { ThemeProviderProps } from 'next-themes/dist/types';
export interface ICustomNextUIProviderProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export interface IReactQueryProvidersProps {
  children: React.ReactNode;
}

export interface IResultCard {
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
