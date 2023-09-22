import baseURL from "../../utils/baseURL";

export const getCategories = async () => {
  try {
    const response = await fetch(`${baseURL}/category/all`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
