import { HashLink } from "react-router-hash-link";
import { useRef } from "react";

export const Header = () => {
  const smallMenu = useRef(null);
  const headerHamMenuBtn = useRef(null);
  const headerHamMenuCloseBtn = useRef(null);
  const headerSmallMenuLinks = useRef(null);

  for (let i = 0; i < headerSmallMenuLinks.length; i++) {
    headerSmallMenuLinks[i].addEventListener("click", () => {
      smallMenu.current.classList.remove("header__sm-menu--active");
      headerHamMenuBtn.current.classList.remove("d-none");
      headerHamMenuCloseBtn.current.classList.add("d-none");
    });
  }

  const toggleMenu = (e) => {
    if (smallMenu.current.classList.contains("header__sm-menu--active")) {
      smallMenu.current.classList.remove("header__sm-menu--active");
    } else {
      smallMenu.current.classList.add("header__sm-menu--active");
    }
    if (headerHamMenuBtn.current.classList.contains("d-none")) {
      headerHamMenuBtn.current.classList.remove("d-none");
      headerHamMenuCloseBtn.current.classList.add("d-none");
    } else {
      headerHamMenuBtn.current.classList.add("d-none");
      headerHamMenuCloseBtn.current.classList.remove("d-none");
    }
  };

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <HashLink to="/#hero">
            <div className="header__logo-img-cont">
              <img
                src="/assets/png/profile.png"
                alt="Ram Maheshwari Logo Image"
                className="header__logo-img"
              />
            </div>
          </HashLink>
          <HashLink to="/#hero">
            <span className="header__logo-sub">Nicholas Otieno</span>
          </HashLink>
        </div>
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <HashLink to="/#hero" className="header__link">
                {" "}
                Home{" "}
              </HashLink>
            </li>
            <li className="header__link-wrapper">
              <HashLink to="/#about" className="header__link">
                About{" "}
              </HashLink>
            </li>
            <li className="header__link-wrapper">
              <HashLink to="/#projects" className="header__link">
                Projects
              </HashLink>
            </li>
            <li className="header__link-wrapper">
              <HashLink to="/#contact" className="header__link">
                {" "}
                Contact{" "}
              </HashLink>
            </li>
          </ul>
          <div className="header__main-ham-menu-cont" onClick={toggleMenu}>
            <img
              src="./assets/svg/ham-menu.svg"
              alt="hamburger menu"
              className="header__main-ham-menu"
              ref={headerHamMenuBtn}
            />
            <img
              src="./assets/svg/ham-menu-close.svg"
              alt="hamburger menu close"
              className="header__main-ham-menu-close d-none"
              ref={headerHamMenuCloseBtn}
            />
          </div>
        </div>
      </div>
      <div className="header__sm-menu" ref={smallMenu}>
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links" ref={headerSmallMenuLinks}>
            <li className="header__sm-menu-link">
              <HashLink to="/#hero"> Home </HashLink>
            </li>

            <li className="header__sm-menu-link">
              <HashLink to="/#about"> About </HashLink>
            </li>

            <li className="header__sm-menu-link">
              <HashLink to="/#projects"> Projects </HashLink>
            </li>

            <li className="header__sm-menu-link">
              <HashLink to="/#contact"> Contact </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
