import axios from 'axios';

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

export const getAllProducts = async () => {
  try {
    const response = await API.get('/products');
    return response.data;
  } catch (error) {
    console.error(`Error fetching categores: ${error}`);
    throw error;
  }
};
