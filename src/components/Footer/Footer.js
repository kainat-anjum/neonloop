import React from "react";
import { FooterStyled } from "./style";

const Footer = () => {
  return (
    <FooterStyled id='footer' >
      <article className="footer-grid">
        <ul>
          <li className='footer-heading'>Neonloops</li>
          <li>Plot# 189-A, Korang Road, I-10/3, Islamabad.</li>
          <li>2366 Walsh Ave., Santa Clara, CA 95051, USA</li>
        </ul>

        <ul className='company'>
          <li className='footer-heading'>Services</li>
          <li>Abc</li>
          <li>Def</li>
          <li>Hig</li>
          <li>Klmn</li>
        </ul>

        <ul>
          <li className='footer-heading'>Company</li>
          <li>About Us</li>
        </ul>
      </article>
    </FooterStyled>
  );
};

export default Footer;
