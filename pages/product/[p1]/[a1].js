import React, { useState, useEffect } from "react";
import styles from '../../../styles/Sales.module.css';
import { useRouter } from 'next/router'
import ProductService from "../../../services/product.services";
import ActionButton from "../../../components/dashboard/ReusableButtons/ActionButton";
import { PaystackButton } from 'react-paystack';
import AuthService from "../../../services/auth.service";

const publicKey = process.env.NEXT_PUBLIC_PAYSTAACK_PUBLIC_KEY;


function HomePage() {
    const currentUser = AuthService.getCurrentUser();
    
    const [product, setProduct] = useState({});
    const [loader, setLoader] = useState(false);
    const [email, setEmail] = useState(currentUser?.email ? currentUser.email : "");
    const [name, setName] = useState(currentUser?.accountName ? currentUser.accountName : "");
    const [phone, setPhone] = useState(currentUser?.phoneNum ? currentUser.phoneNum : "");
    const [userId, setUserId] = useState(currentUser?._id ? currentUser._id : "");
    
    const router = useRouter();
    const data = router.query;
    const { a1, affiliate, p1, productName } = data;
    console.log('data >> ', data);
    console.log('data >> ', data);



    const payForCourse = (e) => {
        
    }

    useEffect(()=> {
        async function getData(){
            const response = await ProductService.getSingleProduct(p1);
            setProduct(response.productFound)
            console.log('response >> ', response);
        }

        getData()
    },[data])

    console.log("product >> ", product)

  return (
    <div className={`${styles.container}`}>
        <div className={`${styles.section1}`}>
            <div>
                <div className={`${styles.fistCol}`}>
                    <div className={`${styles.title1}`} >
                        <h1> {productName} </h1>
                        <h1 style={{ paddingTop:0,  }}>
                            <span className={`${styles.titleBold}`} > { product?.authorName ? product.authorName : "" } </span>
                        </h1>
                    </div>
                </div>
            </div>
            <div className={`${styles.webBody}`} dangerouslySetInnerHTML={{ __html: product?.pageBody ? product.pageBody : '' }} />
            {/*
                <div className={`${styles.statsContainer}`}>
                    <div className={` ${styles.analyticContainer}`}>
                        <div className={`${styles.analyticSubContainer }`}>
                            <span className={`${styles.analytics}`}>150k+</span>
                            <p className={`${styles.analyticBrief}`}>Products Sold</p>
                        </div>
                        <div className={`${styles.analyticSubContainer }`}>
                            <span className={`${styles.analytics}`}>50k+</span>
                            <p className={`${styles.analyticBrief}`}>Affiliates</p>
                        </div>
                        <div className={`${styles.analyticSubContainer }`}>
                            <span className={`${styles.analytics}`}>60+</span>
                            <p className={`${styles.analyticBrief}`}>Product Creators</p>
                        </div>
                        <div className={`${styles.analyticSubContainer }`}>
                            <span className={`${styles.analytics}`}>15+</span>
                            <p className={`${styles.analyticBrief}`}>Skills</p>
                        </div>
                    </div>
                </div>
            */}

            <div className={`${styles.paymentContainer}`}>
                <ActionButton action={payForCourse} text="Pay for course" />
            </div>

        </div>

        
    </div>
  )
}

export default HomePage;