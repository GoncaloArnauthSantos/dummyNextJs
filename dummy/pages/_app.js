import '../styles/globals.css'
import {ContentLayout} from "../components/ContentLayout";
import TagManager from "react-gtm-module";


function MyApp({ Component, pageProps }) {

    const tagManagerArgs = {
        gtmId: 'GTM-PSX9TP6'
    }

    if (process.browser) {
        TagManager?.initialize(tagManagerArgs)
    }

    return (
      <ContentLayout>
          <Component {...pageProps} />
      </ContentLayout>
  );

}


export default MyApp
