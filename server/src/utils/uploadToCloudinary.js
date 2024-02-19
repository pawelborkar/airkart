const uploadFiles = req.files.map(async (file) => {
  try {
    const { secure_url } = await cloudinary.uploader.upload(file.buffer);
    return secure_url;
  } catch (error) {
    console.error(`Error uploading file to Cloudinary: `, error);
    throw error;
  }
});

const imageURLs = await Promise.all(uploadFiles);

const uploadToCloudinary = async (fileBuffer) => {
  try {
    const { secure_url } = await cloudinary.uploader.upload(fileBuffer);
    return secure_url;
  } catch (error) {
    console.error(`Error uploading file to Cloudinary: `, error);
    throw error;
  }
};
