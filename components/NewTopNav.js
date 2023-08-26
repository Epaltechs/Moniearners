import React from 'react'
import styles from './../styles/NewNav.module.css'
import Link from 'next/link';
import Image from 'next/image'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import TableRowsIcon from '@mui/icons-material/TableRows';
import Button from '@mui/material/Button';
import { useState } from 'react';




const NewTopNav = () => {
  const [navbar, setNavbar] = useState(false);
  
  const handleShow =()=>{
    setNavbar(!navbar)
  }
  return (
    <div className={styles.navContent} style={{ paddingBottom: navbar ? '420px': ''}}>
      

      <div className={styles.container}>

      <div className={styles.bar}>
                
                {navbar ? (
              <Button onClick={handleShow} >
                     <DoubleArrowIcon className={styles.icon}  />
 
              </Button >
                  ) : (
              <Button onClick={handleShow} >
                     <TableRowsIcon className={styles.icon}  />
 
              </Button >
                  )}
          
          
                 

      </div>

          <div className={styles.logoArea}>
                <Image src="/logo.png" alt="logo" width="163" height="54" className={styles.logo} />
          </div>

          <div className={styles.navArea} style={{ left: navbar ? '0': ''}}>
            <ul>
                <li><Link href='/home' onClick={() => setNavbar(navbar)} > Home </Link> </li>
                <li><Link href='/support' onClick={() => setNavbar(navbar)} > Support </Link></li>
                <li><Link href='/affiliates' onClick={() => setNavbar(navbar)} > Affiliate </Link></li>
                <li> <Link href='/vendor' onClick={() => setNavbar(navbar)} > Vendors </Link></li>
                <li><Link href='/' onClick={() => setNavbar( navbar)}>FAQs</Link></li>
            </ul>
            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
            <button className={`${styles.button1}`} type="submit"><Link href='/signin' >Login</Link></button>
            <button className={`${styles.button2}`} type="submit"><Link href='/affiliateSignup' >Get Started </Link></button>
        </div>

                <div className={styles.user}>
                  <Link href='/signin' > <AccountCircleIcon className={styles.icon} /></Link>
                </div>

      </div>
      


    </div>
    
  )
}

export default NewTopNav

