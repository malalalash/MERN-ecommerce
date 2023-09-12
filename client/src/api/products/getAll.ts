import baseURL from "../../utils/baseURL";

export const getAll = async () => {
  try {
    const response = await fetch(`${baseURL}/products`, {
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
