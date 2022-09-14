import { makeStyles } from "@mui/styles";
import AssetCard from "./AssetCard/Card";
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

export default function Assets({ data }) {
  const classes = useStyles();
  data=data?.attributes?.artist_assets?.data;
  /* const songs = [
    {
      id: "1",
      songName: "Dance Meri Rani",
      views: "50M+ Views on YouTube",
      lowestAsk: "$2.21",
      availableTokens: "99/140",
      image:
        "https://d2q23p4t0ij9e0.cloudfront.net/Rectangle_187_49676c2885.png?updated_at=2022-02-19T10:20:16.332Z",
    },
    {
      id: "2",
      songName: "Black",
      views: "55M+ Views on YouTube",
      lowestAsk: "$2.21",
      availableTokens: "0/180",
      image:
        "https://d2q23p4t0ij9e0.cloudfront.net/Rectangle_188_123996c4dc.png?updated_at=2022-02-19T10:20:06.331Z",
    },
    {
      id: "3",
      songName: "Ik Gera",
      views: "25M+ Views on YouTube",
      lowestAsk: "$6.21",
      availableTokens: "55/130",
      image:
        "https://d2q23p4t0ij9e0.cloudfront.net/Rectangle_189_1e8db3d057.png?updated_at=2022-02-19T10:20:22.364Z",
    },
  ]; */
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Songs</h1>

      <div className={classes.root}>
        {data.length > 0 && data?.map((arrayItem) => {
          return <AssetCard key={arrayItem.id} arrayItem={arrayItem} />;
        })}
      </div>
    </div>
  );
}
