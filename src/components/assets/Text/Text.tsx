import React, {FC} from 'react'
import {TitleUp, TitleDown, Description} from './text.style'
interface Props {
    children: React.ReactChildren,
    title?: boolean;
    textTitleUp?: string;
    textTitleDown?: string;
    description?: string;
}
 
const Text: FC<Props> = (props) => {
    return (
        <>
        {props.title ? <TitleUp>{props.textTitleUp}</TitleUp> : ''}
        <TitleDown>{props.textTitleDown}</TitleDown>
        <Description>{props.description}</Description>
        </>
    );
}
 
export default Text;