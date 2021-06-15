import {Footer} from "./Footer";
import {Navbar} from "./Navbar";

export const ContentLayout = ({ children }) => {
    return (
      <div className="content">
          <Navbar />
          { children }
          <Footer />
      </div>
    );
}
