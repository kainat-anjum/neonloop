import styled from "styled-components";

export const HomeWrapperStyled = styled.section`

  .banner-image {
    height: 500px;
    width: 100%;
    object-fit: cover;
  }

  .banner-wrapper {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 500px;
      background: #24baee;
      z-index: 1;
      left: 0;
      opacity: 0.6;
      top: 0;
    }
  }

  .main-tagline {
    position: absolute;
    top: 26%;
    color: #fff;
    font-size: 50px;
    font-weight: 600;
    left: 0;
    right: 0;
    z-index: 2;
  }

  .sub-tagline {
    position: absolute;
    top: 46%;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    left: 0;
    right: 0;
    z-index: 2;
  }

  .about-us {
    padding-top: 50px;

    h3 {
      font-size: 30px;
      color: #24baee;
    }

    p {
      max-width: 1000px;
      margin: auto;
    }
  }

  .services-wrapper {
    max-width: 1000px;
    margin: auto;
    text-align: left;
    position: relative;
  }

  .services-section {
    background: #d0dce01f;
    padding: 50px 0;
    margin: 100px 0;

    h3 {
      margin-top: 0;
      font-size: 30px;
      color: #24baee;
      text-align: center;
    }

    .services {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .projects-section {
    max-width: 1000px;
    margin: auto;

    h3 {
      font-size: 30px;
      color: #24baee;
      text-align: center;
    }

    .card-wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 30px;
    }

    .card-image{
      width:100%;
      height: 200px;
      object-fit: cover;
    }

    .card {
      border: 1px solid #ccc;
      padding: 20px;
      border-radius: 4px;
      h4 {
      }

      p {
      }
    }
  }
`;
