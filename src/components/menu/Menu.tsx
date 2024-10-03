import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";



type MenuPropsType = {
    link?: string;
}

export const Menu = (props: MenuPropsType) => {
    return (
            <StyledMenu>
                <ul>
                    <li>
                        <a href="">{props.link}</a>
                    </li>
                </ul>
            </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul{
        display: flex;
        gap: 30px;
        justify-content: center;
        max-width: 1000px;
        width: 100%;
    }
    a{
        background-color: unset;
        border: none;
        padding: 12px 20px 13px 20px;
        width: 200px;
        
        &:hover{
            color: ${theme.colors.paddingBg};
            border-radius: 6px;
            background-image:  linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
        }
`