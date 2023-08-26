import React from 'react'
import styles from "./../styles/Nav.module.css"
import Image from 'next/image'

const TopNav = () => {
  return (
    <>
      <nav className={` navbar navbar-expand-lg bg-dark navbar-dark text-white `}>
      <div className="container-fluid d-flex justify-content-between">
        <div className='p-2 flex-grow-1'>
          <Image src="/logo.png"  width="163" height="54" alt="logo" className={` ${styles.imageLogo}`} />
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${styles.nav} collapse navbar-collapse `} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active display-1" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link display-1" href="#">Support</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Aflliates</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Vendors</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">FAQ</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
            <button className={`${styles.button1} btn btn-outline-success mx-3`} type="submit">Login</button>
            <button className={`${styles.button2} btn btn-outline-success`} type="submit">Get Started.</button>
          </form>
        </div>
      </div>
    </nav>
    </>
  )
}

export default TopNav