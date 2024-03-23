import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { handleClick, handleMobileClick } from "../helps/navClick";
import { useMobileMenu } from "../hooks/useMobileMenu";

const Navbar = () => {
  const { mobile, showMenu, toggleMenu } = useMobileMenu();

  return (
    <Navcontainer>
      <Logo>
        <img src="/assets/Cat-Emoji.png" alt="Logo" />
        Caroline Le Ny
      </Logo>
      {!mobile && (
        <NavLink>
          <Button onClick={() => handleClick("home")}>Home</Button>
          <Button onClick={() => handleClick("about")}>About</Button>
          <Button onClick={() => handleClick("projects")}>Projects</Button>
          <Button onClick={() => handleClick("contacts")}>Contacts</Button>
          <Button onClick={() => window.open('https://raw.githubusercontent.com/Caro080194/Portfolio/main/CV.pdf', '_blank')}>CV</Button>
        </NavLink>
      )}
      {mobile && (
        <>
          <MenuIcon onClick={toggleMenu}>
            <FontAwesomeIcon icon={showMenu ? faTimes : faBars} />
          </MenuIcon>
          {showMenu && (
            <NavMobile>
              <MenuIcon onClick={toggleMenu}>
                <FontAwesomeIcon icon={showMenu ? faTimes : faBars} />
              </MenuIcon>
              <NavLinkMobile>
                <Button onClick={() => handleMobileClick("home", toggleMenu)}>Home</Button>
                <Button onClick={() => handleMobileClick("about", toggleMenu)}>About</Button>
                <Button onClick={() => handleMobileClick("projects", toggleMenu)}>Projects</Button>
                <Button onClick={() => handleMobileClick("contacts", toggleMenu)}>Contacts</Button>
                <Button onClick={() => window.open('https://raw.githubusercontent.com/Caro080194/Portfolio/main/CV.pdf', '_blank')}>CV</Button>
              </NavLinkMobile>
            </NavMobile>
          )}
        </>
      )}
    </Navcontainer>
  );
};

export default Navbar;

const Navcontainer = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  z-index: 1000;

  
  /* Phones css */
  @media only screen and (max-width: 767px) {
   
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: bold;

  /* Phones css */
  @media only screen and (max-width: 767px) {
    font-weight: normal;

    img{
      width: 22%;
      padding- left: 5px;
      padding-bottom: 5px;
    }
  }
`;

const NavLink = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Button = styled.button`
  margin: 0;
  background-color: transparent;
  color: var(--secondary-color);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1em; // Set default font size

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }

  /* Phones css */
  @media only screen and (max-width: 767px) {
    font-size: 0.9em;
    padding: 5px 10px;
  }

  /* tablets css */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 1em;
    padding: 10px 7px;
  }

  /* Desktop css */
  @media only screen and (min-width: 1025px) {
    font-size: 1.1em;
    padding: 15px 20px;
  }
`;

/* Phones style components */
const MenuIcon = styled.div`
  display: none;

  @media only screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 40px;

    svg {
      font-size: 20px;
    }
  }
`;

const NavMobile = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  `;

const NavLinkMobile = styled(NavLink)`
  flex-direction: column;
  `;
