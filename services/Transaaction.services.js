import { toast } from "react-toastify";
import api from "./api";
import { responseErrorHandler } from "../utils/hooks/responseErrorHandler";

const getUserTransactions = async () => {
    try{
        const response = await api.get(`/transaction/user-transactions` )

        if (response.status === 200){
            return response;
        }

        toast.error(response.error.message)
        return false;
    } catch(error) {
        let ErrorText = responseErrorHandler(error)
        toast.error(ErrorText)
        return false;
    }
};

const TransactionService = {
    getUserTransactions
};

export default TransactionService;