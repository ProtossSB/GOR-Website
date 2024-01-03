import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>GOR TEMPLATE</title>
        <meta property="og:title" content="GOR TEMPLATE" />
      </Helmet>
      <nav className="home-navbar">
        <img
          alt="Planical7012"
          src="/Branding/v1-1500h.png"
          className="home-branding-logo"
        />
        <div className="home-nav-content">
          <div className="home-nav-links">
            <a
              href="https://gorbaniov.com/pool/v.php?ix=gor-explorer"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link nav-link"
            >
              Explorer
            </a>
            <a
              href="https://github.com/ixbaseANT/gor-kdx/releases"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link01 nav-link"
            >
              Wallet
            </a>
            <a href="#Learn" className="home-link02 nav-link">
              Learn
            </a>
            <a href="#Whitepaper" className="home-link03 nav-link">
              Whitepaper
            </a>
            <a href="#Social" className="home-link04 nav-link">
              Social
            </a>
          </div>
          <div className="get-started home-get-started">
            <span className="home-text">Get started</span>
          </div>
          <div id="open-mobile-menu" className="home-hamburger get-started">
            <img
              alt="image"
              src="9df4c1d2-c994-4c1e-a57e-b5a81d63ee6c"
              className="home-image"
            />
          </div>
        </div>
        <div id="mobile-menu" className="home-mobile-menu">
          <div className="home-branding">
            <img
              alt="image"
              src="/Branding/v1-1500h.png"
              className="home-image1"
            />
            <div id="close-mobile-menu" className="home-container01">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
              </svg>
            </div>
          </div>
          <div className="home-nav-links1">
            <span className="nav-link">Features</span>
            <span className="nav-link">Why us</span>
            <span className="nav-link">Prices</span>
            <span className="nav-link">Contact</span>
          </div>
          <div className="get-started">
            <span className="home-text01">Get started</span>
          </div>
        </div>
        <div>
          <div className="home-container03">
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
            ></Script>
          </div>
        </div>
      </nav>
      <section className="home-section">
        <div className="home-hero">
          <div className="home-content">
            <main className="home-main">
              <header className="home-header">
                <h1 className="home-heading">
                  THE FASTEST BLOCKCHAIN MAINNET YET
                </h1>
                <span className="home-caption">
                  Powered by kHeavyHash at 10 bps, Gorbaniov is here to speed up
                  everything.
                </span>
              </header>
              <div className="home-buttons">
                <div className="home-get-started2 button">
                  <a
                    href="https://gorbaniov.com/v.php?ix=mg-wallet"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-text02"
                  >
                    Get Wallet
                  </a>
                </div>
                <div className="home-get-started3 button">
                  <a
                    href="https://gorbaniov.com/pool/v.php?ix=gor-explorer"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-text03"
                  >
                    Explore GOR
                  </a>
                </div>
              </div>
            </main>
            <div className="home-highlight">
              <div className="home-avatars">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image2 avatar"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image3 avatar"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2NzI0NDg3MQ&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image4 avatar"
                />
              </div>
              <label className="home-caption1">
                Loved by 10,000+ people like you.
              </label>
            </div>
          </div>
          <div className="home-image5"></div>
        </div>
      </section>
      <section className="home-section01">
        <h2 className="home-text04">Key Features</h2>
        <div className="home-features">
          <header className="home-feature feature feature-active">
            <h3 className="home-text05">Fair Launched</h3>
            <p className="home-text06">
              GOR Network is Fair Launched on November 2023
            </p>
          </header>
          <header className="home-feature1 feature">
            <h3 className="home-text07">No Premine, No ICOs</h3>
            <p className="home-text08">
              No coins is premined by the developers. No Coins is allocated to
              developers.
            </p>
          </header>
          <header className="home-feature2 feature">
            <h3 className="home-text09">100% Open Source</h3>
            <p className="home-text10">
              GOR Network is a hard-fork of Kaspa. GOR maintains a free,
              open-source code that is 100% decentralized.
            </p>
          </header>
        </div>
        <div className="home-features1">
          <header className="home-feature3 feature feature-active">
            <h3 className="home-text11">ASIC Resistant</h3>
            <p className="home-text12">
              To combat centralizations of hash power in select few, GOR uses a
              modified Algorithm to ensure ASIC Resistance
            </p>
          </header>
          <header className="home-feature4 feature">
            <h3 className="home-text13">Capped Supply</h3>
            <p className="home-text14">
              There will be 28.7 Billion of GOR at max supply.  And that&apos;s
              it.
            </p>
          </header>
          <header className="home-feature5 feature">
            <h3 className="home-text15">Halving Schedule</h3>
            <p className="home-text16">
              Halving schedule reduces the number of coins rewarded per block
              every 2 years.
            </p>
          </header>
        </div>
        <h2 className="home-heading01 section-heading">Facts &amp; Figures</h2>
        <div className="home-note">
          <div className="home-content01">
            <main className="home-main1">
              <h2 className="home-heading02">Quick Facts</h2>
              <p className="home-paragraph">
                <span>
                  Utilizing KHeavyHash, GOR Network runs at a blistering 10
                  blocks per second, finalizing and confirming hundreds
                  thousands of transactions every minute, while maintaining
                  security and preventing doublespend.
                </span>
                <br></br>
                <span>
                  Unlike Bitcoin&apos;s Linear block approach, the revolutionary
                  GHOSTDAG can branch and combine every block ever created,
                  ensuring there&apos;s no unused blocks.
                </span>
                <br></br>
                <br></br>
                <span>
                  At the forefront of technology, Gorbaniov Network (GOR)
                  utilizes a cutting-edge DAG hashing function. This technology
                  ensures fast and efficient data processing, allowing the
                  network to handle a Huge number of transactions simultaneously
                  with minimal energy consumption. With its advanced DAG
                  blockchain technology and commitment to security and
                  decentralization, Gorbaniov has the potential to disrupt the
                  financial industry and redefine how we conduct business.
                </span>
                <br></br>
              </p>
            </main>
          </div>
          <div className="home-facts">
            <div className="home-container04">
              <div className="home-container05">
                <div className="home-feature-card">
                  <svg viewBox="0 0 1024 1024" className="home-icon002">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <h2 className="home-text24">Launch Date</h2>
                  <span className="home-text25">November 2023</span>
                </div>
                <div className="home-feature-card1">
                  <svg viewBox="0 0 1024 1024" className="home-icon004">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <h2 className="home-text26">Consensus</h2>
                  <span className="home-text27">Proof-Of-Work</span>
                </div>
                <div className="home-feature-card2">
                  <svg viewBox="0 0 1024 1024" className="home-icon006">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <h2 className="home-text28">Ticker</h2>
                  <span className="home-text29">$GOR</span>
                </div>
                <div className="home-feature-card3">
                  <svg viewBox="0 0 1024 1024" className="home-icon008">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <h2 className="home-text30">Circ. Supply</h2>
                  <span className="home-text31">1.8 Billion GOR</span>
                </div>
              </div>
              <div className="home-container06">
                <div className="home-feature-card4">
                  <svg viewBox="0 0 1024 1024" className="home-icon010">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <h2 className="home-text32">Algorithm</h2>
                  <span className="home-text33">kHeavyHash</span>
                </div>
                <div className="home-feature-card5">
                  <svg viewBox="0 0 1024 1024" className="home-icon012">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <h2 className="home-text34">Platforms</h2>
                  <span className="home-text35">Windows &amp; Linux</span>
                </div>
                <div className="home-feature-card6">
                  <svg viewBox="0 0 1024 1024" className="home-icon014">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <h2 className="home-text36">Block Time</h2>
                  <span className="home-text37">0.1 Seconds</span>
                </div>
                <div className="home-feature-card7">
                  <svg viewBox="0 0 1024 1024" className="home-icon016">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <h2 className="home-text38">Max. Supply</h2>
                  <span className="home-text39">28.7 Billion Gor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-section02">
        <header id="Learn" className="home-header01">
          <header className="home-left">
            <span className="home-section03 section-head">TECHNICAL INFO</span>
            <h2 className="section-heading">Read, Learn, Build</h2>
          </header>
          <div className="home-right">
            <p className="home-paragraph1 section-description">
              Here you may find most documents pertaining to GOR Network.
            </p>
          </div>
        </header>
        <main className="home-cards">
          <section id="Whitepaper" className="home-card">
            <div className="home-icon018">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon019"
              >
                <path d="M838.857 272c5.714 5.714 10.857 12.571 16 20.571h-269.714v-269.714c8 5.143 14.857 10.286 20.571 16zM566.857 365.714h310.857v603.429c0 30.286-24.571 54.857-54.857 54.857h-768c-30.286 0-54.857-24.571-54.857-54.857v-914.286c0-30.286 24.571-54.857 54.857-54.857h457.143v310.857c0 30.286 24.571 54.857 54.857 54.857zM658.286 786.286v-36.571c0-10.286-8-18.286-18.286-18.286h-402.286c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h402.286c10.286 0 18.286-8 18.286-18.286zM658.286 640v-36.571c0-10.286-8-18.286-18.286-18.286h-402.286c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h402.286c10.286 0 18.286-8 18.286-18.286zM658.286 493.714v-36.571c0-10.286-8-18.286-18.286-18.286h-402.286c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h402.286c10.286 0 18.286-8 18.286-18.286z"></path>
              </svg>
            </div>
            <main className="home-content02">
              <h1 className="home-header02">GOR Whitepaper</h1>
              <p className="home-description">
                <span>Newest edition of GOR Whitepaper</span>
                <br></br>
                <br></br>
              </p>
              <a
                href="https://github.com/ixbaseANT/gord"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link09"
              >
                GOR WP -&gt;
              </a>
            </main>
          </section>
          <section className="home-card1">
            <div className="home-icon021">
              <img
                alt="image"
                src="/Icons/group%201314-200h.png"
                className="home-icon022"
              />
            </div>
            <main className="home-content03">
              <h1 className="home-header03">
                GHOSTDAG
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h1>
              <p className="home-description01">
                <span>
                  Read about GHOSTDAG, the seminal work that help launched GOR
                </span>
                <br></br>
              </p>
              <a
                href="https://github.com/ixbaseANT/gord"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link10"
              >
                GHOSTDAG WP -&gt;
              </a>
            </main>
          </section>
          <section className="home-card2">
            <div className="home-icon023">
              <img
                alt="image"
                src="/Icons/group%201317-200h.png"
                className="home-icon024"
              />
            </div>
            <main className="home-content04">
              <h1 className="home-header04">GOR Github</h1>
              <p className="home-description02">
                Head over to get the Source Code
              </p>
              <a
                href="https://github.com/ixbaseANT/gord"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link11"
              >
                GOR Github -&gt;
              </a>
            </main>
          </section>
        </main>
      </section>
      <section className="home-section04">
        <main className="home-pricing">
          <header className="home-header05">
            <header className="home-left1">
              <span className="home-section05 section-head">TIMELINE</span>
              <h2 className="section-heading home-heading04">
                DEVELOPMENT STAGES
              </h2>
            </header>
            <div className="home-right1">
              <p className="home-paragraph2 section-description">
                Keep track of our Development progress here.
              </p>
            </div>
          </header>
          <div className="home-plans-container">
            <main className="home-plans">
              <div className="home-plan">
                <div className="home-details">
                  <div className="home-header06">
                    <label className="home-name">STAGE 1 :</label>
                    <div className="home-pricing1">
                      <h1 className="home-price">LAUNCH</h1>
                    </div>
                  </div>
                  <p className="home-description03">The Beginning</p>
                </div>
                <div className="home-buy-details">
                  <div className="home-features2">
                    <span className="home-heading05">
                      <span>Early Steps</span>
                      <br></br>
                    </span>
                    <div className="home-list">
                      <div className="home-mark">
                        <div className="home-icon025">
                          <svg viewBox="0 0 1024 1024" className="home-icon026">
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                        </div>
                        <label className="home-label">
                          Launch of the GOR Blockchain
                        </label>
                      </div>
                      <div className="home-mark01">
                        <div className="home-icon028">
                          <svg viewBox="0 0 1024 1024" className="home-icon029">
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                        </div>
                        <label className="home-label01">
                          Launch Wallet &amp; Explorer
                        </label>
                      </div>
                      <div className="home-mark02">
                        <div className="home-icon031">
                          <svg viewBox="0 0 1024 1024" className="home-icon032">
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                        </div>
                        <label className="home-label02">
                          Launch GOR Mining Pool
                        </label>
                      </div>
                      <div className="home-mark03">
                        <div className="home-icon034">
                          <svg viewBox="0 0 1024 1024" className="home-icon035">
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="home-label03">
                          Listing GOR on 1 Exchange
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-plan1">
                <div className="home-details1">
                  <div className="home-header07">
                    <label className="home-name1">STAGE 2:</label>
                    <div className="home-pricing2">
                      <h1 className="home-price1">DEVELOPMENT</h1>
                    </div>
                  </div>
                  <p className="home-description04">
                    Continuing to enhance and maintain the Network
                  </p>
                </div>
                <div className="home-buy-details1">
                  <div className="home-features3">
                    <span className="home-heading06">Immediate Steps</span>
                    <div className="home-list1">
                      <div className="home-mark04">
                        <div className="home-icon037">
                          <svg viewBox="0 0 1024 1024" className="home-icon038">
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="home-label04">
                          Smart-Contracts Integration
                        </label>
                      </div>
                      <div className="home-mark05">
                        <div className="home-icon040">
                          <svg viewBox="0 0 1024 1024" className="home-icon041">
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="home-label05">WEB3 Development</label>
                      </div>
                      <div className="home-mark06">
                        <div className="home-icon043">
                          <svg viewBox="0 0 1024 1024" className="home-icon044">
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="home-label06">
                          Create Marketplace
                        </label>
                      </div>
                      <div className="home-mark07">
                        <div className="home-icon046">
                          <svg viewBox="0 0 1024 1024" className="home-icon047">
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="home-label07">
                          Enhance Network Security 
                        </label>
                      </div>
                      <div className="home-mark08">
                        <div className="home-icon049">
                          <svg viewBox="0 0 1024 1024" className="home-icon050">
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="home-label08">
                          Enhance Network Performance
                        </label>
                      </div>
                      <div className="home-mark09">
                        <div className="home-icon052">
                          <svg viewBox="0 0 1024 1024" className="home-icon053">
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="home-label09">Expand Community</label>
                      </div>
                      <div className="home-mark10">
                        <div className="home-icon055">
                          <svg viewBox="0 0 1024 1024" className="home-icon056">
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="home-label10">
                          <span>Expand Marketing activities</span>
                          <br></br>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-plan2">
                <div className="home-details2">
                  <div className="home-header08">
                    <label className="home-name2">STAGE 3:</label>
                    <div className="home-pricing3">
                      <h1 className="home-price2">GROWTH</h1>
                    </div>
                  </div>
                  <p className="home-description05">
                    Expansion &amp; Diversification
                  </p>
                </div>
                <div className="home-buy-details2">
                  <div className="home-features4">
                    <span className="home-heading07">Future Steps</span>
                    <div className="home-list2">
                      <div className="home-mark11">
                        <div className="home-icon058">
                          <svg viewBox="0 0 1024 1024" className="home-icon059">
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="home-label11">Expand UserBase</label>
                      </div>
                      <div className="home-mark12">
                        <div className="home-icon061">
                          <svg viewBox="0 0 1024 1024" className="home-icon062">
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="home-label12">
                          Increase the number and variety of features, assets,
                          and items on the marketplace.
                        </label>
                      </div>
                      <div className="home-mark13">
                        <div className="home-icon064">
                          <svg viewBox="0 0 1024 1024" className="home-icon065">
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="home-label13">
                          Raise awareness and recognition of GOR Network in the
                          industry.
                        </label>
                      </div>
                      <div className="home-mark14">
                        <div className="home-icon067">
                          <svg viewBox="0 0 1024 1024" className="home-icon068">
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="home-label14">
                          Develop and Innovate features and services.
                        </label>
                      </div>
                      <div className="home-mark15">
                        <div className="home-icon070">
                          <svg viewBox="0 0 1024 1024" className="home-icon071">
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="home-label15">
                          Listing on Tier 1 Exchange
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <main className="home-plans1">
              <div className="home-plan3">
                <div className="home-details3">
                  <div className="home-header09">
                    <label className="home-name3">STAGE 4:</label>
                    <div className="home-pricing4">
                      <h1 className="home-price3">EVOLUTION</h1>
                    </div>
                  </div>
                  <p className="home-description06">
                    Expansion &amp; Diversification
                  </p>
                </div>
                <div className="home-buy-details3">
                  <div className="home-features5">
                    <span className="home-heading08">Continued Developing</span>
                    <div className="home-list3">
                      <div className="home-mark16">
                        <div className="home-icon073">
                          <svg viewBox="0 0 1024 1024" className="home-icon074">
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="home-label16">
                          future-proof response to changing needs and
                          requirements
                        </label>
                      </div>
                      <div className="home-mark17">
                        <div className="home-icon076">
                          <svg viewBox="0 0 1024 1024" className="home-icon077">
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="home-label17">
                          Development of assets and items to reflect the latest
                          trends and developments.
                        </label>
                      </div>
                      <div className="home-mark18">
                        <div className="home-icon079">
                          <svg viewBox="0 0 1024 1024" className="home-icon080">
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="home-label18">
                          Development of the marketplace to improve user
                          experience and satisfaction.
                        </label>
                      </div>
                      <div className="home-mark19">
                        <div className="home-icon082">
                          <svg viewBox="0 0 1024 1024" className="home-icon083">
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="home-label19">
                          Developing APIs and SDKs for enhanced compatibility
                          with other platforms.
                        </label>
                      </div>
                      <div className="home-mark20">
                        <div className="home-icon085">
                          <svg viewBox="0 0 1024 1024" className="home-icon086">
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="home-label20">
                          Community development and marketing activities to
                          reach more users and regions.
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </main>
      </section>
      <section className="home-section06">
        <header id="Social" className="home-header10">
          <span className="home-section07 section-head">COMMUNITY</span>
          <h2 className="home-heading09 section-heading">
            Join our Community on these Platforms
          </h2>
        </header>
        <main className="home-cards1">
          <section className="home-card3">
            <main className="home-content05">
              <header className="home-header11">
                <div className="home-container07">
                  <div className="home-icon088">
                    <svg viewBox="0 0 1024 1024" className="home-icon089">
                      <path d="M679.429 746.857l84-396c7.429-34.857-12.571-48.571-35.429-40l-493.714 190.286c-33.714 13.143-33.143 32-5.714 40.571l126.286 39.429 293.143-184.571c13.714-9.143 26.286-4 16 5.143l-237.143 214.286-9.143 130.286c13.143 0 18.857-5.714 25.714-12.571l61.714-59.429 128 94.286c23.429 13.143 40 6.286 46.286-21.714zM1024 512c0 282.857-229.143 512-512 512s-512-229.143-512-512 229.143-512 512-512 512 229.143 512 512z"></path>
                    </svg>
                  </div>
                </div>
                <h1 className="home-header12">Telegram</h1>
              </header>
              <p className="home-description07">GOR Telegram Community</p>
              <div className="home-button">
                <a
                  href="https://t.me/gorcurrency"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link12"
                >
                  <p className="home-text49">Join -&gt;</p>
                </a>
              </div>
            </main>
          </section>
          <section className="home-card4">
            <main className="home-content06">
              <header className="home-header13">
                <div className="home-container08">
                  <div className="home-icon091">
                    <svg viewBox="0 0 1024 1024" className="home-icon092">
                      <path d="M512 219.429c-237.714 0-438.857 133.714-438.857 292.571 0 85.143 57.143 166.286 156 222.286l49.714 28.571-15.429 54.857c-10.857 40.571-25.143 72-40 98.286 57.714-24 110.286-56.571 157.143-97.714l24.571-21.714 32.571 3.429c24.571 2.857 49.714 4.571 74.286 4.571 237.714 0 438.857-133.714 438.857-292.571s-201.143-292.571-438.857-292.571zM1024 512c0 202.286-229.143 365.714-512 365.714-28 0-56-1.714-82.857-4.571-74.857 66.286-164 113.143-262.857 138.286-20.571 5.714-42.857 9.714-65.143 12.571h-2.857c-11.429 0-21.714-9.143-24.571-21.714v-0.571c-2.857-14.286 6.857-22.857 15.429-33.143 36-40.571 77.143-74.857 104-170.286-117.714-66.857-193.143-170.286-193.143-286.286 0-202.286 229.143-365.714 512-365.714v0c282.857 0 512 163.429 512 365.714z"></path>
                    </svg>
                  </div>
                </div>
                <h1 className="home-header14">Discord</h1>
              </header>
              <p className="home-description08">GOR Discord Community</p>
              <div className="home-button1">
                <a
                  href="https://discord.com/invite/XrrPtjAkc8"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link13"
                >
                  <p className="home-text50">Join -&gt;</p>
                </a>
              </div>
            </main>
          </section>
          <section className="home-card5">
            <main className="home-content07">
              <header className="home-header15">
                <div className="home-container09">
                  <div className="home-icon094">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="home-icon095"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <h1 className="home-header16">Twitter/X</h1>
              </header>
              <p className="home-description09">
                GOR Official Twitter/X Community
              </p>
              <div className="home-button2">
                <a
                  href="https://twitter.com/GorCurrency"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link14"
                >
                  <p className="home-text51">Join -&gt;</p>
                </a>
              </div>
            </main>
          </section>
        </main>
        <main className="home-cards2">
          <section className="home-card6">
            <main className="home-content08">
              <header className="home-header17">
                <div className="home-container10">
                  <div className="home-icon097">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon098"
                    >
                      <path d="M829.143 73.143c26.857 0 48.571 21.714 48.571 48.571v780.571c0 26.857-21.714 48.571-48.571 48.571h-223.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-420c-26.857 0-48.571-21.714-48.571-48.571v-780.571c0-26.857 21.714-48.571 48.571-48.571h780.571z"></path>
                    </svg>
                  </div>
                  <h1 className="home-header18">Facebook</h1>
                </div>
              </header>
              <p className="home-description10">GOR Facebook Community</p>
              <div className="home-button3">
                <a
                  href="https://www.facebook.com/profile.php?id=100092673184621"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link15"
                >
                  <p className="home-text52">Join -&gt;</p>
                </a>
              </div>
            </main>
          </section>
          <section className="home-card7">
            <main className="home-content09">
              <header className="home-header19">
                <div className="home-container11">
                  <div className="home-icon100">
                    <svg viewBox="0 0 1024 1024" className="home-icon101">
                      <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                    </svg>
                  </div>
                </div>
                <h1 className="home-header20">Youtube</h1>
              </header>
              <p className="home-description11">Official GOR DEV Channel</p>
              <div className="home-button4">
                <a
                  href="https://www.youtube.com/@GorbaniovNetwork"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link16"
                >
                  <p className="home-text53">Join -&gt;</p>
                </a>
              </div>
            </main>
          </section>
          <section className="home-card8">
            <main className="home-content10">
              <header className="home-header21">
                <div className="home-container12">
                  <div className="home-icon103">
                    <svg viewBox="0 0 1024 1024" className="home-icon104">
                      <path d="M938.667 381.568v260.864l-182.613-130.432zM128 170.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v426.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h469.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-130.432l231.211 165.163c19.157 13.696 45.824 9.259 59.52-9.899 5.376-7.595 7.979-16.341 7.936-24.832v-426.667c0-23.552-19.115-42.667-42.667-42.667-9.301 0-17.92 2.987-24.789 7.936l-231.211 165.163v-130.432c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504zM128 256h469.333c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v426.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-469.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-426.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501z"></path>
                    </svg>
                  </div>
                </div>
                <h1 className="home-header22">TikTok</h1>
              </header>
              <p className="home-description12">GOR TikTok Shorts</p>
              <div className="home-button5">
                <a
                  href="https://www.tiktok.com/@gorbaniovnetwork"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link17"
                >
                  <p className="home-text54">Join -&gt;</p>
                </a>
              </div>
            </main>
          </section>
        </main>
      </section>
      <section className="home-section08">
        <header className="home-header23">
          <span className="section-head">FAQ</span>
          <h2 className="home-heading10 section-heading">
            Frequently asked questions
          </h2>
        </header>
        <main className="home-accordion">
          <div className="home-accordion1">
            <div
              data-role="accordion-container"
              className="home-element accordion-element"
            >
              <div className="home-details4">
                <span className="home-text55">How can I get GOR?</span>
                <span data-role="accordion-content" className="home-text56">
                  <span>You can get GOR at these exchanges :</span>
                  <br></br>
                  <br></br>
                  <span>Make sure you have a working wallet</span>
                  <br></br>
                </span>
                <a
                  href="https://github.com/ixbaseANT/gor-kdx/releases"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link18"
                >
                  GOR-KDX Wallet
                </a>
              </div>
              <div data-role="accordion-icon">
                <svg viewBox="0 0 1024 1024" className="home-icon106">
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element1 accordion-element"
            >
              <div className="home-details5">
                <span className="home-text62">Is GOR ASIC Resistant?</span>
                <span data-role="accordion-content" className="home-text63">
                  Yes. GOR is made to be ASIC RESISTANT. We believe ASIC
                  Resistance will be good for decentralization.
                </span>
              </div>
              <div data-role="accordion-icon">
                <svg viewBox="0 0 1024 1024" className="home-icon108">
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element2 accordion-element"
            >
              <div className="home-details6">
                <span className="home-text64">How can I mine GOR?</span>
                <span data-role="accordion-content" className="home-text65">
                  <span>You may find mining resources on these pools :</span>
                  <br></br>
                  <br></br>
                </span>
                <a
                  href="https://gorbaniov.com/pool"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link19"
                >
                  GORBANIOV POOL (Israel)
                </a>
                <a
                  href="https://gorbaniov.com/pool"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link20"
                >
                  <span>IXBASE POOL (Ukraine</span>
                  <span>)</span>
                </a>
                <a
                  href="https://gorbaniov.com/pool"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link21"
                >
                  <span>
                    MAXGOR
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>POOL (USA)</span>
                </a>
              </div>
              <div data-role="accordion-icon">
                <svg viewBox="0 0 1024 1024" className="home-icon110">
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element3 accordion-element"
            >
              <div className="home-details7">
                <span className="home-text73">Are GOR made by a Company?</span>
                <span data-role="accordion-content" className="home-text74">
                  No. GOR is a decentralized Open-Source Project. The Community
                  will Govern.
                </span>
              </div>
              <div data-role="accordion-icon">
                <svg viewBox="0 0 1024 1024" className="home-icon112">
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element4 accordion-element"
            >
              <div className="home-details8">
                <span className="home-text75">
                  Can DEVs do something about the price?
                </span>
                <span data-role="accordion-content" className="home-text76">
                  Prices depends on the market. DEVs do not hold any allocated
                  coins or engage in market-making activities.
                </span>
              </div>
              <div data-role="accordion-icon">
                <svg viewBox="0 0 1024 1024" className="home-icon114">
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
            </div>
          </div>
        </main>
      </section>
      <Footer></Footer>
      <div>
        <div className="home-container14">
          <Script
            html={`<script>
    /*
Accordion - Code Embed
*/

/* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
the Accordions will still work*/

const listenForUrlChangesAccordion = () => {
      let url = location.href;
      document.body.addEventListener(
        "click",
        () => {
          requestAnimationFrame(() => {
            if (url !== location.href) {
              runAccordionCodeEmbed();
              url = location.href;
            }
          });
        },
        true
      );
    };


const runAccordionCodeEmbed = () => {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
    const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

    accordionContents.forEach((accordionContent) => {
        accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionContainers.forEach((accordionContainer, index) => {
        accordionContainer.addEventListener("click", () => {
            accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
            });

            accordionIcons.forEach((accordionIcon) => {
                accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
            });

            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        });
    });
}

runAccordionCodeEmbed()
listenForUrlChangesAccordion()

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
