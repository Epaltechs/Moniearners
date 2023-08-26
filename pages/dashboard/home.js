import React, { useState } from "react";
import { SideBar } from "../../components/dashboard/Sidebar/SideBar";
import TopNav from "../../components/dashboard/TopNav/TopNav";
import styles from "../../styles/dashboard/home.module.css";
import darkStyles from "../../styles/dashboard/homeDark.module.css";
import useWindowDimensions from "../../utils/hooks/useWindowDimension";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";

import calendar from "../../public/icons/calendar.png";
import commission from "../../public/icons/commision.png";
import moneys from "../../public/icons/moneys.svg";
import sales from "../../public/icons/sales.png";
import walletIcon from "../../public/icons/wallet.png";
import chevron from "../../public/icons/Chevron.svg";
import users from "../../public/icons/user-usage.svg";
import graph from "../../public/Gradient.svg";
import { useRouter } from "next/navigation";
import AddIcon from "@mui/icons-material/Add";

import StatsCard from "../../components/dashboard/Card/StatsCard";
import BasicTable from "../../components/dashboard/Table/BasicTable";
import { Button } from "@mui/material";
import ActionButton from "../../components/dashboard/ReusableButtons/ActionButton";
import AuthService from "../../services/auth.service";
import { useEffect } from "react";
import { isEmpty } from "lodash";
import { toast } from "react-toastify";
import WalletService from "../../services/wallet.service";

const data = [
  {
    id: 1,
    productSold: `Relocating to Canada `,
    paymentDate: "11/11/2022 12:00",
    amount: "N20,000.00",
    commission: "N20,000.00",
    status: "Completed",
    type: "E - Book",
  },
  {
    id: 2,
    productSold: `Relocating to Canada `,
    paymentDate: "11/11/2022 12:00",
    amount: "N20,000.00",
    commission: "N20,000.00",
    status: "Completed",
    type: "E - Book",
  },
  {
    id: 3,
    productSold: `Relocating to Canada `,
    paymentDate: "11/11/2022 12:00",
    amount: "N20,000.00",
    commission: "N20,000.00",
    status: "Completed",
    type: "E - Book",
  },
  {
    id: 4,
    productSold: `Relocating to Canada  `,
    paymentDate: "11/11/2022 12:00",
    amount: "N20,000.00",
    commission: "N20,000.00",
    status: "Completed",
    type: "E - Book",
  },
  {
    id: 5,
    productSold: `Relocating to Canada `,
    paymentDate: "11/11/2022 12:00",
    amount: "N20,000.00",
    commission: "N20,000.00",
    status: "Completed",
    type: "E - Book",
  },
  {
    id: 6,
    productSold: `Relocating to Canada`,
    paymentDate: "11/11/2022 12:00",
    amount: "N20,000.00",
    commission: "N20,000.00",
    status: "Completed",
    type: "E - Book",
  },
  {
    id: 7,
    productSold: `Relocating to Canada`,
    paymentDate: "11/11/2022 12:00",
    amount: "N20,000.00",
    commission: "N20,000.00",
    status: "Completed",
    type: "E - Book",
  },
];

const DashboardHome = ({ darkMode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showFilterPeriod, setShowFilterPeriod] = useState(false);
  const currentUser = AuthService.getCurrentUser();
  const { push } = useRouter();
  const [user, setUser] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [wallet, setWallet] = useState(false);

  let newStyle = darkMode ? darkStyles :  styles

  async function getDashBoardMetrics() {
    try {
      setLoading(true);
      const response = await WalletService.getUserWallet(user._id)
      if (response.status === 200) {
        let currentWallet = response.data.walletFound;
        setWallet(currentWallet)
      }
      setLoading(false);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
      toast.error(error.message);
    }
  }


  useEffect(() => {
    if (!isEmpty(currentUser)) {
      setUser(currentUser);
    }
  }, []);

  useEffect(() => {
    if(user) getDashBoardMetrics()
  },[user])

  useEffect(()=> {
    if(darkMode) newStyle = darkStyles
    else newStyle = styles
  },[darkMode])

  return (
    <>
      {user ? (
        <>
          <div className={newStyle.pgTitles}>
            <h3>
              Good Morning {!isEmpty(user) ? user.firstName.toUpperCase() : ""}
            </h3>
            <div className={newStyle.calContainer}>
              <div
                className={newStyle.calTitle}
                onClick={() => setShowFilterPeriod(!showFilterPeriod)}
              >
                {" "}
                <h6>
                  <Image
                    src="/icons/calendar.png"
                    width="16"
                    height="16"
                    style={{ marginRight: 10 }}
                  />{" "}
                  Today <ExpandMoreIcon />
                </h6>
              </div>
              <div
                className={newStyle.dropDow}
                style={{ display: showFilterPeriod ? "flex" : "none" }}
              >
                <ul>
                  <li>Today</li>
                  <li>Last 7 Days</li>
                  <li>Last 30 Days</li>
                  <li>Custom </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={newStyle.cardContainer}>
            <StatsCard
              img={sales}
              title={wallet.allTimeSales}
              subTitle="All Time Sales"
              color="#EDE9FE"
              darkMode={darkMode}
            />
            <StatsCard
              img={commission}
              title={wallet.allTimeEarnings}
              subTitle="All Time Earning"
              color="#DBEAFE"
              darkMode={darkMode}
            />
            <StatsCard
              img={walletIcon}
              title={wallet.walletBallance}
              subTitle="Account Balance"
              color="#FEF3C7"
              darkMode={darkMode}
            />
            <StatsCard
              img={sales}
              title={wallet.nextPayout}
              subTitle="Next Payout"
              color="#D1FAE5"
              darkMode={darkMode}
            />
          </div>

          <div className={`tableContainer`}>
            <div className={newStyle.mainTableArea}>
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
                      View All Sales
                    </Button>
                  </div>
                </div>
                <BasicTable data={data} darkMode={darkMode} />
              </div>
            </div>

            <div className={newStyle.sideContent}>
              <div className={newStyle.recentSale}>
                <h3>Recent Sales</h3>
                <h6>Product sold this month</h6>
                <hr />

                <div className={newStyle.stats}>
                  <span className={newStyle.percentRise}>100+</span>
                  <span className={newStyle.rise}>
                    <span>
                      <Image
                        src={chevron}
                        width="14"
                        height="9"
                        className={newStyle.percentRise}
                      />{" "}
                      23%
                    </span>
                  </span>
                </div>
                <div>
                  <Image
                    src={graph}
                    width="279"
                    height="100"
                    className={newStyle.graphImg}
                    alt=""
                  />
                </div>
              </div>
              
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default DashboardHome;

// export async function getServerSideProps(context) {
//   const sessionToken = context.req.cookies['next-auth.session-token'];

//   const decoded = await decode({
//     token: sessionToken,
//     secret: process.env.NEXTAUTH_SECRET,
//   });

//   console.log("inter decoded >> ",decoded)
//   // decoded JSON will be like :
//   /**
//    * {
//    *  name: 'John Doe',
//    *  email: '...',
//    *  image: '...'
//    * }
//    */
// }
