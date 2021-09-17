import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useRef } from "react";
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
          <span>RHT OTT</span> 
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
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
