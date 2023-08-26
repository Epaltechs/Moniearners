import { toast } from 'react-toastify';
import AuthService from './auth.service';
import Cookie from "js-cookie";
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';

const getLocalRefreshToken = () => {
    try {
        // const user = JSON.parse(.getItem("user"));
        // return user?.refreshToken;localStorage
        const user = Cookie.get("accessToken")
        return user
    } catch (error) {
        toast.error(error?.message)
        return false;
    }
  };
  
  const getLocalAccessToken = () => {
    try {
        // const user = JSON.parse(localStorage.getItem("user"));
        // return user?.accessToken;
        const user = Cookie.get("accessToken")
        return user
    } catch (error) {
        toast.error(error?.message)
        return false;
    }
  };
  
  const updateLocalAccessToken = (token) => {
        try {
            // let user = JSON.parse(localStorage.getItem("user"));
            // user.accessToken = token;
            const accessTokenDecoded = jwtDecode(token.accessToken)
            const refreshTokenDecoded = jwtDecode(token.refreshToken)
            const accessTokenExpiry = new Date(accessTokenDecoded.exp * 1000)
            const refreshTokenExpiry = new Date(refreshTokenDecoded.exp * 1000)

            const accessTokenCokieOptions = {
              httpOnly: false,
              expires: accessTokenExpiry,
              path: "/",
              sameSite: "strict",
              secure: process.env.NODE_ENV === "production",
            };

            const refreshTokenCokieOptions = {
              httpOnly: false,
              expires: accessTokenExpiry,
              path: "/",
              sameSite: "strict",
              secure: process.env.NODE_ENV === "production",
            };


            Cookie.set("accessToken", token.accessToken, accessTokenCokieOptions);
            Cookie.set("refreshToken", token.refreshToken, refreshTokenCokieOptions);

            // localStorage.setItem("user", JSON.stringify(user));
        } catch (error) {
            toast.error(error?.message)
            return false;
        }
  };
  
  const getUser = () => {
    try {
        if (typeof window !== 'undefined') {
            // let cokieuser = Cookie.get('user')
            // console.log('cookie user', cokieuser)
            // return JSON.parse(localStorage.getItem("user"));
            return Cookies.get("accessToken")
        } else return false;
    } catch (error) {
        const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
            console.log(error)
        toast.error(error?.message)
    }
    
  };
  
  const setUser =  (user) => {
    try {

      const accessTokenDecoded = jwtDecode(user.accessToken)
      const refreshTokenDecoded = jwtDecode(user.refreshToken)
      const accessTokenExpiry = new Date(accessTokenDecoded.exp * 1000)
      const refreshTokenExpiry = new Date(refreshTokenDecoded.exp * 1000)
      const accessTokenCokieOptions = {
        httpOnly: false,
        expires: accessTokenExpiry,
        path: "/",
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
      };

      const refreshTokenCokieOptions = {
        httpOnly: false,
        expires: refreshTokenExpiry,
        path: "/",
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
      };
      // Cookies.set("accessToken",user.accessToken, {expires: accessTokenExpireDate})
      // Cookies.set("refreshToken",response?.data?.refreshToken,{expires: refreshTokenExpireDate})
      //   localStorage.setItem("user", JSON.stringify(user));
        Cookie.set("accessToken", user.accessToken, accessTokenCokieOptions);
        Cookie.set("refreshToken", user.refreshToken, refreshTokenCokieOptions);
    } catch (error) {
        const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        toast.error(error?.message)
        return false;
    }
  };

  const getExpiryDate = async (token) => {
    // const token = getUser();
    // console.log("expiry token", token)

    const decodedUser = jwtDecode(token.refreshToken)

    // console.log("decodedUser", decodedUser)
    // console.log("decodedUser exp", new Date(decodedUser.exp * 1000))
    return new Date(decodedUser.exp * 1000)
  }

  const getIsExpired = () => {
    return new Date() > getExpiryDate()
  }
  
  const removeUser = () => {
    try {
        // localStorage.removeItem("user");
        // Cookie.remove('user')

        Cookies.remove('accessToken', { path: '/' })
        Cookies.remove('refreshToken', {path: '/'})
    } catch (error) {
        const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        toast.error(error?.message)
        return false;
    }
  };
  
  const TokenService = {
    getLocalRefreshToken,
    getLocalAccessToken,
    updateLocalAccessToken,
    getUser,
    setUser,
    removeUser,
    getIsExpired,
    getExpiryDate
  };
  
  export default TokenService;