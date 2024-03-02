import axios from 'axios';

const URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const API = axios.create({
  baseURL: `${URL}/api/${API_VERSION}`,
});

export const getCategories = async () => {
  try {
    const response = await API.get('/categories');
    return response.data;
  } catch (error) {
    console.error(`Error fetching categores: ${error}`);
    throw error;
  }
};

export const getProduct = async ({ queryKey }: any) => {
  try {
    const [_, productId] = queryKey;
    const response = await API.get(`products/${productId}`);
    return response.data;
  } catch (error) {
    console.error(`Error while getting the product details: ${error}`);
    throw error;
  }
};

export const getProductsByCategory = async ({ queryKey }: any) => {
  const [_, category] = queryKey;
  try {
    const response = await API.get(`/products?category=${category}`);
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
