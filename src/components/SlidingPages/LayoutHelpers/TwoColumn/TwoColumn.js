import React from 'react';

import TwoColumnStyles from "./two-column-styles";

const TwoColumn = ({children}) => (
    <TwoColumnStyles>
        {children}
    </TwoColumnStyles>
)

export default TwoColumn;