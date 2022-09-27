import styled from "styled-components";


export const HeadlineWrapper = styled.div`
display: flex;
padding-top: 170px;
align-items: center;
margin-left: 40px;
height: 100%;
overflow: hidden;
justify-content: space-between;
position: relative;
`
export const ContentLeft = styled.div`
max-width: 890px;
display: flex;
flex-direction: column;
`

export const Powered = styled.div`
display: flex;
flex-direction: column;
font-size: 13px;
color: #fff;
margin-top: 40px;
`
export const ContentRight = styled.div`
z-index: -10;
position: fixed;
left: 1200px;
top: 50px;
& > img {
}
`