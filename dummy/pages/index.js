import User from "../components/User";
import {getContentfulEntriesBySlug} from "../services/contenful";

export const getStaticProps = async () => {
    const [homeData] = await getContentfulEntriesBySlug({ contentType: 'homePage', slug: 'home' });

    return {
        props: { data: homeData },
    };
}

export default function Home({data}) {
    const { fields } = data;
    const { title = '', userList = [] } = fields;

  return (
      <div>
          <title>
              {title}
          </title>
          <div className="userTable">
              { userList.map(({ fields, sys }) => (
                  <div className="userCard" key={sys.id}>
                      <User data={fields}/>
                  </div>
              ))}
          </div>
      </div>
  )
}
