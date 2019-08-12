import React from 'react';
import SlidingPageStyles from "./sliding-page-styles";

const SlidingPage = ({left, children}) => {    
    return (    
    <SlidingPageStyles left={left}>
        {children}
    </SlidingPageStyles>
)}

export default SlidingPage;