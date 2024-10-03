import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";

type FooterTitleProps = {
    iconsId: string
    text: string
}

export const FooterTitle = (props: FooterTitleProps ) => {
    return (
        <StyleFooter>
            <Icon width={'38px'} height={'38px'} viewBox={'0 0 38px 38px'} iconId={props.iconsId}/>
            <FooterText>{props.text}</FooterText>
        </StyleFooter>
    );
};



const StyleFooter = styled.div`
    text-align: center;
`

const FooterText = styled.p`
    text-align: center;
    font-family: Montserrat, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 11.105px; /* 92.544% */
    letter-spacing: 1.44px;
    text-transform: uppercase;
`



