import styled from "styled-components";

const Hero = ({id}) => {
    return (
        <HeroContainer id={id}>
            <Para1>
                Hello, I am Caroline,
            </Para1>
            <Para2>
                a junior developer
            </Para2>
        </HeroContainer>
    )
}

export default Hero;

const HeroContainer = styled.div`
    background-color: var(--primary-color);
    height: 600px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Para1 = styled.p`
    color: var(--primary-color);
    -webkit-text-stroke: 0.5px white;
    text-shadow: 0.5px 0.5px 0px white;
    font-size: 4em;
    font-weight: 700;
    text-align: center;
    margin-bottom: 10px;
`;

const Para2 = styled.p`
    color: var(--secondary-color);
    font-size: 2em; /* Adjust font size as needed */
    font-weight: 700;
    font-size: 4em;
    text-align: center;
    margin-top: 0;
`;