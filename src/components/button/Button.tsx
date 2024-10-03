import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";


type ButtonProps = {
    button?: string;
    type?: string;

}
export const Button = (props: ButtonProps) => {
    return (
            <StyledButton>
                        <a href="">{props.button}</a>
            </StyledButton>
    );
};

const StyledButton= styled.button`
    display: flex;
    justify-content: start;
    align-items: center;
    list-style: none;
    padding: 12px 20px 13px 20px;
    border-radius: 6px;
    background-image: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
    
    a {
        color: ${theme.colors.paddingBg};
    }

    @media ${theme.media.mobile} {
        margin: 0 auto;
    }

`