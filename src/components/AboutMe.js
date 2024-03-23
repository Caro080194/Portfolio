import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';

const AboutMe = ({id}) => {
    return (
        <AboutMeContainer id={id}>
            <Picture src="/assets/Profil-picture.jpg" alt="profil-picture"/>
            <Presentation>
                <h3>I started this journey in 2023</h3>
                <Para>Greetings! 🌟
                    <br/>I'm a French expatriate, now proudly calling the vibrant city of Montreal my home. With a diverse professional background, I've honed the ability to swiftly adapt and embrace new challenges. My journey has led me through various industries, each contributing to my versatile skill set and fostering a passion for continuous learning.
                    <br/>Sports are my greatest passion, and I'm always eager to explore new activities and adventures. Whether it's hitting the slopes, diving into the ocean, or simply enjoying a hike in nature, I thrive on the exhilaration of physical activity.
                    <br/>Currently, I'm immersed in the immersive world of coding, undertaking a rigorous bootcamp at Concordia University to transition into a junior developer role. The dynamic nature of the tech industry resonates with my love for challenge and growth, inspiring me to push boundaries and expand my skill set.
                    <br/>Explore my portfolio of projects, each reflecting my dedication, creativity, and commitment to excellence. If you're inspired by what you see and have a project in mind, don't hesitate to reach out! I'm always excited to collaborate and bring ideas to life.
                    <br/>Let's embark on a journey of innovation and creativity together. Get in touch, and let's make magic happen! ✨ 
                </Para>
                <ListLogo>
                    <li><FontAwesomeIcon icon={faHtml5} size="4x"/></li>
                    <li><FontAwesomeIcon icon={faReact} size="4x" /></li>
                    <li><FontAwesomeIcon icon={faNodeJs} size="4x" /></li>
                </ListLogo>
            </Presentation>
        </AboutMeContainer>
    );
}

export default AboutMe;

const AboutMeContainer = styled.div `
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    width: 100vw;

    /* Desktop css */
    @media only screen and (min-width: 1025px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 80px 20px;
    }

    /* Tablets css */
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        margin: 40px 10px;
    }

    /* Phones css */
    @media only screen and (max-width: 767px) {
        margin: 20px 5px;
    }
`;

const Picture = styled.img `
    border-radius: 30px;
    width: 100%;

    /* Desktop css */
    @media only screen and (min-width: 1025px) {
        width: 35%;
    }

    /* Tablets css */
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        width: 40%;
        display: block;
        margin-right: auto;
        margin-left: auto;
    }

    /* Phones css */
    @media only screen and (max-width: 767px) {
        width: 50%;
        display: block;
        margin-right: auto;
        margin-left: auto;
    }
`;

const Presentation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    /* Desktop css */
    @media only screen and (min-width: 1024px) {
        width: 50%;
        margin-right: 20px;
        
        h3{
            font-size: 2.5em;
        }
    }

    /* Tablets css */
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        width: 80%;
        display: block;
        margin-right: auto;
        margin-left: auto;
        text-align: center;
        
        h3{
            font-size: 2.5em;
            text-align: center;
        }
    }

    /* Phones css */
    @media only screen and (max-width: 767px) {
        h3{
            font-size: 1.2em;
        }
    }
`;

const Para = styled.p `
    text-align: justify;
    padding: 30px 0;
    line-height: 2;
    width: 70%;

    /* Tablets css */
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        margin-right: auto;
        margin-left: auto;
    }

    /* Phones css */
    @media only screen and (max-width: 767px) {
        width: 90vw;
    }
`;

const ListLogo = styled.ul `
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 20px;

    li {
        margin: 0;
    }
  
    /* Desktop css */
    @media only screen and (min-width: 1024px) {
        justify-content: flex-start;
    }
`;