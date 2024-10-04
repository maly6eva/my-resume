import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/gerl.svg'
import {Button} from "../../../components/button/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {Icon} from "../../../components/icon/Icon";
import {font} from "../../../styles/Common";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main = () => {
    return (
        <StyledMain id={'home'}>
            <Container>
                <FlexWrapper>
                    <FlexMain>
                        <MainTitle>
                            <p>WEB DEVELOPER</p>
                            <Typewriter
                                options={{
                                    strings: ['WEB DEVELOPER.', 'FRONTEND DEVELOPER.'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 100
                                }}
                            />

                        </MainTitle>
                        <Name>Ksenia Malysheva</Name>
                        <MainText>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                            officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.</MainText>
                        <Button button={'Contact Me'}/>
                    </FlexMain>
                    <Tilt
                        className="parallax-effect-img"
                        tiltMaxAngleX={40}
                        tiltMaxAngleY={40}
                        perspective={800}
                        transitionSpeed={1500}
                        scale={1.1}
                        gyroscope={true}
                    >
                        <Photo src={photo} alt="photo"/>
                    </Tilt>
                    {/*<IconWrapper>*/}
                    {/*    <Icon iconId={'arrow'}/>*/}
                    {/*</IconWrapper>*/}
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    display: flex;
`

const MainTitle = styled.h1`
    ${font({weight: 400, Fmax: 20, Fmin: 16})}
    color: ${'mainText'};
    font-family: Tinos sans-serif;
    font-size: 20px;
    color: ${theme.colors.mainText};

    p {
        display: none;
    }

    @media ${theme.media.mobile} {
        padding-top: 0;
    }
`

const Name = styled.h2`
    ${font({family: "'Montserrat', sans-serif", weight: 600, Fmax: 72, Fmin: 40})}
    line-height: normal;
    background-image: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
    color: transparent;
    -webkit-background-clip: text;
`

const MainText = styled.p`
    color: ${theme.colors.textBg};
    font-size: 16px;
    font-weight: 400;
    margin: 11px 0 29px;

    @media ${theme.media.mobile} {
        margin: 16px;
    }
`


const FlexWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    position: relative;


    @media screen and (max-width: 909px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap-reverse;
    }
`
const FlexMain = styled.div`
    @media ${theme.media.mobile} {
        text-align: center;
    }
`

const Photo = styled.img`
    width: 530px;
    height: 400px;
    object-fit: cover;


    @media screen and (max-width: 909px) {
        width: 320px;
        height: 240px;
        display: flex;
        text-align: center;
        margin: 0 auto;
    }
`


const IconWrapper = styled.div`
    position: absolute;
    top: 700px;
    left: 500px;

    @media  ${theme.media.tablet} {
        display: none;
    }
`
