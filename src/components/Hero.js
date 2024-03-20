import styled from "styled-components";

const Hero = ({id}) => {
    return (
        <HeroContainer id={id}>
            <Header1>
                Hello, I am Caroline,
            </Header1>
            <Header2>
                a junior developer
            </Header2>
        </HeroContainer>
    )
}

export default Hero;

const HeroContainer = styled.div`
    background-color: var(--primary-color);
    height: 800px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Header1 = styled.h1`
    -webkit-text-stroke: 0.5px white;
    text-shadow: 0.5px 0.5px 0px white;
    font-size: 4em;
    font-weight: 700;
    text-align: center;
    margin-bottom: 10px;
`;

const Header2 = styled.h2`
    color: var(--secondary-color);
    font-size: 2em;
    font-weight: 700;
    font-size: 4em;
    text-align: center;
    margin-top: 0;
`;