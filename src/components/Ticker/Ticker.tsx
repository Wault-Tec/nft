import React, {FC} from 'react';
import { TickerWrapper, TickerItem } from './ticker.style';
import  DescriptionUp  from '../assets/block/Text/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Ticker: FC = () => {
    return (
        <TickerWrapper>
            <TickerItem>
                {/* <FontAwesomeIcon icon="fa-thin fa-globe" color="#fff" size="lg"/> */}
                <DescriptionUp uppercase descriptionUp="new way to reach the new fan" />
            </TickerItem>
        </TickerWrapper>
    );
}

export default Ticker;