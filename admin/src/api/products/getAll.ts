import baseURL from "../../utils/baseURL";

export const getAll = async (query: string, price: number) => {
  try {
    const queryParams = new URLSearchParams({
      sort: query,
      price: price.toString(),
    });
    const url = `${baseURL}/products?${queryParams}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
