import useScreenSize from "../hooks/useScreenSize";
import styled from "styled-components";

const Projects = ({id}) => {
    return (
        <ProjectsContainer id={id}>
            <Header>Take a look at some of my projects</Header>
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
padding: 80px 20px;
border-radius: 30px;
`;

const Header = styled.h3 `
color: var(--secondary-color);
text-align: center;
padding: 20px;
`;

const ProjectCards = styled.div `
    display: flex;
    justify-content: space-around;
    margin-top: 90px;
`;

const ProjectCard = styled.div `
    position: relative;
    width: 350px;
    height: 300px;
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.5);
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
