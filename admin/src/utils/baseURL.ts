const baseURL =
  import.meta.env.NODE_ENV === "production"
    ? import.meta.env.BASE_URL
    : "http://localhost:3001";

export default baseURL;
