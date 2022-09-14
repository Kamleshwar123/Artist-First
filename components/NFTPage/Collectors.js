import { makeStyles } from "@mui/styles";
import Doughnut from "./Doughnut";
const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    fontFamily: "Inter",
    display: "flex",
    justifyContent: "flex-start",
    color: "white",
    position: "relative",
    display: "flex",
    marginBottom: "50px",
    alignItems: "flex-start",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      width: "90%",
      margin: "auto",
    },
  },
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "50px",
    marginBottom: "50px",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {},
  },
  desc: { fontSize: "24px" },
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
    margin: "20px",
    height: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      margin: "10px",
      width: "50%",
    },
  },
  platinumImage: {
    height: "200px",
    width: "200ox",
    borderRadius: "20px",
    [theme.breakpoints.down("md")]: {
      height: "100px",
      width: "100ox",
    },
  },
  goldImage: {
    height: "130px",
    width: "130px",
    borderRadius: "20px",
    [theme.breakpoints.down("md")]: {
      height: "70px",
      width: "70ox",
    },
  },
  platinumCollectors: {
    height: "200px",
    width: "200px",
    fontSize: "25px",
    borderRadius: "20px",
    background: "linear-gradient(90.78deg, #B237F6 3.91%, #E94177 96.03%)",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "600",
    [theme.breakpoints.down("md")]: {
      height: "100px",
      width: "100ox",
    },
  },
  goldCollectors: {
    height: "130px",
    width: "130px",
    fontSize: "25px",
    borderRadius: "20px",
    background: "linear-gradient(90.78deg, #B237F6 3.91%, #E94177 96.03%)",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "600",
  },
}));

export default function Collectors() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1>Collectors</h1>
      <div className={classes.root}>
        <div className={classes.features}>
          <div className={classes.featureInfo}>
            <img
              className={classes.platinumImage}
              src="/images/collectors/1.png"
            />
          </div>
          <div className={classes.featureInfo}>
            <img
              className={classes.platinumImage}
              src="/images/collectors/2.png"
            />
          </div>
          <div className={classes.featureInfo}>
            <img
              className={classes.platinumImage}
              src="/images/collectors/3.png"
            />
          </div>
        </div>
        <div className={classes.features}>
          <div className={classes.featureInfo}>
            <img
              className={classes.platinumImage}
              src="/images/collectors/4.png"
            />
          </div>
          <div className={classes.featureInfo}>
            <img
              className={classes.platinumImage}
              src="/images/collectors/5.png"
            />
          </div>
          <div className={classes.featureInfo}>
            <img
              className={classes.platinumImage}
              src="/images/collectors/6.png"
            />
          </div>
          <div className={classes.platinumCollectors}>
            {" "}
            +500 <br />
            Platinum
          </div>
        </div>
        {/* <br/> */}
        <div className={classes.features}>
          <div className={classes.featureInfo}>
            <img className={classes.goldImage} src="/images/collectors/1.png" />
          </div>
          <div className={classes.featureInfo}>
            <img className={classes.goldImage} src="/images/collectors/2.png" />
          </div>
          <div className={classes.featureInfo}>
            <img className={classes.goldImage} src="/images/collectors/3.png" />
          </div>
          <div className={classes.featureInfo}>
            <img className={classes.goldImage} src="/images/collectors/1.png" />
          </div>
          <div className={classes.featureInfo}>
            <img className={classes.goldImage} src="/images/collectors/2.png" />
          </div>
          <div className={classes.featureInfo}>
            <img className={classes.goldImage} src="/images/collectors/3.png" />
          </div>
        </div>
        <div className={classes.features}>
          <div className={classes.featureInfo}>
            <img className={classes.goldImage} src="/images/collectors/1.png" />
          </div>
          <div className={classes.featureInfo}>
            <img className={classes.goldImage} src="/images/collectors/2.png" />
          </div>
          <div className={classes.featureInfo}>
            <img className={classes.goldImage} src="/images/collectors/3.png" />
          </div>
          <div className={classes.featureInfo}>
            <img className={classes.goldImage} src="/images/collectors/1.png" />
          </div>
          <div className={classes.featureInfo}>
            <img className={classes.goldImage} src="/images/collectors/2.png" />
          </div>
          <div className={classes.goldCollectors}>
            + 500 <br />
            Gold{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
