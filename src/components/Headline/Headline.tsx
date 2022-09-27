import React, {FC} from 'react'
import {HeadlineWrapper, ContentLeft, Powered, ContentRight} from './headline.style'
import TitleUp from "../assets/block/Text/Text"
import TitleDown from "../assets/block/Text/Text"
import Description from "../assets/block/Text/Text"
import hands from '../assets/image/hands.png'
 
const Headline: FC = () => {
    return (
        <HeadlineWrapper>
            <ContentLeft>
                <TitleUp textTitleUp="Music for NFT creators."/>
                <TitleDown textTitleDown="Digital Music for fans."/>
                <Description description="Music NFTs will continue to revolutionize the way that artists and fans create community together as we enter the upcoming year — undoubtedly changing the trajectory of countless budding music careers."/> 
                <Powered>
                    <p>Powered by</p>
                </Powered>
            </ContentLeft>
            <ContentRight>
                <img src={hands} alt=""/>
            </ContentRight>
        </HeadlineWrapper>
    );
}
 
export default Headline;