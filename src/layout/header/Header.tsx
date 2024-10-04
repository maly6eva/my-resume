import React from 'react';

import {Container} from "../../components/Container";
import {FlexWrapper} from "../../styles/FlexWrapper";
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";



export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'flex-end'}>
                        <Menu/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    align-items: end;


    
    
    
`

