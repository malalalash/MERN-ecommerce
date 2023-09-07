import baseURL from "../../utils/baseURL";

export const getFeatured = async () => {
  try {
    const response = await fetch(`${baseURL}/product/featured`, {
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
