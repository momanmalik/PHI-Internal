import React from "react";
import Footer from "../components/footer";
import Icon from "../components/footer/icons";
import { Link } from "react-router-dom";
import { linkStyles } from "../components/footer/styles/footer";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Link to="/TermsOfCondition" style={linkStyles}>
              Terms Of Service
            </Link>
          </Footer.Column>

          <Footer.Column>
            <Link to="/PrivacyPolicy" style={linkStyles}>
              Privacy Policy
            </Link>
          </Footer.Column>
          <Footer.Column>
            <Link to="/PrivacyPolicy" style={linkStyles}>
              About Us
            </Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>WLU PHI SOCIETY</Footer.Title>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href="https://www.linkedin.com/company/wlu-phi-society/">
              <Icon className="fab fa-linkedin" />
              Linkedin
            </Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href="https://www.instagram.com/wluphi/">
              <Icon className="fab fa-instagram" />
              Instagram
            </Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href="https://www.facebook.com/wluPHI/">
              <Icon className="fab fa-facebook" />
              Facebook
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
