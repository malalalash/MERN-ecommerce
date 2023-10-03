import baseURL from "../../utils/baseURL";

export const deleteProduct = async (id: string) => {
  try {
    const response = await fetch(`${baseURL}/product/${id}`, {
      method: "DELETE",
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
