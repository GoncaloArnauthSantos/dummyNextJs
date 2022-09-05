import '../styles/globals.css'
import {ContentLayout} from "../components/ContentLayout";
import CookieBot from "react-cookiebot"
import TagManager from 'react-gtm-module'


const MyCookie = () => {
    const domainGroupId = "4c7db490-c6f2-480a-93f5-5bd82fcad3ce"
    return (<CookieBot domainGroupId={domainGroupId} />)
}

const GoogleTagManager = ({children}) => {
    const tagManagerArgs = {
        gtmId: 'GTM-PSX9TP6'
    }

    // TagManager.initialize(tagManagerArgs)
    return children
}

function MyApp({ Component, pageProps }) {
  return (
      <ContentLayout>
          {/*<GoogleTagManager>*/}
              <MyCookie/>
              <Component {...pageProps} />
          {/*</GoogleTagManager>*/}
      </ContentLayout>
  );

}


export default MyApp
