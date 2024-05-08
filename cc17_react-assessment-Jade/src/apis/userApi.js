import axios from "./axios.config";

export const getUserById = async (data) => {
  let attempt = { email: data.emailOrPhone, password: data.password };
  console.log(attempt);
  return await axios.post(
    "https://cc17-assessment-api.onrender.com/auth/login",
    attempt
  );
};
