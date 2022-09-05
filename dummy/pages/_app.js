import '../styles/globals.css'
import {ContentLayout} from "../components/ContentLayout";
import CookieBot from "react-cookiebot"


const MyCookie = () => {
    const domainGroupId = "4c7db490-c6f2-480a-93f5-5bd82fcad3ce"

    return <CookieBot domainGroupId={domainGroupId} />
}

function MyApp({ Component, pageProps }) {
  return (
      <ContentLayout>
          {/*<MyCookie/>*/}
          <div> My component here </div>
      </ContentLayout>
  );

}


export default MyApp
