import styled from "styled-components";

export interface Props {
    p?: {
        mt: boolean;
    }
}

export const TitleUp = styled.div`
font-size: 80px;
font-weight: 400;
color: #fff;
margin: 0;
`
export const TitleDown = styled.div`
font-size: 64px;
font-weight: 400;
color: #fff;
margin: 0;
`
export const Description = styled.div`
font-size: 16px;
font-weight: 300;
color: #fff;
margin-top: 28px;
`