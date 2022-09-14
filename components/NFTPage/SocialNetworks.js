import * as React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    fontFamily: "Inter",
    display: "flex",
    justifyContent: "flex-start",
    color: "white",
    position: "relative",
    alignItems: "flex-start",
  },
  socialImage: {
    height: "166px",
    width: "166px",
    borderRadius: "20px",
    [theme.breakpoints.down("md")]: {
      height: "70px",
      width: "70px",
    },
  },
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "120px",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {},
  },
  features: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "25px",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
  featureInfo: {
    borderRadius: "20px",
    margin: "auto",
    height: "306px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      margin: "10px",
      width: "50%",
    },
  },
}));

export default function SocialNetworks() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <span style={{ fontSize: "34px" }}> Join the community </span>
        <div className={classes.features}>
          <div className={classes.featureInfo}>
            <a rel="noreferrer" href={"https://www.twitter.com"} target="_blank">
              <img
                className={classes.socialImage}
                src="/images/social/twitter.png"
              />
            </a>
          </div>
          <div className={classes.featureInfo}>
            <a
              rel="noreferrer"
              href={"https://www.telegram.com/"}
              target="_blank"
            >
              <img
                className={classes.socialImage}
                src="/images/social/telegram.png"
              />
            </a>
          </div>
          <div className={classes.featureInfo}>
            <a
              rel="noreferrer"
              href={
                "https://discord.com/channels/926044610571173939/926044611040915527"
              }
              target="_blank"
            >
              <img
                className={classes.socialImage}
                src="/images/social/discord.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
