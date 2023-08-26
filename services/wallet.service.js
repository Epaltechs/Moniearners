import api from "./api";

const getUserWallet = (userId) => {
  return api.get(`wallet/${userId}`);
};

const WalletService = {
    getUserWallet
};

export default WalletService;