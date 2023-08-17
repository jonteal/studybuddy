import { FaPencilRuler } from "react-icons/fa";

import "./header.css";

const Header = () => {
  return (
    <nav className="navbar mb-4 p-0 main-nav">
      <div className="container app-navbar">
        <a className="navbar-brand" href="/">
          <div className="header">
            <h2 className="app-header">Study Buddy</h2>
            <FaPencilRuler className="pencil-logo" size="1em" />
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Header;
