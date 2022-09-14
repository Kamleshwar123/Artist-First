import Head from "next/head";
import { makeStyles } from "@mui/styles";
import Layout from "../../../components/Layout/Layout";
import EllipsePatch from "../../../Icons/EllipsePatch";
import Details from "../../../components/NFTPage/Details";
import { useEffect, useState } from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "black",
    width: "100%",
    fontFamily: "'Inter', sans-serif",
    display: "flex",
    justifyContent: "flex-start",
    color: "white",
    position: "relative",
    minHeight: "100vh",
    display: "flex",
  },
  patch: {
    height: "700px",
    width: "auto",
    position: "absolute",
    right: "0px",
  },
  container: {
    margin: "5% 8%",
    [theme.breakpoints.down("sm")]: {
      margin: "5%",
    },
  },
  desc: {
    margin: "5% 0%",
  },
}));
export async function getStaticPaths() {
  return { paths: [], fallback: true };
}
export async function getStaticProps({ params }) {
  const { API_URL } = process.env;
  const { tier, asset } = params;
  let url = API_URL + "/api/artist-assets/1?populate=*";
  let data;
  let mintingData;
  try {
    // const res = fetch(url);
    const res = await fetch(
      "https://admin.artistfirst.in/api/artist-assets/1?populate=*"
    );
    const data1 = await res.json();
    data = data1.data;
    const mintFetch = await fetch(
      "https://admin.artistfirst.in/api/minting-outputs/12?populate=*"
    );
    const mintingRes = await mintFetch.json();
    mintingData = mintingRes.data;
    return {
      props: {
        tier,
        data,
        url,
        mintingData,
        API_URL: API_URL + "/api",
      },
      revalidate: 1,
    };
  } catch (error) {
    // The  API most likely died
    console.error(error);
    // console.log(error);
    return {
      props: {
        url,
        API_URL: API_URL + "/api",
        error: JSON.stringify(error),
      },
      revalidate: 1, // In seconds
    };
  }
}
export default function Home(props) {
  const classes = useStyles();
  // console.log(props);
  const [video, setVideo] = useState("");
  useEffect(() => {
    setVideo(props.data?.attributes?.Video?.data?.attributes?.url);
  }, [props.data]);
  return (
    <Layout>
      <div className={classes.root}>
        <EllipsePatch className={classes.patch} />
        <Head>
          <title>{props.data?.attributes?.Title}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={classes.container}>
          <Details
            mintingData={props.mintingData}
            tier={props.tier ? props.tier : ""}
            data={props.data}
          />
          <div className={classes.desc}>
            <h2>Description</h2>
            <p>{props.data?.attributes?.Description}</p>
          </div>
          <video
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              maxWidth: "80vw",
            }}
            width="560"
            height="315"
            controls
            poster={props.data?.attributes?.video_cover?.data?.attributes?.url}
          >
            {/\d/.test(video) && /[a-zA-Z]/.test(video) ? (
              <source src={video} type="video/mp4" />
            ) : (
              ""
            )}
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </Layout>
  );
}
