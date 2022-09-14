import { makeStyles } from "@mui/styles";
import NFTCard from "./NFTCard/Card";
import { useMediaQuery } from "@mui/material";

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
    },
  },
  root: {
    width: "100%",
    fontFamily: "Inter",
    display: "flex",
    justifyContent: "space-between",
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
      margin: "auto",
    },
  },
  gallery: {
    width: "42%",
    minHeight: "50vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0% 2%",
    [theme.breakpoints.down("sm")]: {
      margin: "5% 0%",
    },
    overflow: "hidden",
  },

  gallery2: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
  },

  details: {
    width: "50%",
    minHeight: "50vh",
    margin: "0% 2%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      margin: "5% 0%",
    },
  },
  desc: {
    margin: "5% 0%",
  },
  image: {
    maxWidth: "450px",
    maxHeight: "450px",
    height: "auto",
    width: "auto",
    margin: "auto",
    borderRadius: "30px",
  },
  date: {
    writingMode: "vertical-lr",
    borderRight: "1px solid rgba(255, 255, 255, 0.5)",
    paddingRight: "8px",
    marginRight: "4px",
    height: "fit-content",
    textTransform: "uppercase",
    color: "#E14084",
  },
  nft: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
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

export default function Tokens({ data }) {
  const classes = useStyles();
  data = data.data;
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Digital Tokens</h1>

      <div className={classes.root}>
        {isMobile
          ? data.map((arrayItem) => {
              return <NFTCard key={arrayItem.id} arrayItem={arrayItem} />;
            })
          : data.map((arrayItem) => {
              return (
                <div
                  key={arrayItem.id}
                  className={classes.nft}
                  style={{ alignItems: "center" }}
                >
                  <img
                    style={{ width: "50%" }}
                    src={arrayItem?.attributes?.asset_image_url}
                  ></img>

                  <div className={classes.gallery2}>
                    <div style={{ alignItems: "left" }}>
                      <p>{arrayItem?.attributes?.asset_tier_mnemonics} </p>
                    </div>
                    <div style={{ alignItems: "left" }}>
                      <p>$ {arrayItem?.attributes?.starting_bid} </p>
                    </div>
                  </div>
                  <div className={classes.gallery2}>
                    <div style={{ alignItems: "left" }}>
                      <p>
                        {arrayItem?.attributes?.tier_current_supply} /
                        {arrayItem?.attributes?.tier_max_supply} Available
                        Tokens
                      </p>
                    </div>
                  </div>

                  <div className={classes.gallery2}>
                    <svg
                      width="15"
                      height="10"
                      viewBox="0 0 15 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.6539 0.223338L5.4208 8.18269L1.33273 4.56387H1.33259C1.17936 4.42225 0.973637 4.34639 0.761846 4.35316C0.549934 4.36007 0.349837 4.44909 0.206789 4.60028C0.0637278 4.75133 -0.0104835 4.95195 0.00119669 5.15653C0.0128779 5.36113 0.109351 5.5526 0.268768 5.68755L4.91235 9.79987C5.06201 9.93246 5.25881 10.0041 5.46178 9.99982C5.66475 9.99557 5.85827 9.91572 6.00188 9.77702L14.7691 1.30138V1.30124C14.9682 1.10873 15.046 0.82801 14.9732 0.564966C14.9002 0.301908 14.6877 0.0965263 14.4156 0.0259527C14.1435 -0.0444611 13.8531 0.0307352 13.654 0.223246L13.6539 0.223338Z"
                        fill="#E14084"
                      />
                    </svg>
                    <div style={{ width: "100%" }}>
                      <span style={{ paddingLeft: "9px" }}>
                        {arrayItem?.attributes?.Privilege1}
                      </span>
                    </div>
                  </div>

                  <div className={classes.gallery2}>
                    <svg
                      width="15"
                      height="10"
                      viewBox="0 0 15 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.6539 0.223338L5.4208 8.18269L1.33273 4.56387H1.33259C1.17936 4.42225 0.973637 4.34639 0.761846 4.35316C0.549934 4.36007 0.349837 4.44909 0.206789 4.60028C0.0637278 4.75133 -0.0104835 4.95195 0.00119669 5.15653C0.0128779 5.36113 0.109351 5.5526 0.268768 5.68755L4.91235 9.79987C5.06201 9.93246 5.25881 10.0041 5.46178 9.99982C5.66475 9.99557 5.85827 9.91572 6.00188 9.77702L14.7691 1.30138V1.30124C14.9682 1.10873 15.046 0.82801 14.9732 0.564966C14.9002 0.301908 14.6877 0.0965263 14.4156 0.0259527C14.1435 -0.0444611 13.8531 0.0307352 13.654 0.223246L13.6539 0.223338Z"
                        fill="#E14084"
                      />
                    </svg>
                    <div style={{ width: "100%" }}>
                      <span style={{ paddingLeft: "9px" }}>
                        {arrayItem?.attributes?.Privilege2}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}
