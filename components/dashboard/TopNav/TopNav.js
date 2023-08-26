import styles from'./TopNav.module.css'
import darkStyles from'./TopNavDarkMode.module.css'
import Image from 'next/image'
import Link from 'next/link';
import { InputAdornment, TextField, Box, createStyles } from '@mui/material';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import search from '../../../public/icons/search.png'
import notification from '../../../public/icons/notification.png'
import user_profile from '../../../public/user_profile.png';
import MenuIcon from '@mui/icons-material/Menu';
import { Switch } from 'antd';
import useWindowDimensions from '../../../utils/hooks/useWindowDimension'
import { useEffect, useState } from 'react';
import AuthService from '../../../services/auth.service';
import { isEmpty } from 'lodash';


function TopNav({showSidebar, toggleSidebar, setDarkMode, darkMode }) {
  const currentUser = AuthService.getCurrentUser();
  let newStyle = darkMode ? darkStyles :  styles

  const [show, setSet ] = useState(false)
  const [ width, height, navCollapse ] = useWindowDimensions();
  const [user, setUser] = useState();

  const onChange = (checked) => {
    setDarkMode(checked);
  };

  useEffect(()=> {
    if(!isEmpty(currentUser)){
      setUser(currentUser);
    }
  },[])

useEffect(()=> {
  if(darkMode) newStyle = darkStyles
  else newStyle = styles
},[darkMode])

  return (
    <div className={newStyle.mainContainer}>
        <div className={newStyle.menuIcon} style={{ display: navCollapse ? 'flex' : 'none' }}>
          <MenuIcon  onClick={() => {
            toggleSidebar()
            }}
            style={{ color: darkMode ? 'white' : 'black' }}
          />
        </div>
        <Box
            component="span"
            className={newStyle.inputBox}
        >
          <TextField
            id="outlined-start-adornment"
            sx={{ borderRadius: '20px' }}
            size="small"
            variant="outlined"
            fullWidth
            placeholder="Search anything..."
            InputProps={{
              startAdornment: <InputAdornment position="start"> <Image src={search} width="16" height ="16" /> </InputAdornment>,
              style: { color: darkMode ? '#fff': 'grey', backgroundColor: darkMode ? '#131313' : 'white'  },
            }}
          />
        </Box>

        <div className={newStyle.notificationArea}>

          <div className={newStyle.darkSwitchArea}>
            <Switch checked={darkMode} style={{backgroundColor: darkMode ? 'grey' : '#E5C890', marginLeft: 20, marginRight: 10}} onChange={onChange} />
            <Brightness6Icon style={{ color : darkMode ? '#D6A750' : 'grey' }} />
          </div>
          <Image src={notification} alt="notification" width="32" height="32" />
          <div className={newStyle.userProfile} style={{ display: width < 680 ? "none": "flex"}}>
            <h2>{ !isEmpty(user) ? user.email : ""}</h2>
            <h6>{ !isEmpty(user) ? user.role.toUpperCase() : ""}</h6>
          </div>
          <Image src={user_profile} alt="user profile" width="40" height="38" style={{marginLeft: 20}} />

        </div>

    </div>
  )
}

export default TopNav