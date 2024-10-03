import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const Buttons = (props: { menuItems: Array<string> }) => {
    return (
        <StyledTabMenu>
            {props.menuItems.map((item, index) => {
                return <ul>
                    <li>
                        <button key={index}>
                            <a href="">{item}</a>
                        </button>
                    </li>
                </ul>
            })}
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.div`
    display: flex;
    background-color: ${theme.colors.paddingBg};

    @media screen and (max-width: 909px) {
        text-align: center;
        gap: 12px;
        flex-wrap: wrap;
    }


    button {
        margin: 6px 6px 6px 0;
        background-color: ${theme.colors.paddingBg};
    }

    a {
        background-color: unset;
        border: none;
        padding: 8px 16px;
        color: ${theme.colors.paddingBg};
        border-radius: 6px;
        background-image: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
    }


`
