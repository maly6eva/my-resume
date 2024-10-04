import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {Link} from "react-scroll";

const items = {
    left: [
        {
            title: 'Home',
            href: 'home'
        },
    ],
    right: [
        {
            title: 'Projects',
            href: 'projects'
        },
        {
            title: 'Contacts',
            href: 'contacts'
        }
    ],
}

export const Menu: React.FC = () => {
    return (


        <StyledItem>
            {items.left.map((item, index) => {
                return <MinuItem key={index}>
                    <NavLink
                        activeClass="active"
                        to={item.href}
                        smooth={true}
                        spy={true}>
                        {item.title}
                    </NavLink>
                </MinuItem>
            })}
            {items.right.map((item, index) => {
                return <MinuItem key={index}>
                    <NavLink
                        activeClass="active"
                        to={item.href}
                        smooth={true}
                        spy={true}>
                        {item.title}
                    </NavLink>
                </MinuItem>
            })}
        </StyledItem>
    );
};


const StyledItem = styled.ul`
    display: flex;
    justify-content: end;
    gap: 130px;
    max-width: 1000px;
    width: 100%;

    @media ${theme.media.mobile} {
        gap: 12px;
    }
`
const MinuItem = styled.li`
    display: flex;
    max-width: 1000px;
    width: 100%;
`

const NavLink = styled(Link)`
    background-color: unset;
    border: none;
    padding: 12px 20px;

    &:hover {
        color: ${theme.colors.paddingBg};
        border-radius: 6px;
        background-image: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
    }
`