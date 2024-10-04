import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {ButtonContact} from "./ButtonContact";
import {theme} from "../../../styles/Theme";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm>
                    <FormLabel htmlFor="username">Name</FormLabel>
                    <Field placeholder={'Example'} type="text" id="username"/>
                    <FormLabel htmlFor="username">Email</FormLabel>
                    <Field placeholder={'Value'}/>
                    <FormLabel htmlFor="username">Mensaje</FormLabel>
                    <Field placeholder={'Hi, i will ...'} as={'textarea'}/>
                    <ButtonContact type={'submit'} button={'Submit'}/>
                </StyledForm>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
   


`

const SectionTitle = styled.h2`
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px; /* 108.333% */
    letter-spacing: 0.96px;
`


const Field = styled.input`
    //position: relative;
    font-family: Montserrat, sans-serif;
    width: 100%;
    background-color: ${theme.colors.accent};
    border: 1px solid ${theme.colors.textBg};
    padding: 15px 18px 16px;
    color: ${theme.colors.textInput};
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    
    &::placeholder {
        color: ${theme.colors.textBg};
        text-transform: capitalize;
    }
    
    &:focus-visible {
        outline: 1px solid ${theme.colors.textBg};
    }
`

const FormLabel = styled.label`
    margin-bottom: 6px;
`


const StyledForm = styled.form`
    position: relative;
    max-width: 530px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 0 auto;
    color: ${theme.colors.textBg};


    textarea {
        border-color: ${theme.colors.textareaBorder};
        margin-bottom: 0;
        resize: none;
        height: 165px;

    }

    label {
        border-color: ${theme.colors.textareaBorder};
        margin: 48px 0 6px;
        font-family: Montserrat, sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`


