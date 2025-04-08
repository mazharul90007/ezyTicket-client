import axios from "axios";

export const saveUserInformation = async (user) => {
  axios.post(`http://localhost:3000/users/${user?.email}`, {
    name: user?.displayName,
    email: user?.email,
    status: "",
    phone: "",
    address: "",
    role: "user",
  });
};
