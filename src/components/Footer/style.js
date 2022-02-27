import styled from "styled-components";

export const FooterStyled = styled.footer`
  background: #24baee;
  margin-top: 100px;
  height: 100px;
  padding: 20px 100px;
  color: #fff;

  .footer-heading {
    font-weight: bold;
    margin-bottom: 10px
  }

  .footer-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: left;

    li {
      list-style: none;
    }
  }

  .company{
      justify-self:center;

  }
`;
