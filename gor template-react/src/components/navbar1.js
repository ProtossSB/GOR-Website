import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './navbar1.css'

const Navbar1 = (props) => {
  return (
    <nav className={`navbar1-navbar ${props.rootClassName} `}>
      <img
        alt={props.BrandingLogo_alt}
        src={props.BrandingLogo_src}
        className="navbar1-branding-logo"
      />
      <div className="navbar1-nav-content">
        <div className="navbar1-nav-links">
          <a
            href={props.link_Link}
            target="_blank"
            rel="noreferrer noopener"
            className="navbar1-link nav-link"
          >
            {props.Link}
          </a>
          <a
            href={props.link_Link1}
            target="_blank"
            rel="noreferrer noopener"
            className="navbar1-link01 nav-link"
          >
            {props.Link1}
          </a>
          <a href="#Pool" className="navbar1-link02 nav-link">
            {props.Link2}
          </a>
          <a href="#Learn" className="navbar1-link03 nav-link">
            {props.Link3}
          </a>
          <a href="#Whitepaper" className="navbar1-link04 nav-link">
            {props.Link4}
          </a>
          <a href="#Social" className="navbar1-link05 nav-link">
            {props.Link5}
          </a>
        </div>
        <div id="open-mobile-menu" className="navbar1-hamburger get-started">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="navbar1-image"
          />
        </div>
      </div>
      <div id="mobile-menu" className="navbar1-mobile-menu">
        <div className="navbar1-branding">
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="navbar1-image1"
          />
          <div id="close-mobile-menu" className="navbar1-container">
            <svg viewBox="0 0 1024 1024" className="navbar1-icon">
              <path
                d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
        <div className="navbar1-nav-links1">
          <span className="nav-link">{props.Link6}</span>
          <span className="nav-link">{props.Link7}</span>
          <span className="nav-link">{props.Link8}</span>
          <span className="nav-link">{props.Link9}</span>
        </div>
        <div className="get-started">
          <span className="navbar1-text">{props.Text}</span>
        </div>
      </div>
      <div className="">
        <div className="navbar1-container2">
          <Script
            html={`<script>
    /*
Mobile menu - Code Embed
*/

/* listenForUrlChangesMobileMenu() makes sure that if you changes pages inside your app, 
the mobile menu will still work*/

const listenForUrlChangesMobileMenu = () => {
    let url = location.href;
    document.body.addEventListener("click", () => {
        requestAnimationFrame(() => {
            if (url !== location.href) {
                runMobileMenuCodeEmbed();
                url = location.href;
            }
        });
    },
    true
    );
};

const runMobileMenuCodeEmbed = () => {
    // Mobile menu
    const mobileMenu = document.querySelector("#mobile-menu")

    // Buttons
    const closeButton = document.querySelector("#close-mobile-menu")
    const openButton = document.querySelector("#open-mobile-menu")

    // On openButton click, set the mobileMenu position left to -100vw
    openButton && openButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(0%)"
    })

    // On closeButton click, set the mobileMenu position to 0vw
    closeButton && closeButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(100%)"
    })
}

runMobileMenuCodeEmbed()
listenForUrlChangesMobileMenu()
</script>`}
            className=""
          ></Script>
        </div>
      </div>
    </nav>
  )
}

Navbar1.defaultProps = {
  Text: 'Get started',
  link_Link: 'http://fortify-exchange.online/',
  BrandingLogo_alt: 'Planical7012',
  BrandingLogo_src: '/Branding/gor%20logo%20jan%202024-200h.png',
  image_alt: 'image',
  Link9: 'Contact',
  Link6: 'Features',
  Link4: 'Whitepaper',
  Link: 'Explorer',
  Link1: 'Wallet',
  link_Link1: 'https://github.com/ixbaseANT/gor-kdx/releases',
  Link5: 'Social',
  Link2: 'Pool',
  Link7: 'Why us',
  image_src: '/Icons/hamburger-200h.png',
  Link3: 'Learn',
  rootClassName: '',
  Link8: 'Prices',
  image_alt1: 'image',
  image_src1: '/Branding/v1-1500h.png',
}

Navbar1.propTypes = {
  Text: PropTypes.string,
  link_Link: PropTypes.string,
  BrandingLogo_alt: PropTypes.string,
  BrandingLogo_src: PropTypes.string,
  image_alt: PropTypes.string,
  Link9: PropTypes.string,
  Link6: PropTypes.string,
  Link4: PropTypes.string,
  Link: PropTypes.string,
  Link1: PropTypes.string,
  link_Link1: PropTypes.string,
  Link5: PropTypes.string,
  Link2: PropTypes.string,
  Link7: PropTypes.string,
  image_src: PropTypes.string,
  Link3: PropTypes.string,
  rootClassName: PropTypes.string,
  Link8: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
}

export default Navbar1
