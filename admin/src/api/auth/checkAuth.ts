import baseURL from "../../utils/baseURL";

export const checkAuth = async () => {
  try {
    const response = await fetch(`${baseURL}/user/me`, {
      method: "POST",
      credentials: "include",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
