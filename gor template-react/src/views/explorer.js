import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './explorer.css'

const Explorer = (props) => {
  return (
    <div className="explorer-container">
      <Helmet>
        <title>Explorer - GOR TEMPLATE</title>
        <meta property="og:title" content="Explorer - GOR TEMPLATE" />
      </Helmet>
      <Navbar
        image_src1="/Branding/v1-1500h.png"
        rootClassName="navbar-root-class-name1"
      ></Navbar>
      <div className="explorer-explorer-title">
        <h2 className="explorer-text section-head">GOR NETWORK Explorer</h2>
      </div>
      <div className="explorer-cards">
        <section className="explorer-card">
          <main className="explorer-content">
            <header className="explorer-header">
              <h1 className="explorer-header01 card-title">Current Price</h1>
            </header>
            <div className="explorer-container01">
              <span className="price">$ X.XXX</span>
            </div>
            <div className="explorer-container02">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="explorer-icon"
              >
                <path d="M920.571 554.857c0 19.429-8 37.714-21.143 51.429l-42.857 42.857c-13.714 13.714-32.571 21.714-52 21.714s-38.286-8-51.429-21.714l-168-167.429v402.286c0 41.143-34.286 66.857-73.143 66.857h-73.143c-38.857 0-73.143-25.714-73.143-66.857v-402.286l-168 167.429c-13.143 13.714-32 21.714-51.429 21.714s-38.286-8-51.429-21.714l-42.857-42.857c-13.714-13.714-21.714-32-21.714-51.429s8-38.286 21.714-52l372-372c13.143-13.714 32-21.143 51.429-21.143s38.286 7.429 52 21.143l372 372c13.143 13.714 21.143 32.571 21.143 52z"></path>
              </svg>
              <span className="explorer-text02 priceup">2%</span>
            </div>
            <span className="explorer-text03 section-description">
              Updated on XX:XX X,XXX,XXXX
            </span>
            <span className="explorer-text04 smallprint">
              *Market data from Coingecko.
            </span>
          </main>
        </section>
        <section className="explorer-card1">
          <main className="explorer-content1">
            <header className="explorer-header02">
              <h1 className="explorer-header03 card-title">Transactions</h1>
            </header>
            <div className="explorer-container03">
              <div className="explorer-container04"></div>
              <span className="explorer-text05">123,456,786,235 </span>
              <span className="explorer-text06 gray">(1,250 TPS)</span>
            </div>
            <span className="explorer-text07 section-description">
              Updated on XX:XX X,XXX,XXXX
            </span>
          </main>
        </section>
        <section className="explorer-card2">
          <main className="explorer-content2">
            <header className="explorer-header04">
              <h1 className="explorer-header05 card-title">Price History</h1>
            </header>
            <div className="explorer-container05">
              <div className="explorer-container06"></div>
              <span className="explorer-text08 section-description">
                DISPLAY WEEKLY GRAPH
              </span>
            </div>
            <div className="explorer-container07"></div>
            <span className="explorer-text09 smallprint">
              *Market data from Coingecko.
            </span>
          </main>
        </section>
      </div>
      <div className="explorer-search">
        <h2 className="section-head">GOR NETWORK SEARCH</h2>
        <div className="explorer-container08">
          <span className="gray Content searchbar">
            Search for GOR:Address, Transactions, or Block ID
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <svg viewBox="0 0 950.8571428571428 1024" className="explorer-icon2">
            <path d="M658.286 475.429c0-141.143-114.857-256-256-256s-256 114.857-256 256 114.857 256 256 256 256-114.857 256-256zM950.857 950.857c0 40-33.143 73.143-73.143 73.143-19.429 0-38.286-8-51.429-21.714l-196-195.429c-66.857 46.286-146.857 70.857-228 70.857-222.286 0-402.286-180-402.286-402.286s180-402.286 402.286-402.286 402.286 180 402.286 402.286c0 81.143-24.571 161.143-70.857 228l196 196c13.143 13.143 21.143 32 21.143 51.429z"></path>
          </svg>
        </div>
      </div>
      <div className="explorer-cards1">
        <section className="explorer-card3">
          <main className="explorer-content3">
            <header className="explorer-header06">
              <h1 className="explorer-header07 card-title">
                LATEST TRANSACTIONS
              </h1>
            </header>
            <div className="explorer-container09"></div>
            <span className="explorer-text12 section-description">
              TABLE HERE
            </span>
          </main>
          <div className="explorer-container10">
            <span className="explorer-text13 a">VIEW ALL TRANSACTIONS</span>
          </div>
        </section>
        <section className="explorer-card4">
          <main className="explorer-content4">
            <header className="explorer-header08">
              <h1 className="explorer-header09 card-title">LATEST BLOCKS</h1>
            </header>
            <div className="explorer-container11"></div>
            <span className="explorer-text14 section-description">
              TABLE HERE
            </span>
          </main>
          <div className="explorer-container12">
            <span className="explorer-text15 a">VIEW ALL TRANSACTIONS</span>
          </div>
        </section>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Explorer
