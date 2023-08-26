import React, { useState, useEffect } from "react";
import styles from "../../styles/dashboard/Account.module.css";
import darkStyles from "../../styles/dashboard/accountDark.module.css";
import Image from "next/image";
import profileUser from "../../public/profileUser.svg";
import moneys from "../../public/moneys2.png";
import user from "../../public/icons/users.svg";
import ActionButton from "../../components/dashboard/ReusableButtons/ActionButton";
import { Input } from "antd";
import { toast } from "react-toastify";
import UserService from "../../services/user.services";
import AuthService from "../../services/auth.service";

const Account = ({ darkMode }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [sex, setSex] = useState("Select Sex");
  const [email, setEmail] = useState("");
  const [bank, setBank] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountNum, setAccountNum] = useState("");
  const currentUser = AuthService.getCurrentUser();

  let newStyle = darkMode ? darkStyles :  styles

  const notify = (text) => toast(text);
  const upload = () => {};
  const handleUpload = () => {};

  const submitUpdate = async (e) => {
    e.preventDefault();
    // console.log("first");
    let userDetails = {
      firstName,
      lastName,
      username,
      bank,
      accountName,
      accountNum,
      email,
      phoneNum,
      sex,
    };

    const response = UserService.updateUserAccount(userDetails);
    if (response) {
      notify("account updated successfully.");
    }
  };

  const onChange = (checked) => {
    setDarkMode(checked);
  };
  
  useEffect(() => {
    if(currentUser){
      setFirstName(currentUser?.firstName);
      setLastName(currentUser?.lastName);
      setUserName(currentUser?.username);
      setPhoneNum(currentUser?.phoneNum);
      setEmail(currentUser?.email);
      setSex(currentUser?.male);
      setBank(currentUser?.bank);
      setAccountName(currentUser?.accountName);
      setAccountNum(currentUser?.accountNum);
    }
  },[])

  useEffect(()=> {
    if(darkMode) newStyle = darkStyles
    else newStyle = styles
  },[darkMode])

  console.log("current user ", currentUser)
  return (
    <>
      <div className={newStyle.pgTitles}>
        <Image src={user} width="24px" height="24px" alt="user" />{" "}
        <h3> Edit Profile</h3>
      </div>

      <div className={newStyle.mainSectionContainer}>
        <div className={newStyle.personalSection}>
          <form>
            <div className={newStyle.inputArea}>
              <label htmlFor="name">First Name</label>
              <br />
              <input
                type="text"
                name="name"
                placeholder="Ronald"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className={newStyle.inputArea}>
              <label htmlFor="name">Last Name</label>
              <br />
              <input
                type="text"
                name="name"
                placeholder="Richie"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className={newStyle.inputArea}>
              <label htmlFor="name">Username</label>
              <br />
              <input
                type="text"
                name="username"
                placeholder="RonaldRich"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className={newStyle.inputArea}>
              <label htmlFor="name">Sex</label>
              <br />
              <select
                name="sex"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
                className={newStyle.input}
              >
                <option value="Select Sex">Select Sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className={newStyle.inputArea}>
              <label htmlFor="phoneNumber">Phone Number</label>
              <br />
              <input
                type="text"
                name="phoneNumber"
                placeholder="+234 9032233223"
                value={phoneNum}
                onChange={(e) => setPhoneNum(e.target.value)}
              />
            </div>

            <div className={newStyle.inputArea}>
              <label htmlFor="html">Email</label>
              <br />
              <input
                type="text"
                name=""
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* <div className={styles.inputArea}>
              <label htmlFor="html">Password</label>
              <br />
              <input
                type="password"
                name=""
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div> */}
          </form>

          <form>
            <div className={newStyle.sectionHeader}>
              <Image
                src={moneys}
                width=""
                height=""
                alt="Bank Account Details"
              />
              <h6>Bank Account Details</h6>
            </div>
            <div className={newStyle.inputArea}>
              <label htmlFor="name">Bank Name</label>
              <br />
              <input
                type="text"
                name="name"
                placeholder="United Bank for Africa"
                value={bank}
                onChange={(e) => setBank(e.target.value)}
              />
            </div>

            <div className={newStyle.inputArea}>
              <label htmlFor="Account Name">Account Name</label>
              <br />
              <input
                type="text"
                name="accountName"
                placeholder="Ronald Richie"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
              />
            </div>

            <div className={newStyle.inputArea}>
              <label htmlFor="html">Account Number</label>
              <br />
              <input
                type="text"
                name=""
                placeholder="10102454343"
                value={accountNum}
                onChange={(e) => setAccountNum(e.target.value)}
              />
            </div>
          </form>
          <ActionButton action={submitUpdate} text="Update" />
        </div>

        <div className={newStyle.profileSection}>
          <Image
            src={profileUser}
            width="100"
            height="100"
            alt="profileImage"
          />
          <div className={newStyle.uploadArea}>
            <Input id="imageInput" type="file" hidden onChange={handleUpload} />
            {/* <UploadButton
              htmlFor="imageInput"
              type="submit"
              text="Chose File"
              // action={upload}
              width="83px"
              height="27px"
            /> }
            {/* <h6>No File Chosen</h6> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
