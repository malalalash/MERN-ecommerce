import baseURL from "../../utils/baseURL";

export const getAll = async (query: string = "newest") => {
  try {
    const response = await fetch(`${baseURL}/products?sort=${query}`, {
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
