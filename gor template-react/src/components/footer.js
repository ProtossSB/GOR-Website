import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-content">
        <main className="footer-main-content">
          <div className="footer-content1">
            <header className="footer-main">
              <div className="footer-header">
                <img
                  alt={props.image_alt}
                  src={props.image_src}
                  className="footer-image"
                />
                <span className="footer-text footer-header">
                  <span className="">GORBANIOV</span>
                  <br className=""></br>
                  <span className="">NETWORK</span>
                  <br className=""></br>
                </span>
              </div>
              <div className="footer-socials"></div>
            </header>
            <header className="footer-categories">
              <div className="footer-category">
                <div className="footer-header1">
                  <span className="footer-header">{props.Text1}</span>
                </div>
                <div className="footer-links">
                  <span className="footer-link">
                    <span className="">FAQ</span>
                    <br className=""></br>
                  </span>
                  <span className="footer-link">{props.Text2}</span>
                  <span className="footer-link">{props.Text3}</span>
                  <span className="footer-link">{props.Text4}</span>
                </div>
              </div>
              <div className="footer-category1">
                <div className="footer-header2">
                  <span className="footer-header">{props.Text5}</span>
                </div>
                <div className="footer-links1">
                  <a
                    href="https://t.me/gorcurrency"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-text13 footer-link"
                  >
                    <span className="">Telegram</span>
                    <br className=""></br>
                  </a>
                  <a
                    href="https://discord.com/invite/XrrPtjAkc8"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-text16 footer-link"
                  >
                    {props.Text6}
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100092673184621"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-text17 footer-link"
                  >
                    {props.Text7}
                  </a>
                  <a
                    href="https://twitter.com/GorCurrency"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-text18 footer-link"
                  >
                    {props.Text8}
                  </a>
                  <a
                    href="https://www.youtube.com/@GorbaniovNetwork"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-text19 footer-link"
                  >
                    {props.Text9}
                  </a>
                  <a
                    href="https://www.tiktok.com/@gorbaniovnetwork"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-text20 footer-link"
                  >
                    {props.Text10}
                  </a>
                </div>
              </div>
            </header>
          </div>
          <section className="footer-copyright">
            <span className="footer-text21">{props.text1}</span>
          </section>
        </main>
        <main className="footer-subscribe">
          <main className="footer-main1">
            <h1 className="footer-heading">{props.Heading}</h1>
            <div className="footer-input-field">
              <input
                type="email"
                placeholder={props.textinput_placeholder}
                className="footer-textinput input"
              />
              <div className="footer-buy button">
                <span className="footer-text22">{props.Text}</span>
                <span className="footer-text23">
                  <span className="">Subscribe now</span>
                  <br className=""></br>
                </span>
              </div>
            </div>
          </main>
          <h1 className="footer-notice">{props.Notice}</h1>
        </main>
        <section className="footer-copyright1">
          <span className="footer-text26">{props.text}</span>
        </section>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  Text3: 'Social Media',
  Text: '->',
  Text1: 'Pages',
  Text4: 'Explorer',
  rootClassName: '',
  Text7: 'Facebook',
  Text10: 'TikTok',
  image_src: '/Branding/v1-200h.png',
  Text2: 'GitHUB',
  Notice:
    'By subscribing to our newsletter you agree with our Terms and Conditions.',
  Text6: 'Discord',
  Heading: 'Subscribe to our newsletter',
  Text8: 'Twitter',
  Text5: 'Community',
  textinput_placeholder: 'Enter your email',
  image_alt: 'image',
  Text9: 'Youtube',
  text: '© 2022 latitude. All Rights Reserved.',
  text1: '© 2023 GORBANIOV All Rights Reserved.',
}

Footer.propTypes = {
  Text3: PropTypes.string,
  Text: PropTypes.string,
  Text1: PropTypes.string,
  Text4: PropTypes.string,
  rootClassName: PropTypes.string,
  Text7: PropTypes.string,
  Text10: PropTypes.string,
  image_src: PropTypes.string,
  Text2: PropTypes.string,
  Notice: PropTypes.string,
  Text6: PropTypes.string,
  Heading: PropTypes.string,
  Text8: PropTypes.string,
  Text5: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  image_alt: PropTypes.string,
  Text9: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default Footer
