import React from "react";
import "/styles/globals.css";
import "/styles/helper.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "/styles/HelperOne.css";
// import NewCommunity from "../components/popups/NewCommunity";
function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
    // <NewCommunity />
  );
}

export default MyApp;
