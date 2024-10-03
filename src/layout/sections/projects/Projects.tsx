import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../styles/FlexWrapper";
import {ProjectOne} from "./ProjectOne";
import {ProjectTwo} from "./ProjectTwo";
import {SectionTitle} from "../../../styles/SectionTitle";
import {Container} from "../../../components/Container";





export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper justify={'space-between'} wrap={'wrap'} gap={'16px'}>
                    <ProjectOne/>
                    <ProjectTwo/>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
${FlexWrapper} {
    
}

`


