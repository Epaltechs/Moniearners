import styles from'./Sidebar.module.css'
import Image from 'next/image'
import Link from 'next/link';
import dashboard from '../../../public/icons/dashicon.png'
import affiliate from '../../../public/icons/affiliate.png'
import marketplace from '../../../public/icons/marketplace.png'
import transactions from '../../../public/icons/transactions.png'
import course from '../../../public/icons/course.png'
import account from '../../../public/icons/account.png'
import MenuIcon from '@mui/icons-material/Menu';
import useWindowDimensions from '../../../utils/hooks/useWindowDimension'
import PropTypes from "prop-types";

export const SideBar = ({ isMobile, toggleSidebar, sidebarOpen }) => {
  const [ width, height ] = useWindowDimensions();

  const displaySidebar = () => {
    if(!isMobile()){
      toggleSidebar(true);
      return true
    }
    else return isMobile() && sidebarOpen ? true : false
  }
  return (
    <div className={styles.mainContainer} style={{ display: displaySidebar() ? 'flex': 'none' }}>
      <div style={{ paddingTop: 20 }}>
        {
        isMobile() && sidebarOpen  ? <MenuIcon  onClick={() => toggleSidebar()} style={{ backgroundColor: 'white'}} /> : ""
        }
      </div>
      <Image src="/logo.png" alt="logo" width="163" height="54" className={styles.logo} />

      <div className={styles.navButtonContainer}>

        <ul>
          <li><Link href="/admin/home"> <Image src={dashboard} width="38" height="38" alt="Dashboard link" />  Dashboard </Link></li>
          <li><Link href="/admin/users"> <Image src={course} width="38" height="38" alt="User Link" />   User</Link></li>
          <li><Link href="/admin/products"> <Image src={marketplace} width="38" height="38" alt="Products Link" />   Products </Link></li>
          <li><Link href="/admin/transactions"> <Image src={affiliate} width="38" height="38" alt="Transaction Link" />  Transaction </Link></li>
          <li><Link href="/admin/account"> <Image src={transactions} width="38" height="38" alt="Account Setting Link" />    { width > 1060 ? "Account Settings": "Account"} </Link></li>
        </ul>



        <div>
        <div className={styles.hr}></div>
        <ul>
            <li><Link href=""> <Image src={dashboard} width="38" height="38" alt="Get Help Link " />  Help & Gettin... </Link></li>
            <li><Link href=""> <Image src={course} width="38" height="38" alt="Logout Link" />  Logout </Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}


SideBar.propType = {
  isMobile: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.func.isRequired,
}