import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 45%;

    label {
        padding: 1rem 0;
        font-weight: 500;
        font-size: 1.2rem
    }

    input {
        padding: 1rem;
        outline: none;
        font-size: 1rem;
        transition: ease-in-out 0.1s;

        &:hover {
        transition: ease-in-out 0.1s;
        transform: scale(1.02);
        }
    }

    button {
        width: 80px;
        font-size: 1.2rem;
        background: blue;
        color: white;
        font-weight: bold;
        padding: 0.5rem;
        border: none;
        border-radius: 6px;
        margin: 1rem 0;
        cursor: pointer;
        outline: none;
        transition: ease-in-out 0.1s;

        &:hover {
            transform: scale(1.1);
            transition: ease-in-out 0.1s;
        }
    }
`;

const Form = props => {
    const { name, email, role } = props.teamMembersData;
    const { onNameChange, onEmailChange, onRoleChange, onFormSubmit } = props;

    const isDisabled = () => {
        return !name || !email || !role;
    };

    return (
        <StyledForm>
            <label htmlFor='nameInput'>Name</label>
            <input 
            type='text' 
            id='nameInput' 
            value={name}
            onChange={onNameChange}
            />

            <label htmlFor='emailInput'>Email</label>
            <input 
            type='text' 
            id='emailInput' 
            value={email}
            onChange={onEmailChange}
            />

            <label htmlFor='roleInput'>Role</label>
            <input 
            type='text' 
            id='roleInput'
            value={role}
            onChange={onRoleChange} 
            />

            <button
                onClick={onFormSubmit}
                disabled={isDisabled()}
            >
                Submit
            </button>
        </StyledForm>
    );
};

export default Form;