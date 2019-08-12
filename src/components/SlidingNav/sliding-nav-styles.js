import styled from "styled-components";

const SlidingNavStyles = styled.div`
  margin-top: 1em;

  .nav-button {
    width: 48px;
    height: 48px;
    border-color: #000;
    position: absolute;
    top: 50%;
    margin-top: -31px;
    background-color: rgba(0,0,0,0);
    border: 0;
    cursor: pointer;
    outline: none;
  }
  .left-button {
    border-bottom: 6px solid;
    border-left: 6px solid;
    transform: rotate(45deg);
    left: 15px;
  }
  .right-button {
    border-bottom: 6px solid;
    border-left: 6px solid;
    transform: rotate(-135deg);
    right: 15px;
  }
  .steps {
      margin-left: 20%;
  }
`;

export default SlidingNavStyles;
