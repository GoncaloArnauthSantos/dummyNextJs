import { createClient } from 'contentful'
import User from "../components/User";

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticProps = async () => {
    const { items } = await client.getEntries({
        content_type: 'homePage',
        'fields.slug': 'home'
    })

    const [homeData] = items;
    return {
        props: { data: homeData },
    };
}

export default function Home({data}) {
    const { fields } = data;
    const { title = '', userList = [] } = fields;

  return (
      <div>
          <div className="title">
              {title}
          </div>
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
