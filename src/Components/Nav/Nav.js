import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, [])

  
  
return (
  <div className={`nav ${show && "nav_black"}`}>
    <img
      alt="logo"
      className="nav_logo"
      src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png"
    />
    <img
      alt="logo"
      className="nav_avatar"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVWGKNk39rCbUMmHEV3uqusN3WZ4LjYZbhrZfNGJ-85ilFgp095yz1AC5Rg7XRsLXE1eQ&usqp=CAU"
    />
  </div>
);
}

export default Nav;
