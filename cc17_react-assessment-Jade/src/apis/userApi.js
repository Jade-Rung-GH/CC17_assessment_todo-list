import axios from "./axios.config";

export const getUserById = async () => {
  return await axios.post(
    "https://cc17-assessment-api.onrender.com/auth/login"
  );
};
