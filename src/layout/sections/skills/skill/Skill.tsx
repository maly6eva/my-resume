import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../styles/FlexWrapper";
import {theme} from "../../../../styles/Theme";
import {font} from "../../../../styles/Common";


type SkillPropsType = {
    iconId: string
    title: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper  align="center" direction="column" justify="center">
                <Icon iconId={props.iconId} />
                <SkillTitle>{props.title}</SkillTitle>
            </FlexWrapper>
        </StyledSkill>
    );
};


const StyledSkill = styled.div`
    width: 20%;
    margin: 20px 0 120px 0;

    @media screen and (max-width: 909px) {
        width: 33%;
    }

    ${FlexWrapper} {
        @media ${theme.media.mobile} {
            width: 90px;
            height: 90px;
        }
`


const SkillTitle = styled.h3`
    margin-top: 20px;
    text-transform: uppercase;
    ${font({family: "'Montserrat', sans-serif",  Fmax: 16,  Fmin: 12 })}

    @media ${theme.media.mobile} {
    margin-top: 20px;
}
`


