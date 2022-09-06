import CookieBot from "react-cookiebot";
import TagManager from "react-gtm-module";

const Home = () => {

  return (
      <div>
          <title>
              Dummy title
          </title>
          <div className="userTable">
             Dummy content
          </div>
      </div>
  )
}

export default Home

export const MyCookie = () => {
    const domainGroupId = "4c7db490-c6f2-480a-93f5-5bd82fcad3ce"
    return (<CookieBot domainGroupId={domainGroupId} />)
}

export const GoogleTagManager = ({children}) => {
    const tagManagerArgs = {
        gtmId: 'GTM-P29VCWC'
    }

    if (process.browser) {
        TagManager?.initialize(tagManagerArgs)
    }
    return children
}
