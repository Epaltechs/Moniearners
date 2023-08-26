import React, { use, useEffect, useState } from "react";
import { SideBar } from "../../components/dashboard/Sidebar/SideBar";
import TopNav from "../../components/dashboard/TopNav/TopNav";
import styles from "../../styles/dashboard/AffiliateMarketPlace.module.css";
import darkStyles from "../../styles/dashboard/darkAfiiliate.module.css";


import useWindowDimensions from "../../utils/hooks/useWindowDimension";

import filter from "../../public/icons/Group.svg";

import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";

import MarketPlaceTable from "../../components/dashboard/Table/MarketPlaceTable";
import { Button } from "@mui/material";
import ActionButton from "../../components/dashboard/ReusableButtons/ActionButton";
import axios from "axios";
import ProductService from "../../services/product.services";
import { toast } from "react-toastify";
import PaymentService from "../../services/payment.service";
import AuthService from "../../services/auth.service";
import { isEmpty } from "lodash";
import Link from "next/link";

const AffiliateMarketPlace = ({navigate, darkMode}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showFilterPeriod, setShowFilterPeriod] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [subscription, setSubscription] = useState({});
  const currentUser = AuthService.getCurrentUser();

  let newStyle = darkMode ? darkStyles :  styles

  useEffect(()=> {
    if(darkMode) newStyle = darkStyles
    else newStyle = styles
  },[darkMode])

  // const allProducts = use(getProducts())

  const createNewProduct = () => {
    navigate('/dashboard/new-product');
  };

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        const response = await ProductService.getAppProducts();
        if (response.status === 200) {
          let prodData = response.data.result.map((item) => {
            let data = {
              productName: item.title,
              productCode: item._id,
              price: item.cost,
              commission: item.commission,
              link: `/product/${item._id}/${currentUser.role === 'admin' ? 'admin' : currentUser._id}`,
              vendor: item.authorName,
              type: item.type,
            };
            return data;
          });
          setProducts(prodData);
        }
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        console.log(error);
        toast.error(error.message);
      }
    }

    async function getSubscription() {
      if (currentUser) {
        const res = await PaymentService.getActiveSubscription(
          currentUser._id,
          { userId: currentUser._id }
        );
        setSubscription({ ...res });
      }
    }
    getSubscription();
    getProducts();
  }, []);

  return (
    <>
      <div className={newStyle.pgTitles}>
        <h3>Affiliate Market Place</h3>
        <div className={newStyle.calContainer}>
          <div className={newStyle.calTitle}>
            <ActionButton
              icon={<AddIcon />}
              text="Create New Product"
              action={createNewProduct}
            />
          </div>
        </div>
      </div>

      <div className={`tableContainer`}>
        <div className={newStyle.mainTableArea}>
          <div className={`TableTopButtonContainer`}>
            { !isEmpty(subscription) && subscription.active ? (
              <>
                <div className={`tableTop`}>
                  <span>Recent Sales</span>
                  <div>
                    <Button
                      style={{
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: "12px",
                        lineHeight: "16px",
                        color: "#6B7280",
                        borderRadius: "12px",
                        border: "1px solid #D1D5DB",
                        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
                        borderRadius: "4px",
                        padding: "7px 11px 7px 9px",
                        gap: "8px",
                      }}
                    >
                      <Image src={filter} width="16px" height="16px" />
                      Filter
                    </Button>
                  </div>
                </div>

                <MarketPlaceTable data={!loading ? products : []} affiliate={ currentUser.role === 'affiliate' ? currentUser._id : false } />
              </>
            ) : (
              <>
                <div>
                  <h3>
                    Your Subscription has expired{" "}
                    <Link href="/payment-confirmation">
                      Click Here to Renew...
                    </Link>{" "}
                  </h3>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AffiliateMarketPlace;

