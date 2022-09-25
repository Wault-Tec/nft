import React, {FC} from 'react'
import {HeadlineWrapper, ContentLeft} from './headline.style'
import TitleUp from "../assets/Text/Text"
import TitleDown from "../assets/Text/Text"
import Description from "../assets/Text/Text"
interface Props {
    
}
 
const Headline: FC<Props> = () => {
    return (
        <HeadlineWrapper>
            <ContentLeft>
                <TitleUp textTitleUp="Music for NFT creators."/>
                <TitleDown textTitleDown="Digital Music for fans."/>
                <Description description="Music NFTs will continue to revolutionize the way that artists and fans create community together as we enter the upcoming year — undoubtedly changing the trajectory of countless budding music careers."/>
            </ContentLeft>
        </HeadlineWrapper>
    );
}
 
export default Headline;