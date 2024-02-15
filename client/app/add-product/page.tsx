'use client';
import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button, Input, Textarea } from '@nextui-org/react';
import { IAddProductFormProps, IFileWithPreview } from '@/interfaces';
import { productSchema } from '@/schemas/productSchema';

type ProductFormData = {
  name: string;
  brand: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  tags: string;
  countryOfOrigin: string;
  images: FileList | null;
};

const AddProductForm: React.FC<IAddProductFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    brand: '',
    description: '',
    category: '',
    price: 0,
    stock: 0,
    tags: '',
    countryOfOrigin: '',
    images: null,
  });
  const [errors, setErrors] = useState<Partial<ProductFormData>>({});
  const [files, setFiles] = useState<IFileWithPreview[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles: File[]) => {
      const filesWithPreview: IFileWithPreview[] = acceptedFiles.map(
        (file) => ({
          ...file,
          preview: URL.createObjectURL(file),
        })
      );
      setFiles(filesWithPreview);
      setFormData((prevState) => ({
        ...prevState,
        images: acceptedFiles,
      }));
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = async () => {
    try {
      const validationResult = productSchema.safeParse(formData);
      if (validationResult.success) {
        const formDataToSubmit = new FormData();
        for (const key in formData) {
          formDataToSubmit.append(key, formData[key]);
        }
        formDataToSubmit.delete('images'); // Remove images from form data
        if (formData.images) {
          formData.images.forEach((file) => {
            formDataToSubmit.append('images', file);
          });
        }
        await onSubmit(formDataToSubmit);
        console.log('Product added successfully!');
      } else {
        setErrors(
          validationResult.error.errors.reduce((acc, curr) => {
            const fieldName = curr.path[0] as keyof ProductFormData;
            acc[fieldName] = curr.message;
            return acc;
          }, {} as Partial<ProductFormData>)
        );
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  useEffect(() => {
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  return (
    <div className="flex justify-center items-center w-full h-[96vh]">
      <form className="flex flex-col h-3/4 justify-between items-center">
        <Input
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Product Name"
        />
        {errors.name && <span>{errors.name}</span>}
        <Input
          name="brand"
          value={formData.brand}
          onChange={handleInputChange}
          placeholder="Brand Name"
        />
        {errors.brand && <span>{errors.brand}</span>}
        <Textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Product Description"
        />
        {errors.description && <span>{errors.description}</span>}
        <Input
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          placeholder="Category"
        />
        {errors.category && <span>{errors.category}</span>}
        <Input
          name="price"
          type="number"
          value={formData.price}
          onChange={handleInputChange}
          placeholder="Price"
        />
        {errors.price && <span>{errors.price}</span>}
        <Input
          name="stock"
          type="number"
          value={formData.stock}
          onChange={handleInputChange}
          placeholder="Stock"
        />
        {errors.stock && <span>{errors.stock}</span>}
        <Input
          name="tags"
          value={formData.tags}
          onChange={handleInputChange}
          placeholder="Tags"
        />
        {errors.tags && <span>{errors.tags}</span>}
        <Input
          name="countryOfOrigin"
          value={formData.countryOfOrigin}
          onChange={handleInputChange}
          placeholder="Country of Origin"
        />
        {errors.countryOfOrigin && <span>{errors.countryOfOrigin}</span>}
        <div>
          <section className="flex w-auto h-9 border-gray-800">
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <p>Drag and drop some files here, or click to select files</p>
            </div>
          </section>
        </div>
        <Button color="primary" type="button" onClick={handleFormSubmit}>
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default AddProductForm;
