'use client';
import { IFileWithPreview } from '@/interfaces';
import { Image } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export const PreviewImage = (files: any) => {
  console.log('Files::::', files);
  const thumbs = files.map((file: IFileWithPreview) => (
    <div
      className="inline-flex rounded-sm border-gray-300 mb-2 mr-2 w-24 h-24 p-1 "
      key={file.name}
    >
      <div className="flex min-w-0 overflow-hidden">
        <Image
          src={file.preview}
          alt="Product Image Preview"
          width="auto"
          height="100%"
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file?.preview);
          }}
        />
      </div>
    </div>
  ));
  return <div>{thumbs}</div>;
};

export default PreviewImage;
