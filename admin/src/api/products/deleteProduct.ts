import baseURL from "../../utils/baseURL";

export const deleteProduct = async (id: string, public_string: string[]) => {
  try {
    const response = await fetch(`${baseURL}/product/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        public_string,
      }),
      credentials: "include",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
