import React from 'react';
import iconsSprite from '../../assets/images/sprite.svg'
import styled from "styled-components";


type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    photo?: string
}
export const Icon = (props: IconPropsType) => {
    return (
        <IconSvg width={props.width || "120"} height={props.height || "120"} viewBox={props.viewBox || "0 0 120 120"}
                 fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </IconSvg>
    );
};

const IconSvg = styled.svg`
    
`
