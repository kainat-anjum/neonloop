import React from "react";
import { FooterStyled } from "./style";

const Footer = () => {
  return (
    <FooterStyled id='footer' >
      <article className="footer-grid">
        <ul>
          <li className='footer-heading'>Neonloops</li>
          <li>UAE office: +971562827654</li>
          <li>Oman office: +96894342882</li>
        </ul>

        <ul className='company'>
          {/* <li className='footer-heading'>Services</li> */}
          {/* <li>Abc</li>
          <li>Def</li>
          <li>Hig</li>
          <li>Klmn</li> */}
        </ul>

        <ul>
        </ul>
      </article>
    </FooterStyled>
  );
};

export default Footer;
