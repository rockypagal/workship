import styled from "styled-components";

const Ball = styled.div`
  width: ${({width})=>width}; 
  height: ${({height})=>height};
  background: linear-gradient(to right,#03001e,#7303c0,#ec38bc,#fdeff9 );
  clip-path: circle(50%);
  position: absolute;
  top: ${({top})=>top?top:''};
  left: ${({left})=>left?left:''};
  right: ${({right})=>right? right:''};
  bottom: ${({bottom})=>bottom? bottom:''};
  z-index: -2;
`;


export default Ball 