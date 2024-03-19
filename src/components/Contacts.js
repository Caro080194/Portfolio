import useScreenSize from "../hooks/useScreenSize";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = ({id}) => {
    return (
        <ContactContainer id={id}>
            <MailContainer>
                <h1>Interested in working together?</h1>
                <MailButton>Shoot me an email</MailButton>
            </MailContainer>
            <FormContainer>
                <InputContainer>
                    <Input type="text" placeholder="Enter your name" />
                    <Input type="email" placeholder="Your email address" />
                    <Input type="text" placeholder="Describe your project" />
                </InputContainer>
                <SubmitButton type="submit">Send</SubmitButton>
                <Logo>
                  <Para>@Caroline Le Ny</Para>
                  <FontAwesomeIcon icon={faInstagram} color= "var(--secondary-color)" size="3x"/>
                  <FontAwesomeIcon icon={faLinkedin} color= "var(--secondary-color)" size="3x"/>
                </Logo>
            </FormContainer>
        </ContactContainer>
    )
}

export default Contact;

const ContactContainer = styled.div `
    background-image: url('/assets/Vector.png');
    background-size: cover;
    background-position: center;
    color: var(--primary-color);
    height: 600px;
    width: 100%;
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 60px 0px;
    gap: 259px;
    left: 80px;
    right: 80px;
`;

const MailContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 32px;
    margin: 0 auto;
    width: 492px;
    height: 276px;
`;

const FormContainer = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 0 auto;
    width: 400px;
    height: 506px;
    background-color: var(--primary-color);
    border-radius: 30px;
    padding: 20px;
`;

const InputContainer = styled.div `
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`;

const Input = styled.input `

    width: 350px;
    height: 32px;
    left: 786px;
    top: 166px;
    border: none;
    border-bottom: 1px solid green;
    background-color: transparent;
    color: var(--primary-color);
    font-size: 16px;
    display: flex;
    align-items: center;
    &::placeholder {
        color: #FFFFFF;
        opacity: 0.7;
        font-size: 12px;
        line-height: 160%;
    }
`;

const SubmitButton = styled.button `
padding: 10px 40px;
gap: 8px;
width: 100px;
height: 52px;
border-radius: 8px;
margin-right: 70%;
margin-top: 10%;
`;

const MailButton = styled.button `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 40px;
gap: 8px;

width: 278px;
height: 52px;

border: 1px solid #000000;
border-radius: 8px;
`;

const Logo = styled.div `
    display: flex;
    gap: 30px; 
    align-items: center;
    margin-top: 10%;
`;

const Para = styled.p `
color: var(--secondary-color);
`;