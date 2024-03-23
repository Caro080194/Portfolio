import styled, {css} from "styled-components";

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
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;

    /* Phones CSS */
    @media only screen and (max-width: 767px) {
        height: 100vh;
    }
`;

const Header1 = styled.h1`
    -webkit-text-stroke: 0.5px white;
    text-shadow: 0.5px 0.5px 0px white;
    font-size: 4em;
    font-weight: 700;
    text-align: center;
    margin-bottom: 10px;

    /* Phones CSS */
    @media only screen and (max-width: 767px) {
        font-size: 4em;
        line-height: 2;
    }
`;

const Header2 = styled.h2`
    color: var(--secondary-color);
    font-size: 2em;
    font-weight: 700;
    font-size: 4em;
    text-align: center;
    margin-top: 0;

    /* Phones CSS */
    @media only screen and (max-width: 767px) {
        font-size: 2.5em;
    }
`;