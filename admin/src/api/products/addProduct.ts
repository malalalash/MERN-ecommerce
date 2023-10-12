import baseURL from "../../utils/baseURL";
import { FormDataType } from "../../types";
export const addProduct = async (formData: FormDataType) => {
  try {
    const response = await fetch(`${baseURL}/product`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(formData),
      credentials: "include",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
