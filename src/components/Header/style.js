import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 100px;
  background: #fff;

  .logo {
    height: 30px;
  }

  .header-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 50px;
  }

  a {
    color: #5a595b;
    text-decoration: none;
  }
`;
