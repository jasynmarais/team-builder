import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    label {
        padding: 1rem 0;
    }

    input {
        padding: 1rem;
        outline: none;
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

        &:hover {
            transform: scale(1.1);
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