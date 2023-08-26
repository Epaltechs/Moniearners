import React from 'react';
import TopNav from '../../components/dashboard/TopNav/TopNav'
import styles from './video.module.css'
import darkStyles from "../../styles/dashboard/videoDark.module.css";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useEffect } from "react";
import NorthEastIcon from '@mui/icons-material/NorthEast';

// import useWindowDimensions from '../../utils/hooks/useWindowDimension'



const Video = ({navigate, darkMode} ) => {
  
  let newStyle = darkMode ? darkStyles :  styles

  useEffect(()=> {
    if(darkMode) newStyle = darkStyles
    else newStyle = styles
  },[darkMode])

    return ( 
      <>
            <div className={newStyle.contentArea} onClick={() => navigate('/dashboard/growth')}>
                <h1>Videos</h1>

                <div className={newStyle.VideoBox}>

                  <div className={newStyle.innerbox}>
                    <div className={newStyle.innerImg} style={{ backgroundImage: "url(/vidImg.png)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >

                      <div className={newStyle.vidTimer}>
                                                  
                        <div style={{ display: 'flex', alignItems: 'center'}}>
                         < AccessTimeIcon className={newStyle.TimeIcon} />
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center'}}>
                         <p>08 hr 12 mins</p>
                        </div>
                          

                      </div>
                      

                    </div>

                  <div className={newStyle.Description}>

                    <h3> Growth </h3>

                    <div className={newStyle.hack}>
                      <h4> Hacking Growth...</h4>
                      <NorthEastIcon className={newStyle.NorthIcon} />
                

                    </div>

                    <p> Personal growth and development </p>
                  </div>

                  

                  <div>
                    <div className={newStyle.Rating}>
                      <span className={newStyle.Rate}> 4.3 </span>
                      <span> <img src="/Star.png" alt="" /> </span>
                      <span> <img src="/Star.png" alt="" /> </span>
                      <span> <img src="/Star.png" alt="" /> </span>
                      <span> <img src="/Star.png" alt="" /> </span>
                      <span> <img src="/Star.png" alt="" /> </span>
                      <span className={newStyle.Text2}>(16,325)</span>

                      
                    </div>

                    <div className={newStyle.Prof}>
                      <div>
                        <img src="/Pics.svg" alt="" />

                      </div>
                      <div className={newStyle.ProfText}>
                        <p>Darlene Robertson <br /> <b> 2001 Sales</b></p>
                        
                        
                      </div>

                    </div>

                    <h5 className={newStyle.free}>Free</h5>



                  </div>
                  </div>


                  

                </div>


            </div>
      </>
     
     );
}
 
export default Video;