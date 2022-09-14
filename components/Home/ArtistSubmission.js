import React from "react";
import { makeStyles } from "@mui/styles";
import ArtistSubmissionButton from "../Buttons/ArtistSubmission";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    fontFamily: "'Inter', sans-serif",
    display: "flex",
    justifyContent: "flex-start",
    color: "white",
    position: "relative",
    overflow: "hidden",
  },
  info: {
    width: "60%",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  infoDetails: {
    width: "100%",
    margin: "20% 10%",
  },

  artistName: {
    margin: "0",
    fontSize: "50px",
  },
  artistDesc: {
    fontSize: "24px",
  },
  image: {
    position: "absolute",
    height: "650px",
    right: "0",
    bottom: "-80px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

export default function ArtistSubmission(data) {
  const areyouartisttitle = data.data.get("areyouartisttitle");
  const areyouartisdesc = data.data.get("areyouartisdesc");

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.info}>
        <div className={classes.infoDetails}>
          <h2 className={classes.artistName}>{areyouartisttitle}</h2>
          <p className={classes.artistDesc}>{areyouartisdesc}</p>
          <ArtistSubmissionButton />
        </div>
      </div>
      <img className={classes.image} src="/images/home/footer.png" />
    </div>
  );
}
