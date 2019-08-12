import styled from 'styled-components';

const TwoColumnStyles = styled.div`
    display: flex;
    padding: 2em 2em 0em 2em;

    span {
        font-weight: bold;
    }

    .full-column {
        flex: 100;
    }

    .half-column {
        flex: 50%;
        margin: -1.8em 2em 0em 0em;
    }

    .one-third-column {
        flex: 30%
    }

    .two-thirds-column {
        flex: 70;
    }
`;

export default TwoColumnStyles;