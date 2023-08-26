import styles from "../../styles/admin/course.module.css";

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

function preventHorizontalKeyboardNavigation(event, React, KeyboardEvent) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
    }
  }

const CourseVid = () => {
  return (
    <div className={styles.content}>
      <div
        className={styles.videoBox}
        style={{
          backgroundImage: "url(/vidImg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className={styles.volumebox}>
          <div className={styles.volume}>
          <Slider
                  sx={{
                    "& .MuiSlider-thumb": {
                      color: 'white',
                    },
                    "& .MuiSlider-track": {
                      color: 'white',
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
              
                />
            <div className={styles.speaker}>
              <VolumeUpIcon className={styles.speakerIcon} />
            </div>
          </div>
        </div>

        <div className={styles.timerBox}>
          <div className={styles.vidLength}>
            <div className={styles.vidStart}>
              <p>38:56</p>
            </div>
            <Box width={700} marginLeft={2} marginRight={2} className={styles.CountBox}>
                    <Slider  sx={{
                    "& .MuiSlider-thumb": {
                      color: 'white',
                    },
                    "& .MuiSlider-track": {
                      color: 'white',
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
            <div className={styles.vidEnd}>
              <p>1:56:30</p>
            </div>
          </div>

          <div className={styles.tools}>
            <div className={styles.edit}>
              <ModeEditIcon className={styles.Icon} />
            </div>
            <div className={styles.previous}>
              <SkipPreviousIcon className={styles.Icon} />
            </div>

            <div className={styles.play}>
              <PlayArrowIcon className={styles.playIcon} />
            </div>
            <div className={styles.next}>
              <SkipNextIcon className={styles.Icon} />
            </div>
            <div className={styles.settings}>
              <SettingsIcon className={styles.Icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseVid;
