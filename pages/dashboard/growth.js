import React, { useState } from "react";
import { SideBar } from "../../components/dashboard/Sidebar/AdminSideBar";
import TopNav from "../../components/dashboard/TopNav/TopNav";
import styles from "../../styles/admin/growth.module.css";
import darkStyles from "../../styles/admin/darkGrowth.module.css";

import useWindowDimensions from "../../utils/hooks/useWindowDimension";
import CircleIcon from "@mui/icons-material/Circle";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SettingsIcon from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useEffect } from "react";

const Growth = ({ darkMode }) => {
  let newStyle = darkMode ? darkStyles : styles;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showFilterPeriod, setShowFilterPeriod] = useState(false);
  const [width, height] = useWindowDimensions();

  const isMobile = () => {
    if (width <= 1240) return true;
    else false;
  };

  const toggleSidebar = (condition) => {
    if (condition) {
      setSidebarOpen(false);
    } else setSidebarOpen(!sidebarOpen);
  };

  const createNewProduct = () => {};
  function preventHorizontalKeyboardNavigation(event, React, KeyboardEvent) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
    }
  }

  useEffect(() => {
    if (darkMode) newStyle = darkStyles;
    else newStyle = styles;
  }, [darkMode]);

  return (
    <div className={newStyle.contentArea}>
      <p className={newStyle.vidText}>
        Videos/<b>Hacking Growth...</b>{" "}
      </p>

      <div className={newStyle.mainBox}>
        <div className={newStyle.subContent}>
          <div
            className={newStyle.videoBox}
            style={{
              backgroundImage: "url(/vidImg.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className={newStyle.volumebox}>
              <div className={newStyle.volume}>
                <Slider
                  sx={{
                    "& .MuiSlider-thumb": {
                      color: darkMode ? 'black' : 'white',
                    },
                    "& .MuiSlider-track": {
                      color: darkMode ? 'black' : 'white',
                    },
                    "& .MuiSlider-rail": {
                      color: "#acc4e4",
                    },
                    "& .MuiSlider-active": {
                      color: "green",
                    },
                    '& input[type="range"]': {
                      WebkitAppearance: "slider-vertical",
                    },
                  }}
                  size="small"
                  orientation="vertical"
                  defaultValue={30}
                  aria-label="Temperature"
                  valueLabelDisplay="auto"
                  onKeyDown={preventHorizontalKeyboardNavigation}
                  className={newStyle.VBar}
                />

                {/* <div className={newStyle.volumeBar}>
                  <div className={newStyle.volumeBar1}></div>
                </div> */}
                <div className={newStyle.speaker}>
                  <VolumeUpIcon className={newStyle.speakerIcon} />
                </div>
              </div>
            </div>

            <div className={newStyle.timerBox}>
              <div className={newStyle.vidLength}>
                <div className={newStyle.vidStart}>
                  <p>38:56</p>
                </div>
                <div className={newStyle.vidtimerBox}>
                  <Box width='100%' marginLeft={1} marginRight={1} className={newStyle.CountBox}>
                    <Slider  sx={{
                    "& .MuiSlider-thumb": {
                      color: darkMode ? 'black' : 'white',
                    },
                    "& .MuiSlider-track": {
                      color: darkMode ? 'black' : 'white',
                    },
                    "& .MuiSlider-rail": {
                      color: "black",
                    },
                    "& .MuiSlider-active": {
                      color: "green",
                    },
                    '& input[type="range"]': {
                      WebkitAppearance: "slider-vertical",
                    },
                  }}
                      defaultValue={50}
                      aria-label="Default"
                      valueLabelDisplay="auto"
                    />
                  </Box>
                  {/* <div className={newStyle.vidtimer}>
                    <div className={newStyle.vidtimer1}></div>
                    <div className={newStyle.vidtimer2}></div>
                  </div> */}
                </div>
                <div className={newStyle.vidEnd}>
                  <p>1:56:30</p>
                </div>
              </div>

              <div className={newStyle.tools}>
                <div className={newStyle.edit}>
                  <ModeEditIcon className={newStyle.Icon} style = {{ color: darkMode ? 'white' : 'black', background: darkMode ? '#0D0D0D' : '#C4C4C4'}} />
                </div>
                <div className={newStyle.previous}>
                  <SkipPreviousIcon className={newStyle.Icon} style = {{ color: darkMode ? '#938A8A' : 'black', background: darkMode ? '#0D0D0D' : '#C4C4C4'}} />
                </div>

                <div className={newStyle.play}>
                  <PlayArrowIcon className={newStyle.playIcon}  />
                </div>
                <div className={newStyle.next}>
                  <SkipNextIcon className={newStyle.Icon} style = {{ color: darkMode ? '#938A8A' : 'black', background: darkMode ? '#0D0D0D' : '#C4C4C4'}} />
                </div>
                <div className={newStyle.settings}>
                  <SettingsIcon className={newStyle.Icon} style = {{ color: darkMode ? 'white' : 'black', background: darkMode ? '#0D0D0D' : '#C4C4C4'}} />
                </div>
              </div>
            </div>
          </div>

          <div className={newStyle.textBox}>
            <p className={newStyle.textBoxText}>
              Hacking Growth<b>#Growth</b>{" "}
            </p>
            <div className={newStyle.text}>
              <p>
                Once an unconventional approach, growth hacking refers to the
                process of using analyses and rapid tests to enact high-impact
                growth opportunities. In this Video Sean Ellis and Morgan Brown
                share their experiences curating this strategy, as well as how
                this approach launched now-ubiquitous businesses like Airbnb to
                their current positions. must-read for any marketer hoping to
                grow their customer base, this marketing book is also available
                in audio form. <br />
                Once an unconventional approach, growth hacking refers to the
                process of using analyses and rapid tests to enact high-impact
                growth opportunities. In this
              </p>

              <p>
                Once an unconventional approach, growth hacking refers to the
                process of using analyses and rapid tests to enact high-impact
                growth opportunities. In this Video Sean Ellis and Morgan Brown
                share their experiences curating this strategy, as well as how
                this approach launched now-ubiquitous businesses like Airbnb to
                their current positions. must-read for any marketer hoping to
                grow their customer base, this marketing book is also available
                in audio form. <br />
                Once an unconventional approach, growth hacking refers to the
                process of using analyses and rapid tests to enact high-impact
                growth opportunities. In this
              </p>

              <p>
                Once an unconventional approach, growth hacking refers to the
                process of using analyses and rapid tests to enact high-impact
                growth opportunities. In this Video Sean Ellis and Morgan Brown
                share their experiences curating this strategy, as well as how
                this approach launched now-ubiquitous businesses like Airbnb to
                their current positions. must-read for any marketer hoping to
                grow their customer base, this marketing book is also available
                in audio form. <br />
                Once an unconventional approach, growth hacking refers to the
                process of using analyses and rapid tests to enact high-impact
                growth opportunities. In this
              </p>

              <p>
                Once an unconventional approach, growth hacking refers to the
                process of using analyses and rapid tests to enact high-impact
                growth opportunities. In this Video Sean Ellis and Morgan Brown
                share their experiences curating this strategy, as well as how
                this approach launched now-ubiquitous businesses like Airbnb to
                their current positions. must-read for any marketer hoping to
                grow their customer base, this marketing book is also available
                in audio form. <br />
                Once an unconventional approach, growth hacking refers to the
                process of using analyses and rapid tests to enact high-impact
                growth opportunities. In this
              </p>
            </div>
          </div>
        </div>

        <div className={newStyle.leftBox}>
          <div className={newStyle.innerLeft}>
            <h3>
              Course Module <br /> <b> Track your progress </b>{" "}
            </h3>
          </div>

          <div className={newStyle.courseList}>
            <div className={newStyle.courseElement1}>
              <CircleIcon className={newStyle.circleIcon} />
            </div>
            <div className={newStyle.courseElement2}>
              <div className={newStyle.courseTitle}>
                <h2>
                  Section 1 <br /> <b> Introduction to hack </b>
                </h2>
              </div>
            </div>

            <div className={newStyle.courseElement3}>
              <KeyboardArrowRightIcon className={newStyle.arrowIcon} />
            </div>
          </div>
          <br />
          <div className={newStyle.courseList}>
            <div className={newStyle.courseElement1}>
              <CircleIcon className={newStyle.circleIcon} />
            </div>
            <div className={newStyle.courseElement2}>
              <div className={newStyle.courseTitle}>
                <h2>
                  Section 2 <br /> <b> Introduction to hack </b>
                </h2>
              </div>
            </div>

            <div className={newStyle.courseElement3}>
              <KeyboardArrowRightIcon className={newStyle.arrowIcon} />
            </div>
          </div>
          <br />
          <div className={newStyle.courseList}>
            <div className={newStyle.courseElement1}>
              <CircleIcon className={newStyle.circleIcon1} />
            </div>
            <div className={newStyle.courseElement2}>
              <div className={newStyle.courseTitle}>
                <h2>
                  Section 3 <br /> <b> Introduction to hack </b>
                </h2>
              </div>
            </div>

            <div className={newStyle.courseElement3}>
              <KeyboardArrowRightIcon className={newStyle.arrowIcon} />
            </div>
          </div>

          <br />
          <div className={newStyle.courseList}>
            <div className={newStyle.courseElement1}>
              <CircleIcon className={newStyle.circleIcon1} />
            </div>
            <div className={newStyle.courseElement2}>
              <div className={newStyle.courseTitle}>
                <h2>
                  Section 4 <br /> <b> Introduction to hack </b>
                </h2>
              </div>
            </div>

            <div className={newStyle.courseElement3}>
              <KeyboardArrowRightIcon className={newStyle.arrowIcon} />
            </div>
          </div>
          <br />
          <div className={newStyle.courseList}>
            <div className={newStyle.courseElement1}>
              <CircleIcon className={newStyle.circleIcon1} />
            </div>
            <div className={newStyle.courseElement2}>
              <div className={newStyle.courseTitle}>
                <h2>
                  Section 5 <br /> <b> Introduction to hack </b>
                </h2>
              </div>
            </div>

            <div className={newStyle.courseElement3}>
              <KeyboardArrowRightIcon className={newStyle.arrowIcon} />
            </div>
          </div>
          <br />
          <div className={newStyle.courseList}>
            <div className={newStyle.courseElement1}>
              <CircleIcon className={newStyle.circleIcon1} />
            </div>
            <div className={newStyle.courseElement2}>
              <div className={newStyle.courseTitle}>
                <h2>
                  Section 6 <br /> <b> Introduction to hack </b>
                </h2>
              </div>
            </div>

            <div className={newStyle.courseElement3}>
              <KeyboardArrowRightIcon className={newStyle.arrowIcon} />
            </div>
          </div>
          <br />
          <div className={newStyle.courseList}>
            <div className={newStyle.courseElement1}>
              <CircleIcon className={newStyle.circleIcon1} />
            </div>
            <div className={newStyle.courseElement2}>
              <div className={newStyle.courseTitle}>
                <h2>
                  Section 7 <br /> <b> Introduction to hack </b>
                </h2>
              </div>
            </div>

            <div className={newStyle.courseElement3}>
              <KeyboardArrowRightIcon className={newStyle.arrowIcon} />
            </div>
          </div>
          <br />
          <div className={newStyle.courseList}>
            <div className={newStyle.courseElement1}>
              <CircleIcon className={newStyle.circleIcon1} />
            </div>
            <div className={newStyle.courseElement2}>
              <div className={newStyle.courseTitle}>
                <h2>
                  Section 8 <br /> <b> Introduction to hack </b>
                </h2>
              </div>
            </div>

            <div className={newStyle.courseElement3}>
              <KeyboardArrowRightIcon className={newStyle.arrowIcon} />
            </div>
          </div>
          <br />
          <div className={newStyle.courseList}>
            <div className={newStyle.courseElement1}>
              <CircleIcon className={newStyle.circleIcon1} />
            </div>
            <div className={newStyle.courseElement2}>
              <div className={newStyle.courseTitle}>
                <h2>
                  Section 9 <br /> <b> Introduction to hack </b>
                </h2>
              </div>
            </div>

            <div className={newStyle.courseElement3}>
              <KeyboardArrowRightIcon className={newStyle.arrowIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Growth;
