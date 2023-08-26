import { toast } from "react-toastify";
import api from "./api";
import { responseErrorHandler } from "../utils/hooks/responseErrorHandler";

const verifyPayment = (referenceId, data) => {
    console.log("calling verifyPayment")
    return api.post(`/subscription/verify/${referenceId}`, data)
};

const getActiveSubscription = async (userId, data) => {
    try{
        const response = await api.get(`/subscription/getsubscription/${userId}`, data)

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
    
};

const PaymentService = {
    verifyPayment,
    getActiveSubscription
};

export default PaymentService;