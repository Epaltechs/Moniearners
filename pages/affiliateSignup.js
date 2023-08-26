import styles from "../styles/Signin.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import AuthService from "../services/auth.service";
import { useRouter } from "next/navigation";
import { FirstPage } from "@mui/icons-material";

function signUp() {
  const [username, setUserName] = useState("");
  const [sex, setSex] = useState("Select Sex");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { push } = useRouter();

  const validateForm = () => {
    if (username === "" || username.length < 5) {
      toast.error("username is required and must be at least 5 characters");
      return false;
    }

    if (firstName === "" || firstName.length < 5) {
      toast.error("full name is required and must be at least 5 characters");
      return false;
    }

    if (lastName === "" || lastName.length < 5) {
      toast.error("full name is required and must be at least 5 characters");
      return false;
    }

    if (email === "") {
      toast.error("Email is required, Kindly fill all fields");
      return false;
    }

    if (phoneNum === "" || phoneNum.length < 11) {
      toast.error("Phone number is required and must be at least 11 digits");
      return false;
    }

    if (sex === "Select Sex") {
      toast.error("Sex field is required");
      return false;
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      toast.error(
        "Email is not a valid email address, Kindly enter a valid email address"
      );
      return false;
    }

        if( password === '' || password.length < 7) {
            toast.error('Password is required, and must be at least 8 characters');
            return false;
        }

        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/i.test(password)) {
            toast.error('Password must have a minimum of 8 characters, at least one uppercase, one lowercase letter and one number');
            return false;
        }

    if (password !== confirmPassword) {
      toast.error("Password does not match the confirmation password");
      return false;
    }

    return true;
  };


  const userSignUp = async (e) => {
    e.preventDefault();

        try {
            if(validateForm()){
                const firstname = firstName
                const lastname = lastName
                let response = await AuthService.register(username, firstname, lastname, phoneNum, sex, email, password)

        if (response.status >= 200 && response.status < 300) {
          toast.info("User registration successful");
          push("/signin");
        }
      }
    } catch (error) {
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(resMessage);
      console.log(error);
    }
  };

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
          <span className={styles.pageTitle}>AFFLIATES SIGN UP</span>
          <h5 className={styles.subTitle}>Start earning</h5>
          <h3 className={styles.title}>Create your account</h3>
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={(e) => userSignUp(e)}>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your username"
              className={styles.input}
            />
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter First Name"
              className={styles.input}
            />
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter Last Name"
              className={styles.input}
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className={styles.input}
            />
            <input
              type="text"
              name="number"
              value={phoneNum}
              onChange={(e) => setPhoneNum(e.target.value)}
              placeholder="08*********"
              className={styles.input}
            />
            <select
              name="sex"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              className={styles.input}
            >
              <option value="Select Sex">Select Sex</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className={styles.input}
            />
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className={styles.input}
            />

            <div>
              <button className={styles.button} onClick={userSignUp}>
                Sign Up{" "}
              </button>
            </div>
            <div className={styles.signin}>
              <p>
                Already have an account? <Link href="/signin">Sign in </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default signUp;
