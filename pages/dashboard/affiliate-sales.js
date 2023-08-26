import React, { useState } from "react";
import { SideBar } from "../../components/dashboard/Sidebar/SideBar";
import TopNav from "../../components/dashboard/TopNav/TopNav";
import styles from "../../styles/dashboard/AffiliateMarketPlace.module.css";

import useWindowDimensions from "../../utils/hooks/useWindowDimension";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Image from "next/image";

import calendar from "../../public/icons/calendar.png";
import commission from "../../public/icons/commision.png";
import moneys from "../../public/icons/moneys.svg";
import sales from "../../public/icons/sales.png";
import wallet from "../../public/icons/wallet.png";
import chevron from "../../public/icons/Chevron.svg";
import filter from "../../public/icons/Group.svg";

import AddIcon from "@mui/icons-material/Add";

import StatsCard from "../../components/dashboard/Card/StatsCard";
import MarketPlaceTable from "../../components/dashboard/Table/MarketPlaceTable";
import { Button } from "@mui/material";
import ActionButton from "../../components/dashboard/ReusableButtons/ActionButton";

const data = [
  {
    productName: `The 7 Figure road Map (7FRM) `,
    productCode: "453555656",
    price: "N6,500.00",
    commission: "N20,000.00",
    vendor: "Esther Howard",
    link: "https://www.youtube.com/watch?v=efpOA91HaS0&list=RDMM&start_radio=1",
    type: "E - Book",
  },
  {
    productName: `The 7 Figure road Map (7FRM) `,
    productCode: "453555656",
    price: "N6,500.00",
    commission: "N20,000.00",
    vendor: "Esther Howard",
    link: "https://www.youtube.com/watch?v=efpOA91HaS0&list=RDMM&start_radio=1",
    type: "E - Book",
  },
  {
    productName: `The 7 Figure road Map (7FRM) `,
    productCode: "453555656",
    price: "N6,500.00",
    commission: "N20,000.00",
    vendor: "Esther Howard",
    link: "https://www.youtube.com/watch?v=efpOA91HaS0&list=RDMM&start_radio=1",
    type: "E - Book",
  },
  {
    productName: `The 7 Figure road Map (7FRM) `,
    productCode: "453555656",
    price: "N6,500.00",
    commission: "N20,000.00",
    vendor: "Esther Howard",
    link: "https://www.youtube.com/watch?v=efpOA91HaS0&list=RDMM&start_radio=1",
    type: "E - Book",
  },
  {
    productName: `The 7 Figure road Map (7FRM) `,
    productCode: "453555656",
    price: "N6,500.00",
    commission: "N20,000.00",
    vendor: "Esther Howard",
    link: "https://www.youtube.com/watch?v=efpOA91HaS0&list=RDMM&start_radio=1",
    type: "E - Book",
  },
  {
    productName: `The 7 Figure road Map (7FRM) `,
    productCode: "453555656",
    price: "N6,500.00",
    commission: "N20,000.00",
    vendor: "Esther Howard",
    link: "https://www.youtube.com/watch?v=efpOA91HaS0&list=RDMM&start_radio=1",
    type: "E - Book",
  },
  {
    productName: `The 7 Figure road Map (7FRM) `,
    productCode: "453555656",
    price: "N6,500.00",
    commission: "N20,000.00",
    vendor: "Esther Howard",
    link: "https://www.youtube.com/watch?v=efpOA91HaS0&list=RDMM&start_radio=1",
    type: "E - Book",
  },
  {
    productName: `The 7 Figure road Map (7FRM) `,
    productCode: "453555656",
    price: "N6,500.00",
    commission: "N20,000.00",
    vendor: "Esther Howard",
    link: "https://www.youtube.com/watch?v=efpOA91HaS0&list=RDMM&start_radio=1",
    type: "E - Book",
  },
  {
    productName: `The 7 Figure road Map (7FRM) `,
    productCode: "453555656",
    price: "N6,500.00",
    commission: "N20,000.00",
    vendor: "Esther Howard",
    link: "https://www.youtube.com/watch?v=efpOA91HaS0&list=RDMM&start_radio=1",
    type: "E - Book",
  },
  {
    productName: `The 7 Figure road Map (7FRM) `,
    productCode: "453555656",
    price: "N6,500.00",
    commission: "N20,000.00",
    vendor: "Esther Howard",
    link: "https://www.youtube.com/watch?v=efpOA91HaS0&list=RDMM&start_radio=1",
    type: "E - Book",
  },
  {
    productName: `The 7 Figure road Map (7FRM) `,
    productCode: "453555656",
    price: "N6,500.00",
    commission: "N20,000.00",
    vendor: "Esther Howard",
    link: "https://www.youtube.com/watch?v=efpOA91HaS0&list=RDMM&start_radio=1",
    type: "E - Book",
  },
];

const AffiliateSales = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showFilterPeriod, setShowFilterPeriod] = useState(false);
  // const [width, height] = useWindowDimensions();

  return (
    <>
      <div className={styles.pgTitles}>
        <h3>Affiliate Sales</h3>

        <div className={styles.calContainer}>
          <div className={styles.calTitle}>
            {/* <ActionButton
              icon={<AddIcon />}
              text="Create New Product"
              action={createNewProduct}
            /> */}
          </div>
        </div>
      </div>

      <div className={`tableContainer`}>
        <div className={styles.mainTableArea}>
          <div className={`TableTopButtonContainer`}>
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
            <MarketPlaceTable data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AffiliateSales;
