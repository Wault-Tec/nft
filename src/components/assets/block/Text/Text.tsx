import React, {FC} from 'react'
import {TitleUp, TitleDown, Description, DescriptionUp} from './text.style'
interface Props {
    title?: boolean;
    textTitleUp?: string;
    textTitleDown?: string;
    description?: string;
    descriptionUp?: string;
}

const Text: FC<Props> = (props) => {
    return (
        <>
        <TitleUp>{props.textTitleUp}</TitleUp>
        <TitleDown>{props.textTitleDown}</TitleDown>
        <Description>{props.description}</Description>
        <DescriptionUp>{props.descriptionUp}</DescriptionUp>
        </>
    );
}
 
export default Text;