import React from "react";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts,
} from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import profile from "./favicon-32x32.png";

function Navbars() {
  return (
    <div>
      <nav className=" p-2 navbar  navbar-expand-lg navbar-dark navbar-color">
        <div class="container">
          <Link className="navbar-brand text-dark" to="/">
            <img src={profile} alt="" />{" "}
           Surya Teja
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item mx-3 text-dark">
                <Link className=" nav-link active" to="/">
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Link>
              </li>
              <li class="nav-item mx-3 text-dark">
                <Link className=" nav-link active" to="/about">
                  <FcAbout style={{ marginBottom: "2px" }} /> About
                </Link>
              </li>
              <li class="nav-item mx-3 text-dark">
                <Link className=" nav-link active" to="/project">
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  Project
                </Link>
              </li>
              <li class="nav-item mx-3 text-dark">
                <Link className=" nav-link active" to="/contact">
                  <AiOutlineContacts style={{ marginBottom: "2px" }} /> Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbars;