import { TQueryKey } from '@/types';
import axios from 'axios';
import { CloudCog } from 'lucide-react';

const URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const API = axios.create({
  baseURL: `${URL}/api/${API_VERSION}`,
});

export const getAllCategories = async () => {
  try {
    const response = await API.get('/categories');
    return response.data;
  } catch (error) {
    console.error(`Error fetching categores: ${error}`);
    throw error;
  }
};

export const getAllProducts = async ({ queryKey }: any) => {
  let [_, category] = queryKey;
  console.log('CALL:::', queryKey, 'cat:::', category);
  try {
    const response = await API.get(`/products?category=${category}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching categores: ${error}`);
    throw error;
  }
};

export const addProduct = async (formData: any) => {
  const response = await axios.post('/api/products', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};
