import useScreenSize from "../hooks/useScreenSize";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';

const AboutMe = ({id}) => {
    return (
        <AboutMeContainer id={id}>
           <Picture src="/assets/Profil-picture.jpg" alt="profil-picture"/>

            <Presentation>
                <h3>I started this journey in 2023</h3>
                <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat odio id magna malesuada, eu eleifend sem tincidunt. Ut ac justo vitae mi tincidunt condimentum. Phasellus pretium nisi sed lorem sollicitudin, sed condimentum neque dictum. Duis euismod eget nulla id fermentum. Nulla facilisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat odio id magna malesuada, eu eleifend sem tincidunt. </Para>
                <ListLogo>
                <li>
                 <FontAwesomeIcon icon={faHtml5} size="4x"/>
               </li>
               <li>
                 <FontAwesomeIcon icon={faReact} size="4x" />
               </li>
               <li>
                 <FontAwesomeIcon icon={faNodeJs} size="4x" />
               </li>
                </ListLogo>
            </Presentation>
        </AboutMeContainer>
    )
}

export default AboutMe;

const AboutMeContainer = styled.div `
border-radius: 30px;
height: 600px;
margin: 80px 20px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
`;

const Presentation = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const Picture = styled.img `
border-radius: 30px;
width: 35%;
`;

const Para = styled.p `
width: 700px;
text-align: justify;
padding: 30px 0;
line-height: 2;
`;

const ListLogo = styled.ul `
list-style: none;
display: flex;
justify-content: flex-start;
width: 100%;

padding: 0;
  
li {
  margin: 0 30px;
}
`;