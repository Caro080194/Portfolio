import useScreenSize from "../hooks/useScreenSize";
import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = ({id}) => {

    const handleMailButton = () => {
        window.open('mailto: caroline.leny@live.fr');
    };

    const [name, setName] = useState('');
    const [email, setEmail]= useState('');
    const [projectDescription, setProjectDescription] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleProjectDescriptionChange = (event) => {
        setProjectDescription(event.target.value);
    };

    return (
        <ContactContainer id={id}>
            <MailContainer>
                <h1>Interested in working together?</h1>
                <MailButton onClick={handleMailButton}>Shoot me an email</MailButton>
            </MailContainer>
            <FormContainer>
                <InputContainer>
                    <Input type="text" placeholder="Enter your name" value={name} onChange={handleNameChange} />
                    <Input type="email" placeholder="Your email address" value={email} onChange={handleEmailChange} />
                    <StyledTextarea
                      placeholder="Describe your project"
                      value={projectDescription}
                      onChange={handleProjectDescriptionChange}
                    />
                </InputContainer>
                <SubmitButton type="submit">Send</SubmitButton>
                <Logo>
                  <Para>@Caroline Le Ny</Para>
                  <a href="#" target="" rel="">
                    <FontAwesomeIcon icon={faInstagram} color="var(--secondary-color)" size="3x" />
                  </a>
                  <a href="#" target="" rel="">
                    <FontAwesomeIcon icon={faLinkedin} color="var(--secondary-color)" size="3x" />
                  </a>
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
    height: 700px;
    width: 100%;
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 200px;
    left: 80px;
    right: 80px;
`;

const MailContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 32px;
    margin: 0 auto 0 20px;
    width: 600px;
`;

const MailButton = styled.button `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 40px;
gap: 8px;
color: var(--secondary-color);
font-family: inherit;
font-size: 16px;
width: 278px;
height: 52px;
background-color: var(--primary-color);
border: none;
border-radius: 8px;


&:hover {
    background-color: rgba(231, 249, 161, 1);
    color: var(--primary-color);
}
`;


const FormContainer = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 0 20px 0 auto;
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
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    background-color: transparent;
    color: var(--secondary-color);
    font-size: 16px;
    font-family: inherit;
    display: flex;
    align-items: center;
    &::placeholder {
        color: #FFFFFF;
        opacity: 0.7;
        font-size: 12px;
        line-height: 160%;
    }

    &:focus {
        border-bottom: 1px solid green;
        background-color: transparent;
    }
`;

const StyledTextarea = styled.textarea`
width: 100%;
min-height: 100px; 
resize: none;
font-size: 16px; 
font-family: inherit;
color: var(--secondary-color);
outline: none;
box-shadow: none;
padding: 8px;
border: none;
border-bottom: 1px solid rgba(255, 255, 255, 0.7);
background-color: transparent;
&::placeholder {
    color: #FFFFFF;
    opacity: 0.7;
    font-size: 12px;
    line-height: 160%;
}

&:focus {
    border-bottom: 1px solid green;
}
`;

const SubmitButton = styled.button `
padding: 10px 40px;
gap: 8px;
width: 100px;
height: 52px;
border-radius: 8px;
border: none;
margin-right: 70%;
margin-top: 10%;
color: var(--primary-color);
background-color: var(--secondary-color);
font-family: inherit;
font-size: 16px;

&:hover {
    background-color: rgba(231, 249, 161, 1);
}
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
