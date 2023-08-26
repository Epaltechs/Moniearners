import styles from '../styles/Signin.module.css'
import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react';
import { Spin } from 'antd'
import { login } from '../redux/features/userSlice';
import { toast } from 'react-toastify';
import AuthService from '../services/auth.service';
import { useRouter } from 'next/navigation';

function SignIn() {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const { push } = useRouter();
    const notify = (text) => toast(text);

    const userLogin = async (e) => {
        e.preventDefault();

        setLoading(true)
        if(email === '') {
            notify('Email is required, Kindly fill all fields');
            setLoading(false)

            return false;
        }

        // "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setLoading(false)
            notify('Email is not valid');
            return false;
        }

        if( password === '') {
            notify('Password is required, Kindly fill all fields');
            setLoading(false)
            return false;
        }

        if( password.length < 7 ) {
            notify('Password must not be less than 7 characters');
            setLoading(false)
            return false;
        }

       const response = await AuthService.login(email, password)

       if(!response){ 
            setLoading(false)
            return
        }
       
       notify('Logged in Successfully');
       setEmail("");
       setPassword("");
       setLoading(false)
        push('/dashboard/home');
    }

  return (
    <div className={styles.container}>
        
        <div className={styles.sidebar}>
            <div className={styles.logoContainer}>
                <Image src="/logo.png" width="163" height="54" alt='logo' />
            </div>

            <div className={styles.briefTextContainer}>
                <h3 className={styles.sideTitle}>Your financial freedom is here</h3>
                <p className={styles.brief}>
                    Moniearners is a digital 
                    marketplace where we help 
                    creators of digital products get 
                    more sales and connect 
                    with more customers through our
                    platform and network of 
                    high performing affiliates.
                </p>
            </div>
            
        
        </div>
        <div className={styles.mainArea}>
            <div className={styles.formTitleDiv}>
                <span className={styles.pageTitle}></span>
                <h5 className={styles.subTitle}>Welcome back 👋🏽,</h5>
                <h3 className={styles.title}>Login to your account</h3>
            </div>
            <div className={styles.formContainer}>
                <form onSubmit={(e) => userLogin(e)}>
                    <input type="email" name="email" placeholder='Your Email address' className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" name="password"  placeholder='Password' className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} />

                    <div>
                        <Spin spinning={loading} >
                            <button className={styles.button} onClick={userLogin}>Sign in</button>
                        </Spin>
                    </div>
                    <div className={styles.signin}>
                        <p>Don't have an account? <Link href="/affiliateSignup" >Sign up</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignIn