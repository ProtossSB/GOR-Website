import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar1 from '../components/navbar1'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>
          Gorbaniov Network - Next Generation GhostDag Blockchain POW
        </title>
        <meta
          name="description"
          content="Next generation GhostDAG BlockChain POW Cryptocurrency utilizing fast transaction speed and lowest fees."
        />
        <meta
          property="og:title"
          content="Gorbaniov Network - Next Generation GhostDag Blockchain POW "
        />
        <meta
          property="og:description"
          content="Next generation GhostDAG BlockChain POW Cryptocurrency utilizing fast transaction speed and lowest fees."
        />
      </Helmet>
      <Navbar1></Navbar1>
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
                <div className="home-get-started button">
                  <a
                    href="https://github.com/ixbaseANT/gor-kdx/releases"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-text"
                  >
                    Get Wallet
                  </a>
                </div>
                <div className="home-get-started1 button">
                  <a
                    href="http://fortify-exchange.online/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-text01"
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
                  className="home-image avatar"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image1 avatar"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2NzI0NDg3MQ&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image2 avatar"
                />
              </div>
              <label className="home-caption1">
                Loved by 10,000+ people like you.
              </label>
            </div>
          </div>
          <div className="home-image3"></div>
        </div>
      </section>
      <section className="home-section01">
        <header id="Pool" className="home-header01">
          <header className="home-left">
            <span className="home-section02 section-head">
              IMPORTANT INFORMATION
            </span>
            <h2 className="section-heading">RESOURCES</h2>
          </header>
          <div className="home-right">
            <p className="home-paragraph section-description">
              Important Information for the GOR Network.
            </p>
          </div>
        </header>
        <main className="home-cards">
          <section className="home-card">
            <div className="home-icon">
              <svg viewBox="0 0 1024 1024" className="home-icon001">
                <path d="M512 854q106 0 181-75t75-181-75-181-181-75-181 75-75 181 75 181 181 75zM298 170q-18 0-30 13t-12 31 12 30 30 12 31-12 13-30-13-31-31-13zM426 170q-18 0-30 13t-12 31 12 30 30 12 31-12 13-30-13-31-31-13zM768 86q36 0 61 24t25 60v684q0 36-25 60t-61 24h-512q-36 0-61-24t-25-60v-684q0-36 25-60t61-24h512zM392 718l240-242q50 50 50 122 0 70-50 120t-120 50-120-50z"></path>
              </svg>
            </div>
            <main className="home-content01">
              <h1 className="home-header02">MINING POOL LIST</h1>
              <p className="home-description">
                <span>A List of Participating Pool in the GOR Network</span>
                <br></br>
                <br></br>
              </p>
              <a
                href="https://github.com/ixbaseANT/gord"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link a"
              >
                <span>GORBANIOV POOL (ISRAEL) </span>
                <span>-&gt;</span>
              </a>
              <a
                href="https://github.com/ixbaseANT/gord"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link01 a"
              >
                <span>IXBASE POOL (UKRAINE) </span>
                <span>-&gt;</span>
              </a>
              <a
                href="https://maxgor.info/pool"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link02 a"
              >
                <span>MAXGOR POOL (U.S.A) </span>
                <span>-&gt;</span>
              </a>
              <a
                href="https://mining4people.com/pool/gor-pplns"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link03 a"
              >
                <span>MINING 4 PEOPLE (MULTIPLE) </span>
                <span>-&gt;</span>
              </a>
            </main>
            <div className="home-icon003">
              <svg viewBox="0 0 1024 1024" className="home-icon004">
                <path d="M512 96c-111.118 0-215.584 43.272-294.156 121.844s-121.844 183.038-121.844 294.156c0 111.118 43.272 215.584 121.844 294.156s183.038 121.844 294.156 121.844c111.118 0 215.584-43.272 294.156-121.844s121.844-183.038 121.844-294.156c0-111.118-43.272-215.584-121.844-294.156s-183.038-121.844-294.156-121.844zM512 0v0c282.77 0 512 229.23 512 512s-229.23 512-512 512c-282.77 0-512-229.23-512-512s229.23-512 512-512zM448 704h128v128h-128zM448 192h128v384h-128z"></path>
              </svg>
            </div>
            <main className="home-content02">
              <h1 className="home-header03">IMPORTANT </h1>
              <p className="home-description01">
                <span>Other essential Information</span>
                <br></br>
              </p>
              <a
                href="https://github.com/ixbaseANT/gor-kdx/releases"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link04 a"
              >
                <span>GOR KDX WALLET </span>
                <span>-&gt;</span>
              </a>
              <a
                href="http://api.gorbaniov.com/docs"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link05 a"
              >
                <span>
                  GOR API
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>SERVER </span>
                <span>-&gt;</span>
              </a>
              <a
                href="http://fortify-exchange.online/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link06 a"
              >
                <span>GOR EXPLORER </span>
                <span>-&gt;</span>
              </a>
              <a
                href="https://gorbaniov.com/v.php?ix=gor-photo3"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link07 a"
              >
                <span>GOR COMMUNITY GALLERY </span>
                <span>-&gt;</span>
              </a>
            </main>
          </section>
          <section className="home-card01">
            <div className="home-icon006">
              <svg viewBox="0 0 1024 1024" className="home-icon007">
                <path d="M304 608c0 114.876 93.124 208 208 208s208-93.124 208-208-93.124-208-208-208-208 93.124-208 208zM960 256h-224c-16-64-32-128-96-128h-256c-64 0-80 64-96 128h-224c-35.2 0-64 28.8-64 64v576c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64v-576c0-35.2-28.8-64-64-64zM512 892c-156.85 0-284-127.148-284-284 0-156.85 127.15-284 284-284 156.852 0 284 127.15 284 284 0 156.852-127.146 284-284 284zM960 448h-128v-64h128v64z"></path>
              </svg>
            </div>
            <main className="home-content03">
              <h1 className="home-header04">IMAGE GALLERY</h1>
              <p className="home-description02">
                Creations from the Community (Updated Automatically)
              </p>
            </main>
            <img
              alt="image"
              src="/photo_2024-01-04_18-01-52-1200w.jpg"
              className="home-image4"
            />
          </section>
        </main>
      </section>
      <section className="home-section03">
        <h2 className="home-text24">Key Features</h2>
        <div className="home-features">
          <header className="home-feature feature feature-active">
            <h3 className="home-text25">Fair Launched</h3>
            <p className="home-text26">
              GOR Network is Fair Launched on November 2023
            </p>
          </header>
          <header className="home-feature1 feature">
            <h3 className="home-text27">No Premine, No ICOs</h3>
            <p className="home-text28">
              No coins is premined by the developers. No Coins is allocated to
              developers.
            </p>
          </header>
          <header className="home-feature2 feature">
            <h3 className="home-text29">100% Open Source</h3>
            <p className="home-text30">
              GOR Network is a hard-fork of Kaspa. GOR maintains a free,
              open-source code that is 100% decentralized.
            </p>
          </header>
        </div>
        <div className="home-features1">
          <header className="home-feature3 feature feature-active">
            <h3 className="home-text31">ASIC Resistant</h3>
            <p className="home-text32">
              To combat centralizations of hash power in select few, GOR uses a
              modified Algorithm to ensure ASIC Resistance
            </p>
          </header>
          <header className="home-feature4 feature">
            <h3 className="home-text33">Capped Supply</h3>
            <p className="home-text34">
              There will be 28.7 Billion of GOR at max supply.  And that&apos;s
              it.
            </p>
          </header>
          <header className="home-feature5 feature">
            <h3 className="home-text35">Halving Schedule</h3>
            <p className="home-text36">
              Halving schedule reduces the number of coins rewarded per block
              every 2 years.
            </p>
          </header>
        </div>
        <h2 className="home-heading02 section-heading">Facts &amp; Figures</h2>
        <div className="home-note">
          <div className="home-content04">
            <main className="home-main1">
              <h2 className="home-heading03">Quick Facts</h2>
              <p className="home-paragraph1">
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
            <div className="home-container01">
              <div className="home-container02">
                <div className="home-feature-card">
                  <svg viewBox="0 0 1024 1024" className="home-icon009">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <h2 className="home-text44">Launch Date</h2>
                  <span className="home-text45">November 2023</span>
                </div>
                <div className="home-feature-card1">
                  <svg viewBox="0 0 1024 1024" className="home-icon011">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <h2 className="home-text46">Consensus</h2>
                  <span className="home-text47">Proof-Of-Work</span>
                </div>
                <div className="home-feature-card2">
                  <svg viewBox="0 0 1024 1024" className="home-icon013">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <h2 className="home-text48">Ticker</h2>
                  <span className="home-text49">$GOR</span>
                </div>
                <div className="home-feature-card3">
                  <svg viewBox="0 0 1024 1024" className="home-icon015">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <h2 className="home-text50">Circ. Supply</h2>
                  <span className="home-text51">1.8 Billion GOR</span>
                </div>
              </div>
              <div className="home-container03">
                <div className="home-feature-card4">
                  <svg viewBox="0 0 1024 1024" className="home-icon017">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <h2 className="home-text52">Algorithm</h2>
                  <span className="home-text53">kHeavyHash</span>
                </div>
                <div className="home-feature-card5">
                  <svg viewBox="0 0 1024 1024" className="home-icon019">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <h2 className="home-text54">Platforms</h2>
                  <span className="home-text55">Windows &amp; Linux</span>
                </div>
                <div className="home-feature-card6">
                  <svg viewBox="0 0 1024 1024" className="home-icon021">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <h2 className="home-text56">Block Time</h2>
                  <span className="home-text57">0.1 Seconds</span>
                </div>
                <div className="home-feature-card7">
                  <svg viewBox="0 0 1024 1024" className="home-icon023">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <h2 className="home-text58">Max. Supply</h2>
                  <span className="home-text59">28.7 Billion Gor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-section04">
        <header id="Learn" className="home-header05">
          <header className="home-left1">
            <span className="home-section05 section-head">TECHNICAL INFO</span>
            <h2 className="section-heading">Read, Learn, Build</h2>
          </header>
          <div className="home-right1">
            <p className="home-paragraph2 section-description">
              Here you may find most documents pertaining to GOR Network.
            </p>
          </div>
        </header>
        <main className="home-cards1">
          <section id="Whitepaper" className="home-card02">
            <div className="home-icon025">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon026"
              >
                <path d="M838.857 272c5.714 5.714 10.857 12.571 16 20.571h-269.714v-269.714c8 5.143 14.857 10.286 20.571 16zM566.857 365.714h310.857v603.429c0 30.286-24.571 54.857-54.857 54.857h-768c-30.286 0-54.857-24.571-54.857-54.857v-914.286c0-30.286 24.571-54.857 54.857-54.857h457.143v310.857c0 30.286 24.571 54.857 54.857 54.857zM658.286 786.286v-36.571c0-10.286-8-18.286-18.286-18.286h-402.286c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h402.286c10.286 0 18.286-8 18.286-18.286zM658.286 640v-36.571c0-10.286-8-18.286-18.286-18.286h-402.286c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h402.286c10.286 0 18.286-8 18.286-18.286zM658.286 493.714v-36.571c0-10.286-8-18.286-18.286-18.286h-402.286c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h402.286c10.286 0 18.286-8 18.286-18.286z"></path>
              </svg>
            </div>
            <main className="home-content05">
              <h1 className="home-header06">GOR Whitepaper</h1>
              <p className="home-description03">
                <span>Newest edition of GOR Whitepaper</span>
                <br></br>
                <br></br>
              </p>
              <a
                href="https://github.com/ProtossSB/GOR-Website/blob/main/Gorbaniov%20Network%20WP.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link08"
              >
                GOR WP -&gt;
              </a>
            </main>
          </section>
          <section className="home-card03">
            <div className="home-icon028">
              <img
                alt="image"
                src="/Icons/group%201314-200h.png"
                className="home-icon029"
              />
            </div>
            <main className="home-content06">
              <h1 className="home-header07">
                GHOSTDAG
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h1>
              <p className="home-description04">
                <span>
                  Read about GHOSTDAG, the seminal work that help launched GOR
                </span>
                <br></br>
              </p>
              <a
                href="https://eprint.iacr.org/2018/104.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link09"
              >
                GHOSTDAG WP -&gt;
              </a>
            </main>
          </section>
          <section className="home-card04">
            <div className="home-icon030">
              <img
                alt="image"
                src="/Icons/group%201317-1200w.png"
                className="home-icon031"
              />
            </div>
            <main className="home-content07">
              <h1 className="home-header08">GOR Github</h1>
              <p className="home-description05">
                Head over to get the Source Code
              </p>
              <a
                href="https://github.com/ixbaseANT/gord"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link10"
              >
                GOR Github -&gt;
              </a>
            </main>
          </section>
        </main>
      </section>
      <section className="home-section06">
        <main className="home-pricing">
          <header className="home-header09">
            <header className="home-left2">
              <span className="home-section07 section-head">TIMELINE</span>
              <h2 className="section-heading home-heading05">
                DEVELOPMENT STAGES
              </h2>
            </header>
            <div className="home-right2">
              <p className="home-paragraph3 section-description">
                Keep track of our Development progress here.
              </p>
            </div>
          </header>
          <div className="home-plans-container">
            <main className="home-plans">
              <div className="home-plan">
                <div className="home-details">
                  <div className="home-header10">
                    <label className="home-name">STAGE 1 :</label>
                    <div className="home-pricing1">
                      <h1 className="home-price">LAUNCH</h1>
                    </div>
                  </div>
                  <p className="home-description06">The Beginning</p>
                </div>
                <div className="home-buy-details">
                  <div className="home-features2">
                    <span className="home-heading06">
                      <span>Early Steps</span>
                      <br></br>
                    </span>
                    <div className="home-list">
                      <div className="home-mark">
                        <div className="home-icon032">
                          <svg viewBox="0 0 1024 1024" className="home-icon033">
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                        </div>
                        <label className="home-label">
                          Launch of the GOR Blockchain
                        </label>
                      </div>
                      <div className="home-mark01">
                        <div className="home-icon035">
                          <svg viewBox="0 0 1024 1024" className="home-icon036">
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                        </div>
                        <label className="home-label01">
                          Launch Wallet &amp; Explorer
                        </label>
                      </div>
                      <div className="home-mark02">
                        <div className="home-icon038">
                          <svg viewBox="0 0 1024 1024" className="home-icon039">
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                        </div>
                        <label className="home-label02">
                          Launch GOR Mining Pool
                        </label>
                      </div>
                      <div className="home-mark03">
                        <div className="home-icon041">
                          <svg viewBox="0 0 1024 1024" className="home-icon042">
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
                  <div className="home-header11">
                    <label className="home-name1">STAGE 2:</label>
                    <div className="home-pricing2">
                      <h1 className="home-price1">DEVELOPMENT</h1>
                    </div>
                  </div>
                  <p className="home-description07">
                    Continuing to enhance and maintain the Network
                  </p>
                </div>
                <div className="home-buy-details1">
                  <div className="home-features3">
                    <span className="home-heading07">Immediate Steps</span>
                    <div className="home-list1">
                      <div className="home-mark04">
                        <div className="home-icon044">
                          <svg viewBox="0 0 1024 1024" className="home-icon045">
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="home-label04">
                          Smart-Contracts Integration
                        </label>
                      </div>
                      <div className="home-mark05">
                        <div className="home-icon047">
                          <svg viewBox="0 0 1024 1024" className="home-icon048">
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="home-label05">WEB3 Development</label>
                      </div>
                      <div className="home-mark06">
                        <div className="home-icon050">
                          <svg viewBox="0 0 1024 1024" className="home-icon051">
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="home-label06">
                          Create Marketplace
                        </label>
                      </div>
                      <div className="home-mark07">
                        <div className="home-icon053">
                          <svg viewBox="0 0 1024 1024" className="home-icon054">
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="home-label07">
                          Enhance Network Security 
                        </label>
                      </div>
                      <div className="home-mark08">
                        <div className="home-icon056">
                          <svg viewBox="0 0 1024 1024" className="home-icon057">
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="home-label08">
                          Enhance Network Performance
                        </label>
                      </div>
                      <div className="home-mark09">
                        <div className="home-icon059">
                          <svg viewBox="0 0 1024 1024" className="home-icon060">
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="home-label09">Expand Community</label>
                      </div>
                      <div className="home-mark10">
                        <div className="home-icon062">
                          <svg viewBox="0 0 1024 1024" className="home-icon063">
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
                  <div className="home-header12">
                    <label className="home-name2">STAGE 3:</label>
                    <div className="home-pricing3">
                      <h1 className="home-price2">GROWTH</h1>
                    </div>
                  </div>
                  <p className="home-description08">
                    Expansion &amp; Diversification
                  </p>
                </div>
                <div className="home-buy-details2">
                  <div className="home-features4">
                    <span className="home-heading08">Future Steps</span>
                    <div className="home-list2">
                      <div className="home-mark11">
                        <div className="home-icon065">
                          <svg viewBox="0 0 1024 1024" className="home-icon066">
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="home-label11">Expand UserBase</label>
                      </div>
                      <div className="home-mark12">
                        <div className="home-icon068">
                          <svg viewBox="0 0 1024 1024" className="home-icon069">
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="home-label12">
                          Increase the number and variety of features, assets,
                          and items on the marketplace.
                        </label>
                      </div>
                      <div className="home-mark13">
                        <div className="home-icon071">
                          <svg viewBox="0 0 1024 1024" className="home-icon072">
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="home-label13">
                          Raise awareness and recognition of GOR Network in the
                          industry.
                        </label>
                      </div>
                      <div className="home-mark14">
                        <div className="home-icon074">
                          <svg viewBox="0 0 1024 1024" className="home-icon075">
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="home-label14">
                          Develop and Innovate features and services.
                        </label>
                      </div>
                      <div className="home-mark15">
                        <div className="home-icon077">
                          <svg viewBox="0 0 1024 1024" className="home-icon078">
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
                  <div className="home-header13">
                    <label className="home-name3">STAGE 4:</label>
                    <div className="home-pricing4">
                      <h1 className="home-price3">EVOLUTION</h1>
                    </div>
                  </div>
                  <p className="home-description09">
                    Expansion &amp; Diversification
                  </p>
                </div>
                <div className="home-buy-details3">
                  <div className="home-features5">
                    <span className="home-heading09">Continued Developing</span>
                    <div className="home-list3">
                      <div className="home-mark16">
                        <div className="home-icon080">
                          <svg viewBox="0 0 1024 1024" className="home-icon081">
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="home-label16">
                          future-proof response to changing needs and
                          requirements
                        </label>
                      </div>
                      <div className="home-mark17">
                        <div className="home-icon083">
                          <svg viewBox="0 0 1024 1024" className="home-icon084">
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="home-label17">
                          Development of assets and items to reflect the latest
                          trends and developments.
                        </label>
                      </div>
                      <div className="home-mark18">
                        <div className="home-icon086">
                          <svg viewBox="0 0 1024 1024" className="home-icon087">
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="home-label18">
                          Development of the marketplace to improve user
                          experience and satisfaction.
                        </label>
                      </div>
                      <div className="home-mark19">
                        <div className="home-icon089">
                          <svg viewBox="0 0 1024 1024" className="home-icon090">
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className="home-label19">
                          Developing APIs and SDKs for enhanced compatibility
                          with other platforms.
                        </label>
                      </div>
                      <div className="home-mark20">
                        <div className="home-icon092">
                          <svg viewBox="0 0 1024 1024" className="home-icon093">
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
      <section className="home-section08">
        <header id="Social" className="home-header14">
          <span className="home-section09 section-head">COMMUNITY</span>
          <h2 className="home-heading10 section-heading">
            Join our Community on these Platforms
          </h2>
        </header>
        <main className="home-cards2">
          <section className="home-card05">
            <main className="home-content08">
              <header className="home-header15">
                <div className="home-container04">
                  <div className="home-icon095">
                    <svg viewBox="0 0 1024 1024" className="home-icon096">
                      <path d="M679.429 746.857l84-396c7.429-34.857-12.571-48.571-35.429-40l-493.714 190.286c-33.714 13.143-33.143 32-5.714 40.571l126.286 39.429 293.143-184.571c13.714-9.143 26.286-4 16 5.143l-237.143 214.286-9.143 130.286c13.143 0 18.857-5.714 25.714-12.571l61.714-59.429 128 94.286c23.429 13.143 40 6.286 46.286-21.714zM1024 512c0 282.857-229.143 512-512 512s-512-229.143-512-512 229.143-512 512-512 512 229.143 512 512z"></path>
                    </svg>
                  </div>
                </div>
                <h1 className="home-header16">Telegram</h1>
              </header>
              <p className="home-description10">GOR Telegram Community</p>
              <div className="home-button">
                <a
                  href="https://t.me/gorcurrency"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link11"
                >
                  <p className="flink home-text69">Join -&gt;</p>
                </a>
              </div>
            </main>
          </section>
          <section className="home-card06">
            <main className="home-content09">
              <header className="home-header17">
                <div className="home-container05">
                  <div className="home-icon098 iconcolor">
                    <svg viewBox="0 0 1024 1024" className="home-icon099">
                      <path d="M512 219.429c-237.714 0-438.857 133.714-438.857 292.571 0 85.143 57.143 166.286 156 222.286l49.714 28.571-15.429 54.857c-10.857 40.571-25.143 72-40 98.286 57.714-24 110.286-56.571 157.143-97.714l24.571-21.714 32.571 3.429c24.571 2.857 49.714 4.571 74.286 4.571 237.714 0 438.857-133.714 438.857-292.571s-201.143-292.571-438.857-292.571zM1024 512c0 202.286-229.143 365.714-512 365.714-28 0-56-1.714-82.857-4.571-74.857 66.286-164 113.143-262.857 138.286-20.571 5.714-42.857 9.714-65.143 12.571h-2.857c-11.429 0-21.714-9.143-24.571-21.714v-0.571c-2.857-14.286 6.857-22.857 15.429-33.143 36-40.571 77.143-74.857 104-170.286-117.714-66.857-193.143-170.286-193.143-286.286 0-202.286 229.143-365.714 512-365.714v0c282.857 0 512 163.429 512 365.714z"></path>
                    </svg>
                  </div>
                </div>
                <h1 className="home-header18">Discord</h1>
              </header>
              <p className="home-description11">GOR Discord Community</p>
              <div className="home-button1">
                <a
                  href="https://discord.com/invite/XrrPtjAkc8"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link12"
                >
                  <p className="home-text70 flink">Join -&gt;</p>
                </a>
              </div>
            </main>
          </section>
          <section className="home-card07">
            <main className="home-content10">
              <header className="home-header19">
                <div className="home-container06">
                  <div className="home-icon101 iconcolor">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="home-icon102"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <h1 className="home-header20">Twitter/X</h1>
              </header>
              <p className="home-description12">
                GOR Official Twitter/X Community
              </p>
              <div className="home-button2">
                <a
                  href="https://twitter.com/GorCurrency"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link13"
                >
                  <p className="home-text71 flink">Join -&gt;</p>
                </a>
              </div>
            </main>
          </section>
        </main>
        <main className="home-cards3">
          <section className="home-card08">
            <main className="home-content11">
              <header className="home-header21">
                <div className="home-container07">
                  <div className="home-icon104 iconcolor">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon105"
                    >
                      <path d="M829.143 73.143c26.857 0 48.571 21.714 48.571 48.571v780.571c0 26.857-21.714 48.571-48.571 48.571h-223.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-420c-26.857 0-48.571-21.714-48.571-48.571v-780.571c0-26.857 21.714-48.571 48.571-48.571h780.571z"></path>
                    </svg>
                  </div>
                  <h1 className="home-header22">Facebook</h1>
                </div>
              </header>
              <p className="home-description13">GOR Facebook Community</p>
              <div className="home-button3">
                <a
                  href="https://www.facebook.com/profile.php?id=100092673184621"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link14"
                >
                  <p className="home-text72">Join -&gt;</p>
                </a>
              </div>
            </main>
          </section>
          <section className="home-card09">
            <main className="home-content12">
              <header className="home-header23">
                <div className="home-container08">
                  <div className="iconcolor">
                    <svg viewBox="0 0 1024 1024" className="home-icon108">
                      <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                    </svg>
                  </div>
                </div>
                <h1 className="home-header24">Youtube</h1>
              </header>
              <p className="home-description14">Official GOR DEV Channel</p>
              <div className="home-button4">
                <a
                  href="https://www.youtube.com/@GorbaniovNetwork"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link15"
                >
                  <p className="home-text73">Join -&gt;</p>
                </a>
              </div>
            </main>
          </section>
          <section className="home-card10">
            <main className="home-content13">
              <header className="home-header25">
                <div className="home-container09">
                  <div className="iconcolor">
                    <svg viewBox="0 0 1024 1024" className="home-icon111">
                      <path d="M938.667 381.568v260.864l-182.613-130.432zM128 170.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v426.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h469.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-130.432l231.211 165.163c19.157 13.696 45.824 9.259 59.52-9.899 5.376-7.595 7.979-16.341 7.936-24.832v-426.667c0-23.552-19.115-42.667-42.667-42.667-9.301 0-17.92 2.987-24.789 7.936l-231.211 165.163v-130.432c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504zM128 256h469.333c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v426.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-469.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-426.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501z"></path>
                    </svg>
                  </div>
                </div>
                <h1 className="home-header26">TikTok</h1>
              </header>
              <p className="home-description15">GOR TikTok Shorts</p>
              <div className="home-button5">
                <a
                  href="https://www.tiktok.com/@gorbaniovnetwork"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link16"
                >
                  <p className="home-text74">Join -&gt;</p>
                </a>
              </div>
            </main>
          </section>
        </main>
      </section>
      <section className="home-section10">
        <header id="FAQ" className="home-header27">
          <span className="section-head">FAQ</span>
          <h2 className="home-heading11 section-heading">
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
                <span className="home-text75">How can I get GOR?</span>
                <span data-role="accordion-content" className="home-text76">
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
                  className="home-link17"
                >
                  GOR-KDX Wallet
                </a>
              </div>
              <div data-role="accordion-icon">
                <svg viewBox="0 0 1024 1024" className="home-icon113">
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element1 accordion-element"
            >
              <div className="home-details5">
                <span className="home-text82">Is GOR ASIC Resistant?</span>
                <span data-role="accordion-content" className="home-text83">
                  No. GOR is ASIC Friendly. To better Secure the network
                  providing enhanced protection, ASIC Devices are necessary.
                </span>
              </div>
              <div data-role="accordion-icon">
                <svg viewBox="0 0 1024 1024" className="home-icon115">
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element2 accordion-element"
            >
              <div className="home-details6">
                <span className="home-text84">How can I mine GOR?</span>
                <span data-role="accordion-content" className="home-text85">
                  <span>You may find mining resources on these pools :</span>
                  <br></br>
                  <br></br>
                </span>
                <a
                  href="https://gorbaniov.com/pool"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link18 a"
                >
                  GORBANIOV POOL (Israel)
                </a>
                <a
                  href="https://gorbaniov.com/pool"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link19 a"
                >
                  <span>IXBASE POOL (Ukraine</span>
                  <span>)</span>
                </a>
                <a
                  href="https://gorbaniov.com/pool"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link20 a"
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
                <a
                  href="https://mining4people.com/pool/gor-pplns"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link21 a"
                >
                  <span>MINING 4 PEOPLE (Multiple Countries) </span>
                  <span>-&gt;</span>
                </a>
              </div>
              <div data-role="accordion-icon">
                <svg viewBox="0 0 1024 1024" className="home-icon117">
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element3 accordion-element"
            >
              <div className="home-details7">
                <span className="home-text95">Are GOR made by a Company?</span>
                <span data-role="accordion-content" className="home-text96">
                  No. GOR is a decentralized Open-Source Project. The Community
                  will Govern.
                </span>
              </div>
              <div data-role="accordion-icon">
                <svg viewBox="0 0 1024 1024" className="home-icon119">
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element4 accordion-element"
            >
              <div className="home-details8">
                <span className="home-text97">
                  Can DEVs do something about the price?
                </span>
                <span data-role="accordion-content" className="home-text98">
                  Prices depends on the market. DEVs do not hold any allocated
                  coins or engage in market-making activities.
                </span>
              </div>
              <div data-role="accordion-icon">
                <svg viewBox="0 0 1024 1024" className="home-icon121">
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
            </div>
          </div>
        </main>
      </section>
      <Footer></Footer>
      <div>
        <div className="home-container11">
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
