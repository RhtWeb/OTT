import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const NavBar = () => {

  const navBarRef = useRef();

  window.onscroll = () => {
    if(window.pageYOffset > 40) {
      navBarRef.current.className = "navbar navbar-dark";
    } else {
      navBarRef.current.className = "navbar";
    }

    return () => (window.onscroll = null);
  }

  return (
    <div ref={navBarRef} className="navbar">
      <div className="container">
        <div className="left">
          <Link to="/"><span className="link">RHT OTT</span></Link>
          <Link to="/"><span className="link">Homepage</span></Link>
          <Link to="/series"><span className="link">Series</span></Link>
          <Link to="/movies"><span className="link">Movies</span></Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img src="" alt="PI" />
          <div className="dropdown">
            <ArrowDropDown className="icon" /> 
            <div className="option">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
