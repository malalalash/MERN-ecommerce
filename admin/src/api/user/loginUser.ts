import { UserFormType } from "../../types";
import baseURL from "../../utils/baseURL";

export const loginUser = async (formData: UserFormType) => {
  try {
    const response = await fetch(`${baseURL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
