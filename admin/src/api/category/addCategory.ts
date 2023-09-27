import { CategoryType } from "../../types";
import baseURL from "../../utils/baseURL";

export const addCategory = async (name: CategoryType) => {
  try {
    const response = await fetch(`${baseURL}/category/create`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(name),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
