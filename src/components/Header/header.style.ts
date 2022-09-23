import styled from "styled-components";

export interface Props {
    p?: {
    fontWeight: string,
}
}

export const HeaderWrapper = styled.div`
/* background-color: rgba(255, 255, 255, 0.1); */
background-color: #000;
display: flex;
align-items: center;
`
export const Container = styled.div`
padding: 28px 41px 28px 41px;
display: flex;
justify-content: space-between;
width: 100%;
align-items: center;

`
export const Logo = styled.div`
display: flex;
flex-direction: column;
color: #fff;
font-weight: 600;
font-size: 20px;
margin: 0;
`
export const TextLogo = styled.div<Props>`
margin: 0;
font-weight: ${props => props.p?.fontWeight};
`
export const NavMenu = styled.div`
text-transform: uppercase;
color: #fff;
display: flex;
`
export const TextNav = styled.div`
margin-right: 42px;
font-size: 16px;
`
export const SocialIcon = styled.div`
display: flex;
& > svg {
    :not(:last-child){
    margin-right: 30px;
}
}
`
