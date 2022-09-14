import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    fontFamily: "Inter",
    display: "flex",
    justifyContent: "center",
    color: "white",
    position: "relative",
    display: "flex",
    marginBottom: "10px",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      marginBottom: "5px",
    },
  },
  root: {
    width: "90%",
    padding: "20px",
    fontFamily: "Inter",
    margin: "auto",
    display: "flex",
    justifyContent: "space-evenly",
    background: "#242033",
    color: "white",
    display: "flex",
    marginTop: "10px",
    marginBottom: "20px",
    alignItems: "center",
    borderRadius: "20px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      marginTop: "5px",
      marginBottom: "5px",
      justifyContent: "center",
      margin: "auto",
    },
  },
  details: {
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      margin: "auto",
      width: "90%",
      marginBottom: "25px",
    },
  },
  tab: {
    fontWeight: "400",
    fontSize: "16px",
    textAlign: "left",
    lineHeight: "40px",
  },
  userName: {
    fontSize: "36px",
    fontWeight: "600",
    lineHeight: "40px",
    textAlign: "left",
  },
}));

export default function ArtistStats({ data }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <div className={classes.details}>
          <Typography className={classes.tab} variant="body2">
            Monthly Listeners
          </Typography>
          <Typography className={classes.userName} variant="body1">
            {data?.attributes?.monthly_listners}
          </Typography>
        </div>
        <div className={classes.details}>
          <Typography className={classes.tab} variant="body2">
            Facebook
          </Typography>
          <Typography className={classes.userName} variant="body1">
            {data?.attributes?.facebook_followers}
          </Typography>
        </div>

        <div className={classes.details}>
          <Typography className={classes.tab} variant="body1">
            Instagram
          </Typography>
          <Typography className={classes.userName} variant="body2">
            {data?.attributes?.instagram_followers}
          </Typography>
        </div>

        <div className={classes.details}>
          <Typography className={classes.tab} variant="body1">
            Cumulative Streams
          </Typography>
          <Typography className={classes.userName} variant="body2">
            {data?.attributes?.cumulative_streams}
          </Typography>
        </div>
      </div>
    </div>
  );
}
