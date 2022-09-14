import React from "react";
import { makeStyles } from "@mui/styles";
import PinkLine from "../../../Icons/PinkLine";
const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "'Inter', sans-serif",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  tagLine: {
    color: "white",
    fontSize: "50px",
    textAlign: "center",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      width: "100%",
      textAlign: "center",
      marginBottom: "10px",
      fontSize: "32px",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    margin: "5% 5%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  stepImage: {
    width: "400px",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      margin: "auto",
    },
  },
  step: {
    display: "flex",
    justifyContent: "space-evenly",
    // alignSelf: "center",
    width: "100%",
    alignItems: "flex-start",
    margin: "10px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      margin: "auto",
      width: "90%",
    },
  },
  stepReverse: {
    // keep step and stepReverse class the exact same , only change the flexdirection
    display: "flex",
    justifyContent: "space-evenly",
    // alignSelf: "center",
    width: "100%",
    alignItems: "flex-start",
    margin: "10px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      margin: "auto",
      width: "90%",
    },
  },
  stepDesc: {
    width: "400px",
    height: "400px",
    display: "flex",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "fit-content",
    },
  },
  stepNo: {
    fontSize: "45px",
    color: "#ffffff",
    fontWeight: "800",
    marginRight: "15px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
      lineHeight: "32px",
      marginRight: "5px",
    },
  },
  stepContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
  },
  stepTitle: {
    fontSize: "50px",
    lineHeight: "60px",
    color: "#ffffff",
    fontWeight: "700",
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
      lineHeight: "32px",
    },
  },
  stepSubTitle: {
    fontSize: "18px",
    color: "#ffffff",
    marginTop: "0",
  },
  stepLine: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
  },
}));

export default function HowItWorks(data) {
  const hiw_title1 = data.data.get("hiw_title1");
  const hiw_desc1 = data.data.get("hiw_desc1");
  const hiw_title2 = data.data.get("hiw_title2");
  const hiw_desc2 = data.data.get("hiw_desc2");
  const hiw_title3 = data.data.get("hiw_title3");
  const hiw_desc3 = data.data.get("hiw_desc3");
  const howitworksheading = data.data.get("howitworksheading");

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.tagLine}> {howitworksheading}</h1>
      <div className={classes.container}>
        <div className={classes.stepReverse}>
          <img
            className={classes.stepImage}
            src="/images/home/steps/step1.png"
          />
          <div className={classes.stepDesc}>
            <div className={classes.stepNo}>1.</div>
            <div className={classes.stepContent}>
              <div className={classes.stepTitle}>{hiw_title1}</div>
              <img
                className={classes.stepLine}
                src="/images/home/steps/line.png"
              />
              <p className={classes.stepSubTitle}>{hiw_desc1}</p>
            </div>
          </div>
        </div>

        <div className={classes.step}>
          <div className={classes.stepDesc}>
            <div className={classes.stepNo}>2.</div>
            <div className={classes.stepContent}>
              <div className={classes.stepTitle}>{hiw_title2}</div>
              <img
                className={classes.stepLine}
                src="/images/home/steps/line.png"
              />
              <p className={classes.stepSubTitle}>{hiw_desc2}</p>
            </div>
          </div>
          <img
            className={classes.stepImage}
            src="/images/home/steps/step2.png"
          />
        </div>
        <div className={classes.stepReverse}>
          <img
            className={classes.stepImage}
            src="/images/home/steps/step3.png"
          />
          <div className={classes.stepDesc}>
            <div className={classes.stepNo}>3.</div>
            <div className={classes.stepContent}>
              <div className={classes.stepTitle}>{hiw_title3}</div>
              <img
                className={classes.stepLine}
                src="/images/home/steps/line.png"
              />
              <p className={classes.stepSubTitle}>{hiw_desc3}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
