import '../styles/globals.css'
import {ContentLayout} from "../components/ContentLayout";
import CookieBot from "react-cookiebot"
import Head from "next/head";


const MyCookie = () => {
    const domainGroupId = "4c7db490-c6f2-480a-93f5-5bd82fcad3ce"
console.log("here !!")
    return (<CookieBot domainGroupId={domainGroupId} />)
}

function MyApp({ Component, pageProps }) {
  return (
      <>
          <Head>
              <script
                  id="Cookiebot"
                  src="https://consent.cookiebot.com/uc.js"
                  data-cbid="4c7db490-c6f2-480a-93f5-5bd82fcad3ce"
                  data-blockingmode="auto"
                  type="text/javascript"
                  async
              />
              <title>Dummy test</title>
          </Head>
          <ContentLayout>
              <MyCookie/>
              <Component {...pageProps} />
            </ContentLayout>
      </>
  );

}


export default MyApp
