import styled from "styled-components";


export const HeadlineWrapper = styled.div`
padding-top: 170px;
display: flex;
align-items: center;
justify-content: left;
margin-left: 40px;
height: 100%;
overflow: hidden;
`
export const ContentLeft = styled.div`
max-width: 890px;
`

export const Powered = styled.div`
display: flex;
flex-direction: column;
font-size: 13px;
color: #fff;
margin-top: 40px;
`
export const ContentRight = styled.div`
z-index: -999;
& > img {
    position: absolute;
    top: 0;
}
`