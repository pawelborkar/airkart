import { ThemeProviderProps } from 'next-themes/dist/types';

export interface ICustomNextUIProviderProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export interface IProvider {
  children: React.ReactNode;
}

export interface IProductID {
  productId: string;
}

export interface IProductParams {
  params: IProductID;
}

export interface IProductDetails {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  stock: number;
  countryOfOrigin?: string;
  tags?: Array<string>;
  imageURLs: Array<string>;
  description?: Array<string>;
  children?: React.ReactNode;
}

export interface IProductsData {
  data: IProductDetails[];
}

export interface IProductsResult {
  products?: IProductDetails[];
  isLoading?: boolean;
  isError?: boolean;
}
export interface ISearchParams {
  searchParams?: {
    category?: string;
  };
}
export interface ICategoryProps {
  category: string | ISearchParams;
}
export interface IAddNewProductFormData {
  productName: string;
  productDescription: string;
  productPrice: number;
  category: string;
}

export interface IAddProductFormProps {
  onSubmit: (data: ProductFormData) => void;
}

interface IFileWithPreview extends File {
  name: string;
  preview: string;
}

export interface ICartItemDetails {
  id: string;
  name: string;
  price: string;
  imageURL: string;
  description: string;
  quantity?: string;
  children: React.ReactNode;
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
