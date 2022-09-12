import {useEffect, useState} from "react";

const Home = () => {

    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        window.dataLayer.push({
            event: 'isAdmin event',
            eventProps: {
                isAdmin: isAdmin,
            }
        });
    }, [isAdmin])

  return (
      <div>
          <title>
              Dummy title
          </title>
          <div className="userTable">
             Dummy content
          </div>
          <button onClick={() => setIsAdmin(!isAdmin)}>
              {isAdmin ? "I'm a Admin" : "I'm a normal user"}
          </button>
      </div>
  )
}

export default Home
