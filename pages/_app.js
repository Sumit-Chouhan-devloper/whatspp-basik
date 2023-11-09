import React from 'react';
import "/styles/globals.css";
import "/styles/helper.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '/styles/HelperOne.css'
function MyApp({ Component, pageProps }) {
  return (
   <Component {...pageProps} />
  );
}

export default MyApp;
