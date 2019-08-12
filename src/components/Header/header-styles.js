import styled from 'styled-components';

const HeaderStyles = styled.div`
    font-family: 'Source Sans Pro', sans-serif;
    overflow: hidden;
    padding: 20px 10% 0px 10%; 
    margin: 0 auto 0 auto;

    .logo {
        color: ${props => props.primaryColor};
        font-size: 2em;
        margin-right: 20px;
    }

    a {
        float: left;
        color: #ccc;
        text-align: center;
        padding: 12px;
        text-decoration: none;
        font-size: 18px; 
        line-height: 25px;
    }

    a:not(.logo):hover {
        color: black;
    }

    .header-right {
        float: right;
    }

    .active-link {
        color: black;
    }

    .notifications::after {
        content: "•"; 
        color: ${props => props.primaryColor};
        position: relative;
        top: -7px;
    }

    .user-name::after {
        content: "↓"; 
        left: 10px;
        position: relative;
    }

    @media screen and (max-width: 500px) {
        
         a {
          float: none;
          display: block;
          text-align: left;
        }
        
        .header-right {
          float: none;
        }
      }
`;

export default HeaderStyles;