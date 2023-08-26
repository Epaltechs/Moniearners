import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import styles from './StatsCard.module.css'
import darkStyles from './darkmodeStatsCard.module.css'
import { styled } from '@mui/material/styles';
import Image from "next/image";


const CustomizedCard = styled(Card)`
  border-radius: 10px;
  border-style: none !important;
  box-shadow:${ (props) => props.darkMode ? '4px 4px 10px rgba(0, 0, 0, 0.02)' : 'none' } ;
  border-radius: 10px;
  filter: ${ (props) => props.darkMode ? 'none' : 'drop-shadow(0px 6px 14px rgba(0, 0, 0, 0.07))'};

  :hover {

  }
`;


export default function OutlinedCard({ img, title, subTitle, color, darkMode}) {
  let newStyle = darkMode ? darkStyles :  styles;


  React.useEffect(()=> {
    if(darkMode) newStyle = darkStyles
    else newStyle = styles
  },[darkMode])

  return (
    <Box sx={{ minWidth: 220, borderRadius: 100, backgroundColor: darkMode ? 'black' : 'white' }}>
      <CustomizedCard variant="outlined" className={newStyle.card}>
        <CardContent className={newStyle.cardContainer}>
          <div className={newStyle.mainArea}>
            <div className={newStyle.icon} style={{ backgroundColor: `${color}`}}>
              <Image src={img} width="24" height="24" alt={title} />
            </div>
            <div className={newStyle.contentArea}>
              <h3>N{title}</h3>
              <h6>{subTitle}</h6>
            </div>
          </div>
        </CardContent>
      </CustomizedCard>
    </Box>
  );
}
