import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../styles/FlexWrapper";
import {theme} from "../../styles/Theme";


export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Menu link={'Home'}/>
                    <FlexWrapperMenu>
                        <Menu link={'Projects'}/>
                        <Menu link={'Contact'}/>
                    </FlexWrapperMenu>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    padding: 40px 0;
    align-items: stretch;
    //flex-shrink: fil;
`
const FlexWrapperMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 87px;

    @media ${theme.media.mobile} {
        gap: 12px;
    }
`
