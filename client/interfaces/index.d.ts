export interface IResultCard {
  id: string;
  productName: string;
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
