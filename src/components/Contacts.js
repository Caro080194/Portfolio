import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {useContactsClick} from '../hooks/useContactsClick';
import { handleMailButton } from "../helps/contactsClick";

const Contact = ({ id }) => {
    const { name, email, projectDescription, handleEmailChange, handleNameChange,handleProjectDescriptionChange  } = useContactsClick();

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
    );
};

export default Contact;

const ContactContainer = styled.div`
    background-image: url('/assets/Vector.png');
    background-size: cover;
    background-position: center;
    height: 700px;
    width: 100vw;
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 200px;
    left: 80px;
    right: 80px;

    /* Phones css */
    @media only screen and (max-width: 767px) {
        flex-direction: column;
        align-items: center;
        gap: 20px;
        padding: 20px 5px;
        justify-content: center;
    }

    /* Tablets css */
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        gap: 1px;
        left: 0;
        right: 0;
    }
`;

const MailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 32px;
    margin: 0 auto 0 20px;
    width: 600px;

    /* Phones css */
    @media only screen and (max-width: 767px) {
        align-items: center;
        width: auto;
        margin: 0;

        h1{
            font-size: 1.3em;
        }
    }
`;

const MailButton = styled.button`
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
        cursor: pointer;
    }

    /* Phones css */
    @media only screen and (max-width: 767px) {
        width: 178px;
        font-size: 14px;
    }
`;

const FormContainer = styled.form`
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

    /* Phones css */
    @media only screen and (max-width: 767px) {
        width: 80%;
        height: 60%;
        gap: 0;
        margin: auto;
        padding: 10px;
    }
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;

    /* Phones css */
    @media only screen and (max-width: 767px) {
        width: 90%;
        height: 60%;
        padding: 10px 10px 0;
    }
`;

const Input = styled.input`
    width: 350px;
    height: 32px;
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

    /* Phones css */
    @media only screen and (max-width: 767px) {
        width: 100%;
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

    /* Phones css */
    @media only screen and (max-width: 767px) {
        width: 100%;
        min-height: 30%;
    }
`;

const SubmitButton = styled.button`
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
        cursor: pointer;
    }

    /* Phones css */
    @media only screen and (max-width: 767px) {
        margin: 0 auto 0;
    }
`;

const Logo = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
    margin-top: 10%;

    /* Phones css */
    @media only screen and (max-width: 767px) {
        margin-top: 20px;
        margin-bottom: 10px;

        svg{
            font-size: 20px;
        }
    }
`;

const Para = styled.p`
    color: var(--secondary-color);
`;