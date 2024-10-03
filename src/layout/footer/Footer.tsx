import styled from "styled-components";
import {FlexWrapper} from "../../styles/FlexWrapper";
import {FooterTitle} from "./FooterTitle";
import {Container} from "../../components/Container";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={'column'} align={'center'} gap={'49px'}>
                    <SocialList>
                        <SocialItem>
                            <SocialIconsLink>
                                <FooterTitle iconsId={'gmail'} text={'gmail'}/>
                            </SocialIconsLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialIconsLink>
                                <FooterTitle iconsId={'linkedin'} text={'linkedin'}/>
                            </SocialIconsLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialIconsLink>
                                <FooterTitle iconsId={'hithub'} text={'hithub'}/>
                            </SocialIconsLink>
                        </SocialItem>
                    </SocialList>
                    <FlexWrapper align={'center'}>
                        <Link href="">Projects</Link>
                        <Link href="">Contact</Link>
                    </FlexWrapper>
                    <Copyrght>WEB DEVELOPER 2021</Copyrght>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
    
`
const SocialList = styled.ul`
    display: flex;
    gap: 30px;
`

const SocialItem = styled.li`
`

const SocialIconsLink = styled.a`
    font-family: Montserrat, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`


const Copyrght = styled.small`
`

const Link = styled.a`

`