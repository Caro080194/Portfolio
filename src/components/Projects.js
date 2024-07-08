import styled, { css } from "styled-components";

const Projects = ({ id }) => {
    return (
        <ProjectsContainer id={id}>
            <Header>Take a look at some of my projects</Header>
            <ProjectCards>
                {/* <ProjectCard>
                    <h1>Game, Object-Oriented Programming</h1>
                    <ProjectLinks>
                        <a href="https://github.com/your-github-repo/project-1" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://your-live-website-url/project-1" target="_blank" rel="noopener noreferrer">Live Version</a>
                    </ProjectLinks>
                    <ProjectBackgroundImage src="/assets/project-1.png" alt="Project 1" />
                    <ProjectDetails>
                        <p>This project was undertaken during my studies at Concordia University. While a substantial portion of the codebase was provided, the main aim was to reinforce Object-Oriented Programming principles.
                            <br />My first task was to ensure basic game functionality. Once accomplished, I made the game my own, choosing "The Lion King" as the theme.
                            <br />To enhance user experience, I incorporated background music that users could control with a dedicated button. Additionally, I introduced scoring mechanisms and a "try again" feature to improve gameplay and encourage repeated engagement.
                            <br />This project provided valuable insights into problem-solving and software design, while also fostering creative exploration within JavaScript programming.
                        </p>
                    </ProjectDetails>
                </ProjectCard> */}
                <ProjectCard>
                    <h1>E-Commerce Website</h1>
                    <ProjectLinks>
                        <a href="https://github.com/Caro080194/Group-Project-E-commerce" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://e-wear-emporium-ak60e9a1d-caroline-le-nys-projects.vercel.app/" target="_blank" rel="noopener noreferrer">Live Version</a>
                    </ProjectLinks>
                    <ProjectBackgroundImage src="/assets/project-2.png" alt="Project 2" />
                    <ProjectDetails>
                        <p>This project was a collaborative effort, emphasizing teamwork and leveraging diverse coding styles and strengths within our team. We were provided with raw data and tasked with developing a full-fledged E-Commerce website using the MERN stack.</p>
                        <br />
                        <p>My primary responsibilities included setting up backend handlers and endpoints to manage data interactions, ensuring seamless communication between the backend and frontend. Additionally, I contributed to CSS styling for various components to ensure a cohesive user interface.</p>
                        <br />
                        <p>This experience provided invaluable lessons in collaborative development, including how to integrate different coding styles and strengths effectively. It underscored the importance of communication and coordination in delivering a complex project successfully.</p>
                    </ProjectDetails>
                </ProjectCard>
                <ProjectCard>
                    <h1>Fitness Website</h1>
                    <ProjectLinks>
                        <a href="https://github.com/Caro080194/MMFJ" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://motion-mind-fitness-journey-oixmi4du8-caroline-le-nys-projects.vercel.app/" target="_blank" rel="noopener noreferrer">Live Version</a>
                    </ProjectLinks>
                    <ProjectBackgroundImage src="/assets/project-3.png" alt="Project 3" />
                    <ProjectDetails>
                        <p>For my final project at Concordia University, I developed a Fitness Website using the MERN stack, integrated with the YouTube API. The primary focus of the website was to provide users with easy access to mobility routines and help them track their Personal Records (PR).</p>
                        <br />
                        <p>The YouTube API was utilized to dynamically fetch and display relevant fitness videos, enhancing user engagement and providing valuable instructional content. Additionally, the API facilitated the retrieval of additional information to enrich the user experience.</p>
                        <br />
                        <p>This project highlighted my skills in integrating APIs, frontend-backend communication, and creating user-friendly interfaces aimed at promoting health and wellness. It reinforced my ability to leverage technology to solve real-world problems effectively.</p>
                    </ProjectDetails>
                </ProjectCard>
            </ProjectCards>
        </ProjectsContainer>
    )
}

export default Projects;

const ProjectsContainer = styled.div`
    background-color: var(--primary-color);
    min-height: 100vh;
    padding: 60px 20px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    /* Tablets css */
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        padding: 40px 10px;
        height: auto;
    }

    /* Phones css */
    @media only screen and (max-width: 767px) {
        padding: 20px 5px;
    }
`;

const Header = styled.h1`
   color: var(--secondary-color);
   text-align: center;
   padding: 20px;
   margin-bottom: 50px;
   font-size: 4em;

   /* Phones css */
   @media only screen and (max-width: 767px) {
      font-size: 1.2em;
      padding:10px;
      margin-bottom: 30px;
  }
`;

const ProjectCards = styled.div`
    margin-top: 20px;
    height: auto;

    h1{
    color: white;
    text-align: center;
    font-size: 2rem;
    }

    /* Tablets/phones css */
    @media only screen and (max-width: 1023px) {
        margin-top: 60px;
        h1{
          font-size: 1rem;
        }
    }
`;

const ProjectCard = styled.div`
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease;
    cursor: pointer;
    margin-bottom: 90px;
    border-radius: 15px;

    &:hover {
        transform: scale(1.2);
    }

    
    /* Desktop css */
    @media only screen and (min-width: 1024px) {
        width: 40vw;
    }

    /* Tablets/phones css */
    @media only screen and (max-width: 1023px) {
        width: 80vw;
        margin-bottom: 30px;
        &:hover {
            transform: scale(1.1);
        }
    }
`;

const ProjectBackgroundImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 15px;
`;

const ProjectDetails = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    color: black;
    background-color: rgba(255, 255, 255, 0.7);
    opacity: 0;
    transition: opacity 0.3s ease;
    padding: 20px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    box-sizing: border-box;

    ${ProjectCard}:hover & {
        opacity: 1;
    }

    h3 {
        margin-bottom: 5px;
        z-index: 200;
        color: white;
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
    }

    p {
        margin: 0;
        font-size: 0.9em;
        line-height: 1;
    }

    /* Phones css */
    @media only screen and (max-width: 767px) {
        p {
            margin: 0;
            font-size: 0.7em;
            line-height: 1;
        }
    }
`;

const ProjectLinks = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 10px auto;

    a {
        color: white;
        text-decoration: none;
        padding: 5px 10px;
        border: 1px solid white;
        border-radius: 5px;
        transition: all 0.3s ease;

        &:hover {
            background-color: var(--secondary-color);
            color: var(--primary-color);
        }
    }
`;
