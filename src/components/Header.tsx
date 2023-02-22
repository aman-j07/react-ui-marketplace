import { Menu } from "@mui/icons-material";
import { useRef } from "react";

function Header() {
  const refToggleNav = useRef<null | HTMLDivElement>(null);

  return (
    <header className="header">
      <nav className="header__navbar row--centeraligned row--between">
        <div className="header__togglesection row--centeraligned row--between">
          <button
            onClick={() => {
              refToggleNav.current!.classList.toggle("header__navgrp--open");
            }}
            className="header__toggler btn btn--link"
          >
            <Menu fontSize="large" />
          </button>
          <a className="header__logo linktxt" href="#home">
            YOUR LOGO
          </a>
        </div>
        <div
          ref={refToggleNav}
          className="header__navgrp row--centeraligned row--between"
        >
          <ul className="header__navlist header__navlist--pages row--centeraligned row--between">
            <li className="header__navlink">
              <a className="linktxt" href="#Market">
                Market Place
              </a>
            </li>
            <li className="header__navlink">
              <a className="linktxt" href="#Blog">
                Blog
              </a>
            </li>
            <li className="header__navlink">
              <a className="linktxt" href="#Pricing">
                Pricing
              </a>
            </li>
            <li className="header__navlink">
              <a className="linktxt" href="#About">
                About
              </a>{" "}
            </li>
            <li className="header__navlink">
              <a className="linktxt" href="#Contact">
                Contact
              </a>
            </li>
          </ul>
          <ul className="header__navlist header__navlist--useroptions row--centeraligned">
            <li className="header__navlink">
              <img src="assets/images/bag.png" alt="bag icon" />
            </li>
            <li className="header__navlink">
              <img src="assets/images/user.png" alt="user avatar" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
