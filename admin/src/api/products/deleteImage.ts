import baseURL from "../../utils/baseURL";

export const deleteImage = async (
  id: string,
  image_id: string,
  public_string: string
) => {
  try {
    const response = await fetch(`${baseURL}/product/image/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        public_string,
        image_id,
      }),
      credentials: "include",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
