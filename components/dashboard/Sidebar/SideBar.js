import styles from "./Sidebar.module.css";
import darkStyles from "./SidebarDarkMode.module.css";
import Image from "next/image";
import Link from "next/link";
import dashboard from "../../../public/icons/dashicon.png";
import affiliate from "../../../public/icons/affiliate.png";
import marketplace from "../../../public/icons/marketplace.png";
import transactions from "../../../public/icons/transactions.png";
import course from "../../../public/icons/course.png";
import account from "../../../public/icons/account.png";
import MenuIcon from "@mui/icons-material/Menu";
import useWindowDimensions from "../../../utils/hooks/useWindowDimension";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AuthService from "../../../services/auth.service";


export const SideBar = ({ toggleSidebar, sidebarOpen, darkMode }) => {
  const [width, height, navCollapse] = useWindowDimensions();
  const [display, setDisplay] = useState(true);
  const router = useRouter();
  const currentPage = router.pathname;
  let newStyle = darkMode ? darkStyles :  styles

console.log('currentPage: ' + currentPage)


  useEffect(() => {
    if (!navCollapse) {
      toggleSidebar(true);
      setDisplay(true);
    } else if (navCollapse && sidebarOpen) {
      setDisplay(true);
    } else setDisplay(false);
  }, [navCollapse, sidebarOpen]);

useEffect(()=> {
  if(darkMode) newStyle = darkStyles
  else newStyle = styles
},[darkMode])

  return (
    <div
      className={newStyle.mainContainer}
      style={{ display: display ? "flex" : "none" }}
    >
      <div style={{ paddingTop: 20 }}>
        {navCollapse && sidebarOpen ? (
          <MenuIcon
            onClick={() => toggleSidebar()}
            style={{ color: darkMode ? 'white' : 'black' }}
          />
        ) : (
          ""
        )}
      </div>
      <Image
        src="/logo.png"
        alt="logo"
        width="163"
        height="54"
        className={newStyle.logo}
      />

      <div className={newStyle.navButtonContainer}>
        <ul>
          <li className={`${ currentPage === "/dashboard/home" ? "active" : ""}`}>
            <Link href="/dashboard/home">
              {" "}
              <Image
                src={dashboard}
                width="38"
                height="38"
                alt="Dashboard link"
              />{" "}
              Dashboard{" "}
            </Link>
          </li>
          {/* <li><Link href="/dashboard/users"> <Image src={account} width="38" height ="38" />    { width > 1060 ? "Users": "users"} </Link></li> */}
          <li className={`${ currentPage === "/dashboard/video" ? "active" : ""}`}>
            <Link href="/dashboard/video">
              {" "}
              <Image src={course} width="38" height="38" />{" "}
              {width > 1633 ? "500K Income Course" : "500K Course"}
            </Link>
          </li>
          <li className={`${ currentPage === "/dashboard/affiliate-market-place" ? "active" : ""}`}>
            <Link href="/dashboard/affiliate-market-place">
              {" "}
              <Image
                src={marketplace}
                width="38"
                height="38"
                alt="Market Place Link"
              />{" "}
              {width > 1633 ? "Affiliate Market Place" : "Market Place..."}{" "}
            </Link>
          </li>
          <li className={`${ currentPage === "/dashboard/affiliate-sales" ? "active" : ""}`}>
            <Link href="/dashboard/affiliate-sales">
              {" "}
              <Image
                src={marketplace}
                width="38"
                height="38"
                alt="Affiliate Sales Link"
              />{" "}
              Affiliate Sale{" "}
            </Link>
          </li>
          <li className={`${ currentPage === "/dashboard/transactions" ? "active" : ""}`}>
            <Link href="/dashboard/transactions">
              {" "}
              <Image
                src={affiliate}
                width="38"
                height="38"
                alt="Transaction Link"
              />{" "}
              Transaction{" "}
            </Link>
          </li>
          <li className={`${ currentPage === "/dashboard/account" ? "active" : ""}`}>
            <Link href="/dashboard/account">
              {" "}
              <Image
                src={transactions}
                width="38"
                height="38"
                alt="Account Setting Link"
              />{" "}
              {width > 1060 ? "Account Settings" : "Account"}{" "}
            </Link>
          </li>
        </ul>

        <div className={newStyle.logoutSection}>
          <div className={newStyle.hr}></div>
          <ul>
            <li>
              <Link href="">
                {" "}
                <Image
                  src={dashboard}
                  width="38"
                  height="38"
                  alt="Get Help Link"
                />{" "}
                {width > 1060 ? "Help & Gettin..." : "Help"}{" "}
              </Link>
            </li>

            <li>
              <Link
                href=""
                onClick={() => {
                  AuthService.logout();
                  // signOut({callbackUrl: `/signin` })
                }}
              >
                {" "}
                <Image
                  src={course}
                  width="38"
                  height="38"
                  alt="Logout Link"
                />{" "}
                Logout{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

SideBar.propType = {
  isMobile: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.func.isRequired,
};
