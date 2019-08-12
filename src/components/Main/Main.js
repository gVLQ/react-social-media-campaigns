import React from 'react';
import { Link } from "react-router-dom";

import {MainStyles, StyledItem} from "./main-styles";
import appColors from '../../colors';

const Main = () => (
    <MainStyles>
        <Link to={{ pathname: '/campaigns'}}>
            <StyledItem color={appColors.rgbaPrimary}>
                <span>Campaigns</span>
            </StyledItem>
        </Link>
        <Link to={{ pathname: '/hall-of-fame'}}>
            <StyledItem color={appColors.rgbaSecondary}>
                <span>Hall of Fame</span>
            </StyledItem>
        </Link>
    </MainStyles>
)

export default Main;