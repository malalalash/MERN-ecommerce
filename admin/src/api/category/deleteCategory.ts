import baseURL from "../../utils/baseURL";

export const deleteCategory = async (id: string) => {
  try {
    const response = await fetch(`${baseURL}/category/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json",
      },
      credentials: "include",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
