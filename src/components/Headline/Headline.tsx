import {FC} from 'react'
import {HeadlineWrapper, ContentLeft, Powered} from './headline.style'
import TitleUp from "../assets/Text/Text"
import TitleDown from "../assets/Text/Text"
import Description from "../assets/Text/Text"
import Text from "../assets/Text/Text"
 
const Headline: FC = () => {
    return (
        <HeadlineWrapper>
            <ContentLeft>
                <Text title>
                    <TitleUp textTitleUp="Music for NFT creators."/>
                </Text>
                {/* <TitleUp textTitleUp="Music for NFT creators."/>
                <TitleDown textTitleDown="Digital Music for fans."/>
                <Description description="Music NFTs will continue to revolutionize the way that artists and fans create community together as we enter the upcoming year — undoubtedly changing the trajectory of countless budding music careers."/> */}
                <Powered>
                    <p>Powered by</p>
                </Powered>
            </ContentLeft>
        </HeadlineWrapper>
    );
}
 
export default Headline;