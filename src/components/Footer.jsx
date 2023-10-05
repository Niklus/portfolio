export const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div className="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="#">
                <img
                  className="main-footer__icon"
                  src="/assets/png/linkedin-ico.png"
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                <img
                  className="main-footer__icon"
                  src="/assets/png/github-ico.png"
                  alt="icon"
                />
              </a>
            </div>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <h4 className="heading heading-sm text-lt">Nicholas Otieno</h4>
            <p className="main-footer__short-desc">
              I am a full stack web developer with a passion for building
              beautiful and functional websites.
            </p>
          </div>
        </div>
        <div className="main-footer__lower">
          &copy; Copyright {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};
