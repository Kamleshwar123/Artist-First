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
      justifyContent: "center",
    },
  },
  root: {
    width: "100%",
    background: "#242033",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "50px",
    marginBottom: "50px",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      margin: "auto",
      justifyContent: "center",
    },
  },
  desc: {
    fontSize: "24px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
      textAlign: "center",
    },
  },
  features: {
    width: "60%",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "auto",
    },
  },

  featureInfo: {
    border: "1px solid #FFFFFF",
    borderRadius: "20px",
    margin: "auto",
    margin: "30px",
    width: "30%",
    height: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      margin: "10px",
      width: "40%",
    },
  },
  featureTitle: {
    fontSize: "14px",
    fontWeight: "400",
    marginBottom: "5px",
    textAlign: "center",
    margin: "10px 20px",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
      marginBottom: "4px",
      textAlign: "center",
      margin: "10px",
    },
  },
  featureContent: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "10px",
    textAlign: "center",
    margin: "10px 20px",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      marginBottom: "4px",
      textAlign: "center",
      margin: "10px",
    },
  },
  doughnut: {
    padding: "50px",
    height: "450px",
    width: "450px",
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      width: "100%",
      textAlign: "center",
      marginBottom: "10px",
    },
  },
}));

export default function Information({ data }) {
  const classes = useStyles();
  var total = 0;
  var arr = [];
  data.attributes.asset_tiers.data.forEach((item, index, arr1) => {
    console.log(item.attributes.revenue_share);
    arr.push({
      percentage:
        item.attributes.revenue_share * item.attributes.tier_max_supply,
      label: item.attributes.asset_tier_mnemonics,
    });
    total += item.attributes.revenue_share * item.attributes.tier_max_supply;
    if (arr1.length == index + 1) {
      arr.push({
        percentage: 100 - total,
        label: "Artist Share",
      });
    }
  });
  // const result = Math.round((data.expense / data.income) * 100)
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Information</h1>
      <p className={classes.desc}>
        When you purchase a token in support of an artist, you own a part of the
        streaming rights with them. This means that as the song streams, you
        will get a percentage of the royalties that accrue.
      </p>
      <div className={classes.root}>
        <div className={classes.features}>
          <div className={classes.featureInfo}>
            <div className={classes.featureTitle}>Edition</div>
            <div className={classes.featureContent}>
              {data.attributes.Title}
            </div>
          </div>
          <div className={classes.featureInfo}>
            <div className={classes.featureTitle}>Contract Address</div>
            <div className={classes.featureContent}>
              {" "}
              <a
                rel="noreferrer"
                href={data.attributes.contract_address}
                target="_blank"
              >
                {data.attributes.contract_address.substring(39, 45)}...
                {data.attributes.contract_address.substring(77, 81)}
              </a>
            </div>
          </div>
          <div className={classes.featureInfo}>
            <div className={classes.featureTitle}>Amount Raised</div>
            <div className={classes.featureContent}>
              ${data.attributes.amount_to_be_raised}
            </div>
          </div>
          <div className={classes.featureInfo}>
            <div className={classes.featureTitle}>Legal</div>
            <div className={classes.featureContent}>
              {" "}
              <a
                rel="noreferrer"
                href={data.attributes.legal_contract}
                target="_blank"
              >
                Read Now
              </a>{" "}
            </div>
          </div>
          <div className={classes.featureInfo}>
            <div className={classes.featureTitle}>Blockchain</div>
            <div className={classes.featureContent}>
              {data.attributes.blockchain}
            </div>
          </div>
          <div className={classes.featureInfo}>
            <div className={classes.featureTitle}>OpenSea Link</div>
            <div className={classes.featureContent}>
              {" "}
              <a
                rel="noreferrer"
                href="https://testnets.opensea.io/collection/unidentified-contract-uhtplmci2j"
                target="_blank"
              >
                Click here.
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "60%",
          }}
        >
          <div className={classes.doughnut}>
            <span>Royalities</span>
            <Doughnut label={arr} />
          </div>
        </div>
      </div>
    </div>
  );
}
