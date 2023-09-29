import baseURL from "../../utils/baseURL";

export const getProduct = async (id: string) => {
  try {
    const response = await fetch(`${baseURL}/product/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
