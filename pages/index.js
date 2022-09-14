import Head from "next/head";
import styles from "../styles/Home.module.css";
import TopSection from "../components/Home/TopSection";
import HowItWorks from "../components/Home/HowItWorks/HowItWorks";
import ArtistSubmission from "../components/Home/ArtistSubmission";
import Footer from "../components/Home/Footer";
import UpcomingSong from "../components/Home/UpcomingSong";
export async function getStaticProps() {
  const { API_URL } = process.env;
  let url = API_URL + "/api/artist-assets/1?populate=*";
  let data;
  try {
    const res = await fetch(
      "https://admin.artistfirst.in/api/frontend-configs?filters[slug][$eq]=home"
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
  let keyValue = new Map();
  props?.data?.forEach((item) => {
    keyValue.set(item.attributes.key, item.attributes.value);
  });

  return (
    <div className={styles.container}>
      <Head>
        <title> {keyValue.get("title")} </title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta name="description" content={keyValue.get("title")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopSection data={keyValue} />
      <UpcomingSong data={keyValue} />
      <HowItWorks data={keyValue} />
      <ArtistSubmission data={keyValue} />
      <Footer />
    </div>
  );
}
