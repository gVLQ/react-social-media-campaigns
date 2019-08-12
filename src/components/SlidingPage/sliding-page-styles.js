import styled from 'styled-components';

const SlidingPageStyles = styled.div`
    width: 100vw;
    height: 70vh;
    overflow-y: scroll;
    position: fixed;
    ::-webkit-scrollbar {
        display: none;
    }
    transform: translateX(${props => props.left}px);
    animation-timing-function: ease-in;
    z-index: -20;
    transition: transform .8s ease-in-out;

    .page {
        width: 60%;
        height: 100%;
        min-height: 5em;
        margin-right: auto;
        margin-left: auto;
        z-index: 15000;
      }

    .page .page-container {
        padding: 5px;
        border: 1px solid #f0f0f0;
        border-radius: 5px;
        min-height: 60%;
    }

    .page .page-container hr {
       width: 98%;
       border-top: 1px solid #f0f0f0;
    }
`;

export default SlidingPageStyles;