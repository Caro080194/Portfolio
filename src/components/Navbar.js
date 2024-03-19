import useScreenSize from "../hooks/useScreenSize";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {

  const handleClick = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({behavior: "smooth", block: "start"});
    }
    console.log("clicked", id);
  };


  return (
    <Navcontainer>
        <Logo>
          <img src="/assets/Cat-Emoji.png" alt="Logo"/>
            Caroline Le Ny
        </Logo>
        <NavLink>
        <Button onClick={() => handleClick("home")}>Home</Button>
        <Button onClick={() => handleClick("about")}>About me</Button>
        <Button onClick={() => handleClick("projects")}>Projects</Button>
        <Button onClick={() => handleClick("contacts")}>Contacts</Button>
        <Button onClick={() => window.open('https://github.com/Caro080194/Portfolio/blob/main/CV.pdf', '_blank')}>CV</Button>
          <IconButton>
            <FontAwesomeIcon icon={faSun} />
          </IconButton>
        </NavLink>
    </Navcontainer>
  )
}

export default Navbar;

const Navcontainer = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  z-index: 1000;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: bold;
`;

const NavLink = styled.ul `
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const IconButton = styled.button`
  border: solid green;
  background-color: var(--primary-color);
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;

  svg {
    color: var(--secondary-color);
  }
`;

const Button = styled.button`
  margin: 0;
  padding: 20px;
  background-color: transparent;
  color: var(--secondary-color);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }

  /* Remove the 'a' styling here */
`;