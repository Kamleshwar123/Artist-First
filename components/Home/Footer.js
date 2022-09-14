import React from "react";
import { makeStyles } from "@mui/styles";
import ArtistSubmissionButton from "../Buttons/ArtistSubmission";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    fontFamily: "'Inter', sans-serif",
    display: "flex",
    justifyContent: "flex-start",
    alignItems:'center',
    background: "#181818",
    paddingLeft:'30px',
    color: "white",
    height: "84px",
    fontSize: "16px",
    fontWeight: "500",
  },
  artistForm: {
    width: "55%",
    display: "flex",
    justifyContent: "center",
    // height: "300px",
  },
  companyName: {
    fontSize: "12px",
  },
  group: {
    marginLeft: "250px",
    display: "flex",
  },
  tab: {
    marginRight: "50px",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.companyName}>© 2021-22 Artist First Pvt. Ltd</div>
      <div className={classes.group}>
        <div className={classes.tab}>Jobs</div>
        <div className={classes.tab}>Privacy</div>
        <div className={classes.tab}>Press</div>
        <div className={classes.tab}>Contact</div>
      </div>
    </div>
  );
}
