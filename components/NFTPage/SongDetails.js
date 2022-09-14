import { IosShare } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import RegisterNow from "../Buttons/RegisterNow";
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
    marginBottom: "50px",
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
    width: "auto",
    margin: "auto",
    borderRadius: "30px",
    marginBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
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
  description: {
    fontSize: "16px",
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

  videoJs: {
    borderRadius: "5px",
    boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
    borderBottomLeft: "radius: 5px",
    borderBottomRightRadius: "5px",
  },
  registerDiv: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  /* This appears to be needed because the control bar (or its contents) will otherwise break out of the player. */
  vjsControlBar: {
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
  },
}));

export default function Details({ data }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <TopSection data={data} />
      <div className={classes.root}>
        <div className={classes.gallery}>
          <img className={classes.image} src={data?.attributes?.image_url} />
          <div style={{ width: "100%", margin: "auto", textAlign: "center" }}>
            <audio
              style={{ width: "80%", margin: "auto" }}
              id="my-video"
              controls
              preload="auto"
              className={`${classes.videoJs} video-js`}
            >
              <source
                src="https://assets.artistfirst.in/Jas_Manak_e766179174.mp4"
                type="video/mp4"
              />
            </audio>
          </div>
        </div>
        <div className={classes.details}>
          <p className={classes.description}>{data.attributes.Description}</p>
          <div className={classes.titleContainer}>
            <div className={classes.artistDetails}></div>
          </div>
          <div className={classes.askBox}>
            <div>
              <div className={classes.ask}>Tokens</div>
              <div className={classes.price}>
                {data.attributes.total_tokens}
              </div>
            </div>
            <div>
              <div className={classes.ask}>Royalty Share</div>
              <div className={classes.price}>
                {data.attributes.royalty_share}%
              </div>
            </div>
          </div>
          <div className={classes.askBox}>
            <div>
              <div className={classes.ask}>Lowest Price</div>
              <div className={classes.price}>${data.attributes.lowest_ask}</div>
            </div>
            <div>
              <div className={classes.ask}>Highest Price</div>
              <div className={classes.price}>
                ${data.attributes.highest_ask}
              </div>
            </div>
          </div>
          <div className={classes.registerDiv}>
            <RegisterNow id={data?.attributes?.id} />
            <p
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <IosShare />
              Share
            </p>
          </div>
          <p>
            We will inform you as and when the sale of digital tokens will
            start. would suggest to register the interest.
          </p>
        </div>
      </div>
    </div>
  );
}
