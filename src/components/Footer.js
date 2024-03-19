import useScreenSize from "../hooks/useScreenSize";
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
    width: 100%;
    height: 120px;
    background: var(--primary-color);
    border-radius: 40px 40px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--secondary-color);
  opacity: 0.7;
  margin: 20px;
`;