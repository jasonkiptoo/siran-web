import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    // <div className="navbar mt-4">
    <header className="sticky-top">
      {/* <h3>LOGO</h3> */}
     <a href="https://siranlimited.web.app/" class="text-muted">

      <img
        style={{ height: "50px" }}
        src="https://pps.whatsapp.net/v/t61.24694-24/322460561_140629475501171_8142685504268003046_n.jpg?ccb=11-4&oh=01_AdRc-8TUVq9q9fbd7Un54Y3i-RhEI_14bHK4n1Gn7uS0yA&oe=63DBA97B"
      /></a>
      <nav ref={navRef}>
        <a href="/#" onClick={showNavbar}>
          Home
        </a>
        <a href="/#services" onClick={showNavbar}>
          Services
        </a>
        <a href="/#gallery" onClick={showNavbar}>
          Gallery
        </a>
        <a href="/#our-team" onClick={showNavbar}>
          Our Team
        </a>
        <a href="/#about" onClick={showNavbar}>
          About Us
        </a>
        <a href="/#contact-us" onClick={showNavbar}>
          Contact Us{" "}
        </a>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
    // </div>
  );
}

export default Navbar;
