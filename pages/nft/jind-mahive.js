import Head from "next/head";
import { makeStyles } from "@mui/styles";
import Layout from "../../components/Layout/Layout";
import EllipsePatch from "../../Icons/EllipsePatch";
import SongDetails from "../../components/NFTPage/SongDetails";
import Tokens from "../../components/NFTPage/Tokens";
import Information from "../../components/NFTPage/Information";
import Collectors from "../../components/NFTPage/Collectors";
import { data_Static } from "../../components/NFTPage/data";
import FAQAccordian from "../../components/NFTPage/FAQAccordian";
import SocialNetworks from "../../components/NFTPage/SocialNetworks";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#0C091B",
    width: "100%",
    fontFamily: "'Inter', sans-serif",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    color: "white",
    backgroundImage: "url('/images/bg.png')",
    backgroundRepeat: "no-repeat",
    maxWidth: "100%",
  },
  container: {
    margin: "2% 8%",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      margin: "2%",
    },
  },
  desc: {
    margin: "5% 0%",
  },
}));
export async function getStaticProps() {
  const { API_URL } = process.env;
  let url = API_URL + "/api/artist-assets/1?populate=*";
  let data;
  try {
    // const res = fetch(url);
    const res = await fetch(
      "https://admin.artistfirst.in/api/artist-assets/1?populate=*"
    );
    const data1 = await res.json();
    data = data1.data;
    return {
      props: {
        data,
        url,
        API_URL: API_URL + "/api",
      },
      revalidate: 1,
    };
  } catch (error) {
    // The  API most likely died
    console.error(error);
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
  return (
    <Layout>
      <div className={classes.root}>
        {/* <EllipsePatch className={classes.patch} /> */}
        <Head>
          <title>{props?.data?.attributes?.Title}</title>
          <meta
            name="description"
            content={props?.data?.attributes?.Description}
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={classes.container}>
          <SongDetails data={props.data} />
          <Tokens data={props.data.attributes.asset_tiers} />
          <Information data={props.data} />
          <Collectors />
          <FAQAccordian />
          <SocialNetworks />
        </div>
      </div>
    </Layout>
  );
}
