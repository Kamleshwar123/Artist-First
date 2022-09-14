import Head from "next/head";
import { makeStyles } from "@mui/styles";
import Layout from "../../components/Layout/Layout";
import ArtistDetails from "../../components/Artist/ArtistDetails";
import ArtistStats from "../../components/Artist/ArtistStats";
import Assets from "../../components/Artist/Assets";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#0C091B",
    width: "100%",
    fontFamily: "'Inter', sans-serif",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    color: "white",
    // backgroundImage: "url('/images/bg.png')",
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
export async function getStaticPaths() {
  return { paths: [], fallback: true };
}
export async function getStaticProps({ params }) {
  const { API_URL } = process.env;
  const { name } = params;

  let url = API_URL + "/api/artist-assets/1?populate=*";
  let data;
  try {
    // const res = fetch(url);
    const res = await fetch(
      "https://admin.artistfirst.in/api/artists?populate=*&filters[slug]=" +
        name
    );
    const data1 = await res.json();
    data = data1.data;
    return {
      props: {
        data: data[0],
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
  const router = useRouter()

  if (!props.data) {
    return <Layout>{"loading"}</Layout>;
  }
  return (
    <Layout color="#0C091B">
      <div className={classes.root}>
        {/* <EllipsePatch className={classes.patch} /> */}
        <Head>
          <title>{props?.data?.attributes?.name}</title>
          <meta
            name="description"
            content={props?.data?.attributes?.Description}
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={classes.container}>
          <ArtistDetails data={props.data} />
          <ArtistStats data={props.data} />
          <Assets data={props.data} />
        </div>
      </div>
    </Layout>
  );
}
