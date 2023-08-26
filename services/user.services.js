// import { toast } from "react-toastify";
import api from "./api";
import  {responseErrorHandler}  from "../utils/hooks/errorHandler";

import { toast } from "react-toastify";


const getPublicContent = async () => {
  try {
    const { data } = await api.get("/test/all");
    console.log("response getpublic", data);
    if (data.status === 200) {
      return data;
    }
    toast.error(data.error.message);
    return false;
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    return false;
  }
};

const getAllUsers = async () => {
  try {
    const response = await api.get("/user/users-all");

    // console.log("response sub", response);
    if (response.status === 200) {
      return response.data;
    }

    toast.error(response.error.message);
    return false;
  } catch (error) {
    let ErrorText = responseErrorHandler(error)
      toast.error(ErrorText)
    return false;
  }
};

const getAllVendors = async () => {
  try {
    const response = await api.get("/vendor/get-vendors");

    console.log("response sub", response);
    if (response.status === 200) {
      return response.data;
    }

    toast.error(response.error.message);
    return false;
  } catch (error) {
    let ErrorText = responseErrorHandler(error)
      toast.error(ErrorText)
    return false;
  }
};

// const getModeratorBoard = async () => {
//   try {
//     const { data } = await api.get("/test/mod");
//     console.log("response modboard", data);
//     if (data.status === 200) {
//       return data;
//     }
//     toast.error(data.error.message);
//     return false;
//   } catch (error) {
//     console.log(error);
//     toast.error(error.message);
//     return false;
//   }
// };

const getAdminBoard = async () => {
  try {
    const { data } = await api.get("/test/admin");

    console.log("response adminboard", data);
    if (data.status === 200) {
      return data;
    }
    toast.error(data.error.message);
    return false;
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    return false;
  }
};

const updateUserAccount = async (data) => {
  try {
    const response = await api.post("/user/update/", data);

    // console.log("response sub", response);
    if (response.status === 200) {
      return response.data;
    }

    toast.error(response.error.message);
    return false;
  } catch (error) {
    let ErrorText = responseErrorHandler(error);
    toast.error(ErrorText);
    return false;
  }
};

const UserService = {
  getPublicContent,
  getAllUsers,
  // getModeratorBoard,
  getAdminBoard,
  getAllVendors,
  updateUserAccount,
};

export default UserService;
