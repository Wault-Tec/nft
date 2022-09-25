import styled from "styled-components";

export interface Props {
    p?: {
        marginTop: boolean;
    }
}

export const TitleUp = styled.div`
font-size: 80px;
font-weight: 400;
color: #fff;
white-space: nowrap;
`
export const TitleDown = styled.div`
font-size: 64px;
font-weght: 400;
color: #fff;
`
export const Description = styled.div`
font-size: 16px;
font-weight: 300;
color: #fff;
`