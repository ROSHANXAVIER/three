import {Canvas} from "@react-three/fiber"
import Box from "./components/Box";
import Model from "./components/iphone";
import './App.css';
import styled from "styled-components";

import {Stars,OrbitControls} from "@react-three/drei"

function App() {
  return (
    <Wrapper>
      <Box/>
    <Canvas>
      
      <OrbitControls/>
        <Stars/>
        <ambientLight intensity={0.5}/>
        <spotLight position={[10,15,10]} angle={0.3}/>
        <Model />
    </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background:darkblue;

  canvas {
    height: 500px;
  }
`;



export default App;
