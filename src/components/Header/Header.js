import React from "react";
import { HeaderStyled } from "./style";

const Header = () => {
    return(
  <HeaderStyled>
    <img className='logo' src="/neonloops.jpg" />
    <article className='header-grid'>
      <a href='#about'>About Us</a>
      <a href='#services'>Services</a>
      <a href='#projects'>Projects</a>
      <a href='#footer'>Contact</a>
    </article>
  </HeaderStyled>
  )
};

export default Header;
