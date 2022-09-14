import React from "react";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    fontFamily: "'Inter', sans-serif",
    display: "flex",
    justifyContent: "flex-start",
    background: "green",
    color: "white",
  },
  artistImg: {
    width: "40%",
    background: "#211c31",
    backgroundImage: "url('/images/home/artist.png')",
  },
  info: {
    width: "60%",
    background: "#211c31",
    display: "flex",
    justifyContent: "center",
  },
  infoDetails: {
    width: "100%",
    margin: "20% 20%",
  },
  artistGold: {
    width: "120px",
    height: "auto",
  },
  artistName: {
    margin: "0",
    fontSize: "50px",
  },
  artistDesc: {
    maxWidth: "500px",
    fontSize: "24px",
  },
  artistStats: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  scoreDetails: {
    marginRight: "25px",
  },
  scoreTitle: {
    fontSize: "13px",
    fontWeight: "300",
    fontFamily: "Roboto",
  },
  score: {
    fontSize: "26px",
    fontWeight: "700",
  },
  musicIcon: {
    margin: "5px",
    marginTop: "2px",
    marginRight: "45px",
  },
}));

export default function Artist() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.artistImg}></div>
      <div className={classes.info}>
        <div className={classes.infoDetails}>
          <img
            className={classes.artistGold}
            src="/images/home/artist-gold.png"
          />
          <h2 className={classes.artistName}>
            Arjan <span style={{ fontWeight: "400" }}>Singh</span>
          </h2>
          <p className={classes.artistDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className={classes.artistStats}>
            <div className={classes.scoreDetails}>
              <div className={classes.scoreTitle}>Overall Score</div>
              <div className={classes.score}>90</div>
            </div>
            <img
              className={classes.musicIcon}
              src="/images/home/musicIcon.png"
            />
            <div className={classes.scoreDetails}>
              <div className={classes.scoreTitle}>Social Presence</div>
              <div className={classes.score}>95</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
