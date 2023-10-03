import baseURL from "../../utils/baseURL";
import { FormDataType } from "../../types";
export const updateProduct = async (formData: FormDataType, id: string) => {
  try {
    const response = await fetch(`${baseURL}/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
