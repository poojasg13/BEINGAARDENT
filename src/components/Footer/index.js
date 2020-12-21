import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";


export default class Feature extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <FooterContainer>
        <FooterWrap>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/">Sports Arena</SocialLogo>
              <SocialIcons>
                <SocialIconLink
                  href="https://www.facebook.com/pooja.galer"
                  target="_blank"
                  aria-label="Facebook"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.instagram.com/pooja_galer/?hl=en"
                  target="_blank"
                  aria-label="Instagram"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href="/"
                  target="_blank"
                  aria-label="Youtube"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink
                  href="https://twitter.com/GalerPooja"
                  target="_blank"
                  aria-label="Twitter"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.linkedin.com/in/pooja-galer-ba1587137"
                  target="_blank"
                  aria-label="LinkedIn"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    );
  }
}

