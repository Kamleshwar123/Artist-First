import React from "react";
// import Footer from "./Footer";
import Head from "next/head";
import Footer from "../Home/Footer";
import NewHeader from "./NewHeader";

const Layout = ({ children, color }) => {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <NewHeader/>
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};
export default Layout;
