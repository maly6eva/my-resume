import React from 'react';
import styled from "styled-components";
import {Buttons} from "./Buttons";
import photo from '../../../assets/images/project.webp';
import {theme} from "../../../styles/Theme";


const projectItem = ['Javascript', 'React Native', 'redux']

export const ProjectTwo = () => {
    return (
        <StyledProject>
            <Image src={photo} alt="photo"/>
            <Discription>
                <Name>I N S I G H T G R A M</Name>
                <Buttons menuItems={projectItem}/>
                <Text>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                    consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Text>
            </Discription>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    background-color: ${theme.colors.cardBg};
    width: 360px;
    flex-grow: 1;


    @media ${theme.media.desktop} {
        max-width: 520px;
    }
`

const Image = styled.img`
    width: 100%;
    height: 388px;
    object-fit: cover;
`
const Discription = styled.div`
    background-color: ${theme.colors.cardBg};
    padding: 0 9px 32px 26px;

    @media ${theme.media.mobile} {
        padding: 0 7px 19px 18px;
    }
`

const Name = styled.h3`
    padding: 29px 0 11px 0px;

    @media ${theme.media.mobile} {
        padding: 16px 0 11px;
    }
`

const Text = styled.p`
    padding-top: 19px;
`

