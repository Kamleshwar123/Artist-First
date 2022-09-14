import { makeStyles } from "@mui/styles";
import moment from "moment";
import { useEffect, useState } from "react";
const useStyles = makeStyles((theme) => ({
  top: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      lineHeight: "24px",
    },
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
      lineHeight: "24px",
    },
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
      fontWeight: "500",
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
      justifyContent: "flex-start",
      marginBottom: "2px",

    },
  },
  time: {
    fontSize: "18px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },
  count: {
    fontSize: "24px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  artistImg: {
    height: "30px",
    width: "auto",
    [theme.breakpoints.down("sm")]: {
      height: "20px",
    },
  },
  droppingin: {
    fontSize: "14px",
    display: "flex",
    margin: "10px",
    [theme.breakpoints.down("sm")]: {
      margin: "0px 5px",
    },
  },
}));

export default function TopSection({ data, tier, mintingData }) {
  const classes = useStyles();
  const [days, setDays] = useState(0);
  const [minutes, setMinutess] = useState(0);
  const [hours, setHours] = useState(0);
  const [seconds, setSeconds] = useState(0);

  var date = data?.attributes?.lauch_date;

  useEffect(() => {
    const id = setInterval(countDown, 1000);
    return () => clearInterval(id);
  });
  const countDown = () => {
    const today = new Date().getTime();
    const endDate = new Date(date).getTime();
    const timeDiff = endDate - today;

    const s = 1000;
    const m = s * 60;
    const h = m * 60;
    const d = h * 24;

    var timeDays = Math.floor(timeDiff / d);
    var timeHours = Math.floor((timeDiff % d) / h);
    var timeMinutes = Math.floor((timeDiff % h) / m);
    var timeSeconds = Math.floor((timeDiff % m) / s);
    setDays(timeDays);
    setHours(timeHours);
    setMinutess(timeMinutes);
    setSeconds(timeSeconds);
    return timeDiff;
  };
  return (
    <>
      <p>Home / Song Page</p>
      <div className={classes.top}>
        <div className={classes.titleContainer}>
          <span className={classes.date}>
            {moment(String(data?.attributes?.lauch_date)).format(
              "MMM DD, YYYY"
            )}
          </span>
          <div className={classes.artistDetails}>
            <h2 className={classes.name}>{`${data?.attributes?.Title} `}</h2>
            <div className={classes.artistNameBox}>
              <img
                className={classes.artistImg}
                src={`${
                  data?.attributes?.artists.data[0].attributes.image_thumbnail
                    ? data?.attributes?.artists.data[0].attributes
                        .image_thumbnail
                    : "/images/nft/artist.png"
                }`}
              />
              <span
                className={classes.artistName}
              >{`${data?.attributes?.artists?.data[0]?.attributes?.name}`}</span>
            </div>
          </div>
        </div>
        <div style={{ width: "77%" }}>
          <div className={classes.droppingin}>Dropping in</div>
          <div className={classes.askBox}>
            <div style={{ margin: "0px 10px" }}>
              <div className={classes.count} style={{ display: "flex" }}>
                {days}
              </div>
              <div className={classes.time}>Days</div>
            </div>
            <div style={{ margin: "0px 10px" }}>
              <div className={classes.count} style={{ display: "flex" }}>
                {hours}
              </div>
              <div className={classes.time}>Hours</div>
            </div>
            <div style={{ margin: "0px 10px" }}>
              <div className={classes.count} style={{ display: "flex" }}>
                {minutes}
              </div>
              <div className={classes.time}>Min</div>
            </div>
            <div style={{ margin: "0px 10px" }}>
              <div className={classes.count} style={{ display: "flex" }}>
                {seconds}
              </div>
              <div className={classes.time}>Sec</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
