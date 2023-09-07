import baseURL from "../../utils/baseURL";

export const getProduct = async (slug: string) => {
  try {
    const response = await fetch(`${baseURL}/product/${slug}`, {
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
