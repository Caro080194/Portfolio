import { useState } from "react";

const useContactsClick = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
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

    return {
        name,
        email,
        projectDescription,
        handleNameChange,
        handleEmailChange,
        handleProjectDescriptionChange
    };
};


export {useContactsClick};