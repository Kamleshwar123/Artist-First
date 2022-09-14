import { makeStyles } from "@mui/styles";
import moment from "moment";
import { useEffect, useState } from "react";
import SelectAndBuy from "../Buttons/SelectAndBuy";
import Tier from "./Tier";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    fontFamily: "Inter",
    display: "flex",
    justifyContent: "flex-start",
    color: "white",
    position: "relative",
    display: "flex",
    marginBottom: "50px",
    alignItems: "flex-start",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
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
  thumbnails: {
    display: "flex",
    width: "23%",
    overflow: "hidden",
    flexDirection: "column",
  },
  thumbnailImg: {
    margin: "5px",
    cursor: "pointer",
  },
  image: {
    maxWidth: "400px",
    maxHeight: "450px",

    height: "auto",
    width: "auto",
    margin: "auto",
  },
  date: {
    writingMode: "vertical-lr",
    borderRight: "1px solid rgba(255, 255, 255, 0.5)",
    paddingRight: "8px",
    marginRight: "4px",
    height: "fit-content",
    textTransform: "uppercase",
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
  categoryBox: {
    display: "flex",
    alignItems: "center",
    marginTop: "35px",
    justifyContent: "space-between",
    width: "100%",
    borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
    paddingBottom: "30px",
    marginBottom: "30px",
  },
  gold: {
    color: "#FFAB2D",
    marginLeft: "20px",
    fontSize: "16px",
  },
  privilegesBox: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  askBox: {
    display: "flex",
    alignItems: "center",
    marginTop: "35px",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "30px",
  },
  ask: {
    fontSize: "14px",
  },
  price: {
    fontSize: "2.3rem",
    fontWeight: "700",
  },
}));

export default function Details({ data, tier, mintingData }) {
  const classes = useStyles();
  const [activeImg, setActiveImg] = useState(
    data?.attributes?.creatives?.data[0]?.attributes?.url
  );
  useEffect(() => {
    setActiveImg(data?.attributes?.creatives?.data[0]?.attributes?.url);
  }, [data]);
  return (
    <div className={classes.root}>
      <div className={classes.gallery}>
        <div className={classes.thumbnails}>
          {data?.attributes?.creatives.data.map((item, index) => (
            <img
              key={index}
              onClick={() => setActiveImg(item.attributes.url)}
              className={classes.thumbnailImg}
              src={item.attributes.url}
            />
          ))}
        </div>
        <img className={classes.image} src={activeImg} />
      </div>
      <div className={classes.details}>
        <div className={classes.titleContainer}>
          <span className={classes.date}>
            {moment(String(mintingData?.attributes?.createdAt)).format(
              "MMM DD, YYYY"
            )}
          </span>
          <div className={classes.artistDetails}>
            <h2
              className={classes.name}
            >{`${data?.attributes?.Title} #${mintingData?.attributes?.token_number}`}</h2>
            <div className={classes.artistNameBox}>
              <img src="/images/nft/artist.png" />
              <span
                className={classes.artistName}
              >{`${data?.attributes?.artists?.data[0]?.attributes?.name}`}</span>
            </div>
          </div>
        </div>
        <Tier tier={tier} data={data} />
        <div className={classes.askBox}>
          <div>
            <div className={classes.ask} style={{ display: "flex" }}>
              Lowest Ask
            </div>
            <div
              className={classes.price}
            >{`$${mintingData?.attributes?.highest_price}`}</div>
          </div>
          <div>
            <div className={classes.ask} style={{ display: "flex" }}>
              Highest Ask
            </div>
            <div
              className={classes.price}
            >{`$${mintingData?.attributes?.lowest_price}`}</div>
          </div>
        </div>
        <SelectAndBuy />
      </div>
    </div>
  );
}
