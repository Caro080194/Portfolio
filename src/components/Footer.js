import styled from "styled-components";

const Footer = () => {
    return (
        <FooterContainer>
          <Logo>
           <img src="/assets/Cat-Emoji.png" alt="Logo"/>
            Caroline Le Ny
          </Logo>
          <Logo>@caroline.leny 2024</Logo>
          <Logo>PRIVACY-TERMS</Logo>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.div `
    width: 100vw;
    height: 80px;
    background: var(--primary-color);
    border-radius: 40px 40px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    /* Phones css */
    @media only screen and (max-width: 767px) {
      height: 40px;

      img{
        width: 22%;
        padding- left: 5px;
        padding-top: 5px;
      }
    }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--secondary-color);
  opacity: 0.7;
  margin: 20px;

  /* Phones css */
  @media only screen and (max-width: 767px) {
    margin: 10px;
    font-size: 0.5em;
  }
`;