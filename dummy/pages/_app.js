import '../styles/globals.css'
import {ContentLayout} from "../components/ContentLayout";
import {GoogleTagManager, MyCookie} from "./index";


function MyApp({ Component, pageProps }) {
  return (
      <ContentLayout>
          <GoogleTagManager>
              <MyCookie/>
              <Component {...pageProps} />
          </GoogleTagManager>
      </ContentLayout>
  );

}


export default MyApp
