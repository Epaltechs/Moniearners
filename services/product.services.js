import { toast } from "react-toastify";
import api from "./api";
import { responseErrorHandler } from "../utils/hooks/errorHandler";

const getAppProducts = () => {
  return api.get("/product/get-products");
}

const createNewProduct = async(payload) => {
    try{
      const response = await api.post(`/product/create`, payload)

      console.log("response sub", response)
      if (response.status === 200){
          return response.data;
      }
      

      toast.error(response.error.message)
      return false;
  } catch(error) {
      let ErrorText = responseErrorHandler(error)
      toast.error(ErrorText)

      return false;
  }
}

const getSingleProduct = async(productId) => {
  try{
    const response = await api.get(`/product/single-product/${productId}`)

    console.log("response sub", response)
    if (response.status === 200){
        return response.data;
    }

    toast.error(response.error.message)
    return false;
  } catch(error) {
    let ErrorText = responseErrorHandler(error)
    toast.error(ErrorText)
    return false;
  }
}

const ProductService = {
    getAppProducts,
    createNewProduct,
    getSingleProduct,
}

export default ProductService;