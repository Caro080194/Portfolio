import useScreenSize from "../hooks/useScreenSize";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';

const AboutMe = ({id}) => {
    return (
        <AboutMeContainer id={id}>
            <h1>I started this journey in 2023</h1>
            <Presentation>
                <Picture src="/assets/Profil-picture.jpg" alt="profil-picture"/>
                <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat odio id magna malesuada, eu eleifend sem tincidunt. Ut ac justo vitae mi tincidunt condimentum. Phasellus pretium nisi sed lorem sollicitudin, sed condimentum neque dictum. Duis euismod eget nulla id fermentum. Nulla facilisi. Sed in ex et enim pharetra consequat. Vestibulum volutpat ante quis dui scelerisque, sit amet consectetur magna congue. Proin vulputate ex a nisi mattis, ac sodales ligula ultricies. Vivamus dignissim felis id elit luctus, quis dignissim purus efficitur. Fusce vulputate, leo ac tempor egestas, felis justo venenatis lectus, non commodo nunc sem et orci. Mauris vel ligula nec mauris fermentum rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed ullamcorper massa et eros eleifend bibendum. Aenean sit amet posuere nulla.</Para>
            </Presentation>
            <LogoContainer>
                <ListLogo>
                <li>
                 <FontAwesomeIcon icon={faHtml5} size="4x" />
               </li>
               <li>
                 <FontAwesomeIcon icon={faReact} size="4x" />
               </li>
               <li>
                 <FontAwesomeIcon icon={faNodeJs} size="4x" />
               </li>
                </ListLogo>
            </LogoContainer>
        </AboutMeContainer>
    )
}

export default AboutMe;

const AboutMeContainer = styled.div `
background-color: var(--secondary-color);
color: var(--primary-color);
border-radius: 30px;
height: 600px;
margin: 20px;
`;

const Presentation = styled.div`
display: flex;
justify-content: space-evenly;
margin: 30px;
`;

const Picture = styled.img `
border-radius: 30px;
`;

const Para = styled.p `
color: var(--primary-color);
width: 450px;
`;

const LogoContainer = styled.div `
`;

const ListLogo = styled.ul `
list-style: none;
display: flex;
justify-content: space-evenly;
padding: 0;
margin: 0;
`;