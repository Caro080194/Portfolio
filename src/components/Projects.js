import styled, { css }from "styled-components";

const Projects = ({id}) => {
    return (
        <ProjectsContainer id={id}>
            <Header>Take a look at some of my projects</Header>
            <ProjectCards>
                <ProjectCard>
                    <ProjectBackgroundImage src="/assets/projet-1.png" alt="Project 1" />
                    <ProjectDetails>
                        <p>This project undertaken during my participation in the Concordia Bootcamp. While a substantial portion of the codebase was provided, the main aim was to reinforce Object-Oriented Programming principles.
                            <br/>My first task was to ensure basic game functionality. Once accomplished, I neede to make the game "mine", i chose the theme "The Lion King".
                            <br/>To enrich user experience, I incorporated background music that users could control with a dedicated button. Additionally, I introduced scoring mechanisms and a "try again" feature to enhance gameplay and encourage repeated engagement.
                            <br/>This project provided valuable insights into problem-solving and software design, while also fostering creative exploration within JS programming.
                        </p>
                    </ProjectDetails>
                </ProjectCard>
                <ProjectCard>
                    <ProjectBackgroundImage src="/assets/work-progress.jpg" alt="Project 2" />
                    <ProjectDetails>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.orem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </ProjectDetails>
                </ProjectCard>
                <ProjectCard>
                    <ProjectBackgroundImage src="/assets/work-progress.jpg" alt="Project 3" />
                    <ProjectDetails>
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
height: 100vh;
padding: 60px 20px;
border-radius: 30px;

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

const Header = styled.h3 `
color: var(--secondary-color);
text-align: center;
padding: 20px;
font-size: 2em;

/* Phones css */
@media only screen and (max-width: 767px) {
font-size: 1.3em;
padding:10px;
}
`;

const ProjectCards = styled.div `
    display: flex;
    justify-content: space-around;
    margin-top: 20px;

    /* Tablets css */
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        flex-direction: column;
        align-items: center;
        margin-top: 60px;
        height: auto;
    }

    /* Phones css */
    @media only screen and (max-width: 767px) {
        flex-direction: column;
        align-items: center;
        margin-top: 60px;
    }
`;

const ProjectCard = styled.div `
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s ease;
    cursor: pointer;
    margin-bottom: 20px;

    &:hover {
        transform: scale(1.4);
    }

    
    /* Desktop css */
    @media only screen and (min-width: 1024px) {
        width: 350px;
        height: 300px;
    }

    /* Tablets css */
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        width: 450px;
        height: 400px;
        margin-bottom: 30px;
        &:hover {
            transform: scale(1.1);
        }
    }

    /* Phones css */
    @media only screen and (max-width: 767px) {
        width: 80vw;

        &:hover {
            transform: scale(1.1);
        }
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
