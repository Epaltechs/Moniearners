import styles from "../styles/Signin.module.css";
import Image from "next/image";
import { PaystackButton } from 'react-paystack';
import AuthService from "../services/auth.service";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { useRouter } from "next/router";
import CircularProgress from '@mui/material/CircularProgress';

const publicKey = process.env.NEXT_PUBLIC_PAYSTAACK_PUBLIC_KEY;
let loading = false;

function verify() {
  const currentUser = AuthService.getCurrentUser();
    const amount = 1000000;
    const [email, setEmail] = useState(currentUser?.email ? currentUser.email : "");
    const [name, setName] = useState(currentUser?.accountName ? currentUser.accountName : "");
    const [phone, setPhone] = useState(currentUser?.phoneNum ? currentUser.phoneNum : "");
    const [userId, setUserId] = useState(currentUser?._id ? currentUser._id : "");
    const [loader, setLoader] = useState(false);
    const router = useRouter();
    const { push } = useRouter();


    const resetForm = () => {
        setEmail("");

        setName("");

        setPhone("");

        setUserId("");
    };

    const verifyPayment = (reference) => {
        loading = true;
        let data = {
            email: currentUser.email,
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
            referenceId: reference,
            amount,
            description : "Platform Subscription"
        }

        api.post(`/subscription/verify/${reference}`, data)
        .then((response) => {
            if(response.status !== 200){
                loading = false;
                toast.error(response.data.message);
            }

            if(response.status === 200){
                loading = false;
                push("/dashboard/home");
            }
            // setLoader(false)
        }).catch((error) => {
            loading = false;
            console.log("Error: " , error)
        })
    }

    const componentProps = {
        email,
        amount,
        metadata: {
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        amount,
        name,
        phone,
        userId,
        },
        publicKey,
        text: 'Pay N10,000',
        onSuccess: ({ reference }) => {
            verifyPayment(reference);
            resetForm();
        },
        onClose: () => {
            alert("Wait! You need this oil, don't go!!!!")
        },
    };

    useEffect(() => {
        if(!currentUser){
            push('/signin')
        }
    },[currentUser])

    return (
        <div className={styles.container}>
        <div className={styles.sidebar}>
            <div className={styles.logoContainer}>
            <Image src="/logo.png" width="163" height="54" alt="logo" />
            </div>

            <div className={styles.briefTextContainer}>
            <h3 className={styles.sideTitle}>Your finacial freedom is here</h3>
            <p className={styles.brief}>
                Moniearners is a digital marketplace where we help creators of
                digital products get more sales and connect with more customers
                through our platform and network of high performing affiliates.
            </p>
            </div>
        </div>
        <div className={styles.mainArea}>
            <div className={styles.formTitleDiv}>
            <span className={styles.pageTitle}></span>
            <h5 className={styles.subTitle}>Payment Details</h5>
            {/* <h3 className={styles.title}></h3> */}
            </div>
            <div className={styles.formContainer}>
            <form onSubmit={(e) => { e.preventDefault()}}>
                <div className={styles.cardInfo}>
                <div
                    style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    paddingLeft: "50px",
                    paddingTop: 20,
                    }}
                >
                    {/* <div className={styles.cardContainer}>
                    <h3>Pay with</h3>
                    <div className={styles.cardSelectionContainer}>
                        <input type="radio" id="age1" name="age" value="30" />
                        <label htmlFor="age1">Card</label>
                        <input type="radio" id="age2" name="age" value="60" />
                        <label htmlFor="age1">Bank</label>
                        <input type="radio" id="age3" name="age" value="100" />
                        <label htmlFor="age1">Transfer</label>
                    </div>
                    </div> */}
                    {/* <div></div> */}
                    {/* <label htmlFor="pin1" className={styles.label}>
                    Card Number
                    </label>
                    <input
                    type="text"
                    name="pin1"
                    placeholder="0"
                    className={styles.inputMedium}
                    style={{ marginBottom: 40 }}
                    />
                    <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                    }}
                    >
                    <div
                        style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        }}
                    >
                        <label htmlFor="pin2" className={styles.label}>
                        Expiration Date
                        </label>
                        <input
                        type="text"
                        name="pin2"
                        placeholder="0"
                        className={styles.inputSmall}
                        style={{ marginBottom: 40 }}
                        />
                    </div>
                    <div
                        style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        }}
                    >
                        <label htmlFor="pin2" className={styles.label}>
                        CCV
                        </label>
                        <input
                        type="text"
                        name="pin3"
                        placeholder="0"
                        className={styles.inputSmall}
                        style={{ marginBottom: 40 }}
                        />
                    </div>
                    </div> */}

                    {/* <div>
                    <input type="radio" id="age3" name="age" value="100" />
                    <label htmlFor="age1">Save card details</label>
                    </div> */}

                    <div>
                    {/* <button className={styles.paymentButton}>Pay #10,000</button> */}
                    {/* <PaystackHookExample /> */}
                    {
                        loading ? (
                            <button className={styles.paymentButton}>
                                <CircularProgress color="success" />
                            </button>
                        
                        ) : <PaystackButton className={styles.paymentButton} {...componentProps} />

                    }
                    </div>
                    <div>
                    <p style={{ color: "#808080" }}>
                        Your personal data will be used to process your order,
                        support your experience throughout this website, and for
                        other purposes described in our privacy policy.
                    </p>
                    </div>
                </div>
                </div>

                {/* <div className={styles.signin}>
                            <p >Don't have an account? <a href="#" className={styles.link}>Sign up</a></p>
                </div> */}
            </form>
            </div>
        </div>
        </div>
    );
}

export default verify;
