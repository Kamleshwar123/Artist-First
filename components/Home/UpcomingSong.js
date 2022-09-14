import { makeStyles, propsToClassKey } from "@mui/styles";
import moment from "moment";
import { useEffect, useState } from "react";
import KnowMore from "../Buttons/KnowMore";
import RegisterNow from "../Buttons/RegisterNow";
import auth from "../Layout/util/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    fontFamily: "'Inter', sans-serif",
    display: "flex",
    justifyContent: "center",
    color: "white",
    position: "relative",
    display: "flex",
    marginBottom: "50px",
    color: "white",
    alignItems: "flex-start",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  root1: {
    color: "white",
    fontSize: "3.0rem",
    fontWeight: "600",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      width: "100%",
      textAlign: "center",
      margin: "10px",
      fontSize: "26px",
      marginTop: "20px",
    },
  },
  gallery: {
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
    // width: "50%",
    minHeight: "50vh",
    margin: "0% 2%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      margin: "auto",
      width: "90%",
    },
  },
  image: {
    maxWidth: "450px",
    maxHeight: "450px",
    height: "auto",
    width: "auto",
    margin: "auto",
    borderRadius: "30px",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  date: {
    color: "#E14084",
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
    fontSize: "1.1rem",
  },
  askBox: {
    display: "flex",
    alignItems: "center",
    marginTop: "15px",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "15px",
    maxWidth: "450px",
  },
  ask: {
    fontSize: "24px",
    textAlign: "center",
    fontWeight: "700",
  },
  price: {
    fontSize: "18px",
    fontWeight: "500",
    textAlign: "center",
  },
  cta: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      margin: "auto",
    },
  },
}));

export default function UpcomingSong(data1) {
  const heading = data1.data.get("upcomingsongsheading");
  // console.log('heading',heading);
  const classes = useStyles();
  const [days, setDays] = useState(0);
  const [minutes, setMinutess] = useState(0);
  const [hours, setHours] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [date, setDate] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    fetch(
      "https://admin.artistfirst.in/api/artist-assets?filters%5Bupcoming_homepage%5D%5B$eq%5D=true&populate%5Bartists%5D%5Bfields%5D%5B0%5D=name,image_thumbnail"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.data[0]);
      });
  }, []);
  useEffect(() => {
    const id = setInterval(countDown, 1000);
    return () => clearInterval(id);
  });
  useEffect(() => {
    setDate(data?.attributes?.lauch_date);
  }, [data]);
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

  const r = auth();
  if (!data) {
    return <></>;
  }
  if (!r.token) {
    return <></>;
  }
  return (
        <div>
          <h1 className={classes.root1}>{heading}</h1>
          <div className={classes.root}>
            <div className={classes.gallery}>
              <img
                className={classes.image}
                src={data?.attributes?.image_url}
              />
            </div>
            <div className={classes.details}>
              <div className={classes.titleContainer}>
                <span className={classes.date}>
                  {moment(String(data?.attributes?.lauch_date)).format(
                    "MMM DD, YYYY"
                  )}
                </span>
                <div className={classes.artistDetails}>
                  <h2 className={classes.name}>{data?.attributes?.Title}</h2>
                  <div className={classes.artistNameBox}>
                    <img
                      style={{ height: "30px", width: "auto" }}
                      src={`${
                        data?.attributes?.artists.data[0].attributes
                          .image_thumbnail
                          ? data?.attributes?.artists.data[0].attributes
                              .image_thumbnail
                          : "/images/nft/artist.png"
                      }`}
                    />
                    <span
                      className={classes.artistName}
                      style={{ textAlign: "justify" }}
                    >{`${data?.attributes?.artists?.data[0]?.attributes?.name}`}</span>
                  </div>
                </div>
              </div>
              <p className={classes.askBox} style={{ textAlign: "justify" }}>
                {data?.attributes?.Description}{" "}
              </p>
              <div
                style={{ fontSize: "20px", display: "flex", marginTop: "10px" }}
              >
                Dropping in
              </div>
              <div>
                <div className={classes.askBox}>
                  <div>
                    <div className={classes.ask} style={{ display: "flex" }}>
                      {days}
                    </div>
                    <div className={classes.price}>Days</div>
                  </div>
                  <div>
                    <div className={classes.ask} style={{ display: "flex" }}>
                      {hours}
                    </div>
                    <div className={classes.price}>Hours</div>
                  </div>
                  <div>
                    <div className={classes.ask} style={{ display: "flex" }}>
                      {minutes}
                    </div>
                    <div className={classes.price}>Min</div>
                  </div>
                  <div>
                    <div className={classes.ask} style={{ display: "flex" }}>
                      {seconds}
                    </div>
                    <div className={classes.price}>Sec</div>
                  </div>
                </div>
              </div>
              <div className={classes.cta}>
                <KnowMore>Know More</KnowMore>
                <RegisterNow id={data?.attributes?.id} />
              </div>
            </div>
          </div>
          {/* <RegisterNow open={open} onClose={handleClose} /> */}
        </div>
  );
}
