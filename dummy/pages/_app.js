import '../styles/globals.css'
import {ContentLayout} from "../components/ContentLayout";

function MyApp({ Component, pageProps }) {
  return (
      <ContentLayout>
          <Component {...pageProps} />
      </ContentLayout>
  );

}

export default MyApp
