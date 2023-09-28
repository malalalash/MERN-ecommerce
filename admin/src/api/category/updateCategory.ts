import baseURL from "../../utils/baseURL";

export const updateCategory = async ({
  id,
  name,
}: {
  id: string;
  name: string;
}) => {
  try {
    const response = await fetch(`${baseURL}/category/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
