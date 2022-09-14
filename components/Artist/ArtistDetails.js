import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TopSection from "./TopSection";
const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    fontFamily: "Inter",
    display: "flex",
    justifyContent: "flex-start",
    color: "white",
    position: "relative",
    display: "flex",
    marginBottom: "10px",
    alignItems: "flex-start",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      marginBottom: "5px",
    },
  },
  root: {
    width: "100%",
    fontFamily: "Inter",
    display: "flex",
    justifyContent: "flex-start",
    color: "white",
    position: "relative",
    display: "flex",
    marginTop: "50px",
    marginBottom: "50px",
    alignItems: "flex-start",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      marginTop: "5px",
      marginBottom: "5px",
    },
  },
  gallery: {
    width: "50%",
    minHeight: "50vh",
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "5% 0%",
    },
    overflow: "hidden",
  },
  details: {
    width: "50%",
    minHeight: "50vh",
    margin: "0% 2%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      margin: "auto",
      width: "90%",
    },
  },
  desc: {
    margin: "5% 0%",
  },
  image: {
    maxWidth: "450px",
    maxHeight: "450px",
    height: "auto",
    width: "100%",
    margin: "auto",
    borderRadius: "30px",
    marginBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  userName: {
    color: "#E14084",
  },
  titleContainer: {
    display: "flex",
    width: "100%",
  },
  name: {
    fontSize: "2.6rem",
    margin: "0",
    padding: "0",
    lineHeight: "2.8rem",
    fontWeight: "700",
    marginTop: "2px",
  },
  artistDetails: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: "10px",
    width: "100%",
  },
  artistNameBox: {
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
  },
  artistName: {
    marginLeft: "10px",
    fontWeight: "600",
    fontSize: "1.3rem",
  },
  description: {
    fontSize: "20px",
    textAlign: "justify",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  askBox: {
    display: "flex",
    alignItems: "center",
    marginTop: "15px",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "15px",
    maxWidth: "450px",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  ask: {
    fontSize: "24px",
    textAlign: "left",
    fontWeight: "normal",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      textAlign: "center",
      fontWeight: "600",
    },
  },
  price: {
    fontSize: "36px",
    textAlign: "left",
    fontWeight: "700",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      textAlign: "center",
    },
  },
}));

export default function ArtistDetails({ data }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <TopSection data={data} />
      <div className={classes.root}>
        <div className={classes.gallery}>
          <img className={classes.image} src={data?.attributes?.image_thumbnail} />
        </div>
        <div className={classes.details}>
          <Typography variant="h2">{data?.attributes?.name}</Typography>
          <Typography className={classes.userName} variant="h6">
            @jas_manak
          </Typography>
          <p className={classes.description}>
            <span style={{ fontSize: "1.9rem", fontWeight: "600" }}>“</span>
            {data?.attributes?.description}
          </p>
          <div className={classes.titleContainer}>
            <div className={classes.artistDetails}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
