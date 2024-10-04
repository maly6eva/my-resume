import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../styles/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container>
                <FlexWrapper direction={'column'} gap={'20px'}>
                    <SectionTitle>About me</SectionTitle>
                    <SectionText>The long barrow was built on land previously inhabited in the Mesolithic period. It
                        consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in
                        length, with a chamber built from sarsen megaliths on its eastern end. Both inhumed and cremated
                        human remains were placed within this chamber during the Neolithic period, representing at least
                        nine or ten individuals.</SectionText>
                </FlexWrapper>
            </Container>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    //min-height: 40vh;
`

export const SectionTitle = styled.h2`
    font-size: 24px;
    font-weight: 600;
    text-align: start;
    color: ${theme.colors.textBg};
    padding-left: 26px;
`


const SectionText = styled.p`
    border-left: 5px solid;
    border-image: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%) 1;
    padding-left: 17px;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px; /* 144.444% */
    letter-spacing: 0.72px;
    max-width: 865px;
`