import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../styles/FlexWrapper";
import {SectionTitle} from "../../../styles/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} align={'center'} justify={'center'}>
                    <Skill iconId={'js'} title={'JAVACRIPT'}/>
                    <Skill iconId={'ts'} title={'typescript'}/>
                    <Skill iconId={'mongo'} title={'mongo db'}/>
                    <Skill iconId={'postgrest'} title={'PostgreSQL'}/>
                    <Skill iconId={'jest'} title={'Jest'}/>
                    <Skill iconId={'express'} title={'Express JS'}/>
                    <Skill iconId={'next'} title={'Nest JS'}/>
                    <Skill iconId={'docker'} title={'Docker'}/>
                    <Skill iconId={'react'} title={'react js'}/>
                    <Skill iconId={'reactN'} title={'react nactive'}/>
                    <Skill iconId={'styled'} title={'Styled Components'}/>
                    <Skill iconId={'redux'} title={'Redux'}/>
                    <Skill iconId={'git'} title={'git'}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};



const StyledSkills = styled.section`
    min-height: 10vh;
`

