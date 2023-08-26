import BottomNav from "../components/BottomNav";
import "../styles/globals.css";
import { useRouter } from "next/router";
import NewTopNav from "../components/NewTopNav";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import AuthService from "../services/auth.service";
import { SideBar } from "../components/dashboard/Sidebar/SideBar";
import TopNav from "../components/dashboard/TopNav/TopNav";
import PaymentService from "../services/payment.service";
import Cookies from "js-cookie";

const paths = [
  {
    homeModulePath: [
      "/",
      "/home", 
      "/affiliates", 
      "/support", 
      "/vendor", 
      "/signin", 
      "/affiliateSignup", 
      "/payment-checkout", 
      "/payment-confirmation", 
      "/payment",
      "/forgot-password", 
      "/verify"
    ],
  },
  {
    dashboardPath: [
      "/dashboard",
      "/dashboard/home",
      "/dashboard/account",
      "/dashboard/new-product",
      "/dashboard/growth",
      "/dashboard/affiliate-market-place",
      "/dashboard/affiliate-sales",
      "/dashboard/transactions",
      "/dashboard/video",
      "/dashboard/UserDetails",

    ],
  },
  {
    fullScreenPages: [
      "/signin", 
    "/affiliateSignup", 
    "/payment-checkout", 
    "/payment-confirmation", 
    "/payment", 
    "/forgot-password", 
    "/verify", 
    "/dashboard/course",
    "/product/[p1]/[a1]",
  ],
  },
];

const getTheme = () => {
  let theme = Cookies.get('darkMode')

  if(theme === undefined) {
    Cookies.set('darkMode', false)
    return false
  }

  return theme
};
function MyApp({ Component, pageProps }) {
  const [isDashboard, setIsDashboard] = useState(false);
  const [isFullScreen, setFullScreen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(getTheme());

  const router = useRouter();
  const { push } = useRouter();

  const getLayout = Component.getLayout || ((page) => page);
  const currentUser = AuthService.getCurrentUser();
  const currentPage = router.pathname;

  const toggleSidebar = (condition) => {
    if (condition) {
      setSidebarOpen(false);
    } else setSidebarOpen(!sidebarOpen);
  };

  const getNavBar = () => {
    const currentPage = router.pathname;
    if(paths[2].fullScreenPages.includes(currentPage)) return null;
    if (paths[0].homeModulePath.includes(currentPage)) return <NewTopNav />;
    else return <SideBar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} darkMode={darkMode} />;
  };

  const navigate =(page) => {
    push(page)
  }

  const getFooter = () => {
    if(paths[2].fullScreenPages.includes(currentPage)) return null;
    if (paths[0].homeModulePath?.includes(currentPage)) return <BottomNav />;
    else return null
  };

  useEffect(() => {
    const firstIndex = currentPage.split("/")[1]

    if(paths[2].fullScreenPages.includes(currentPage) || paths[2].fullScreenPages.includes(firstIndex)){
      setFullScreen(true)
      setIsDashboard(false)
    }

    if (!currentUser && paths[1]?.dashboardPath?.includes(currentPage)) {
      setIsDashboard(false);
      push("/signin");
    }

    if(!currentUser && !paths[1]?.dashboardPath?.includes(currentPage)){
      setIsDashboard(false)
    }
        
    if(currentUser && paths[1]?.dashboardPath?.includes(currentPage)){
      if (!isDashboard) setIsDashboard(true);
    }
  }, [currentUser, currentPage, isDashboard]);

  useEffect(()=> {
    Cookies.set('darkMode', darkMode)
  },[darkMode])

  return (
    <>
      {isDashboard ? (
        <div className={`mainContainer`}>
           {getNavBar()}
          <div className={`${darkMode ? 'mainAreaDark' : 'mainArea' }`}>
            <div className={`${darkMode ? 'contentAreaDark' : 'contentArea' }`}>
              <TopNav toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} setDarkMode={setDarkMode} darkMode={darkMode} />
              {getLayout(<Component {...pageProps} navigate={navigate} darkMode={darkMode} />)}
              {getFooter()}
            </div>
          </div>
        </div>
      ) : (
        <>
          {getNavBar()}
          {getLayout(<Component {...pageProps} />)}
           {getFooter()}
        </>
      )}
      <ToastContainer />
    </>
  );
}

export default MyApp;
