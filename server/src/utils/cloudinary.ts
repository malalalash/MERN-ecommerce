import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export const uploadImages = async (images: string[]) => {
  const options = {
    use_filename: true,
    unique_filename: true,
    overwrite: true,
  };

  try {
    const result = await Promise.all(
      images.map((image) => cloudinary.uploader.upload(image, options))
    );
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const deleteImages = async (images: string[]) => {
  try {
    const result = await Promise.all(
      images.map((image) => cloudinary.uploader.destroy(image), {
        resource_type: "image",
      })
    );
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const resizeImage = (
  public_id: string,
  w: number = 750,
  h: number = 750
) => {
  const url = cloudinary.url(public_id, {
    width: w,
    height: h,
    crop: "fill",
    gravity: "center",
    quality: "auto",
  });
  return url;
};
