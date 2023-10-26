import baseURL from "../../utils/baseURL";

export const logoutUser = async () => {
  try {
    const response = await fetch(`${baseURL}/user/logout`, {
      method: "POST",
      credentials: "include",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
