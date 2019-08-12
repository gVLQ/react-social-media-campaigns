import styled from "styled-components";

const MainStyles = styled.div`
  font-family: 'Oswald', sans-serif;
  display: flex;
  flex-wrap: nowrap;
`;

const StyledItem = styled.div`
  background-color: ${props => props.color};
  width: 40vw;
  height: 60vh;
  margin: 5vw;
  font-size: 3em;
  color: #ccc;

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  :hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    color: rgba(0,0,0,0.24);
  }

  span {
    position: relative;
    float: left;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export { MainStyles, StyledItem };
