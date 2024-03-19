import useScreenSize from "../hooks/useScreenSize";
import styled from "styled-components";

const Projects = ({id}) => {
    return (
        <ProjectsContainer id={id}>
            <Para>Take a look at some of my projects</Para>
            <ProjectCards>
                <ProjectCard>
                    <ProjectBackgroundImage src="/assets/projet-1.png" alt="Project 1" />
                    <ProjectDetails>
                        <h3>Game</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.orem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </ProjectDetails>
                </ProjectCard>
                <ProjectCard>
                    <ProjectBackgroundImage src="/assets/work-progress.jpg" alt="Project 2" />
                    <ProjectDetails>
                        <h3>Project 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.orem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </ProjectDetails>
                </ProjectCard>
                <ProjectCard>
                    <ProjectBackgroundImage src="/assets/work-progress.jpg" alt="Project 3" />
                    <ProjectDetails>
                        <h3>Project 3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.orem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </ProjectDetails>
                </ProjectCard>
            </ProjectCards>
        </ProjectsContainer>
    )
}

export default Projects;

const ProjectsContainer = styled.div `
background-color: var(--primary-color);
height: 600px;
border-radius: 30px;
`;

const Para = styled.p `
color: var(--secondary-color);
font-size: 2em;
text-align: center;
padding: 20px;
`;

const ProjectCards = styled.div `
    display: flex;
    justify-content: space-around;
`;

const ProjectCard = styled.div `
    position: relative;
    width: 300px;
    height: 200px;
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: scale(2.1);
    }
`;

const ProjectBackgroundImage = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ProjectDetails = styled.div `
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
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    box-sizing: border-box;

    ${ProjectCard}:hover & {
        opacity: 1;
    }

    h3 {
        margin-bottom: 10px;
    }
    p {
        margin: 0;
    }
`;