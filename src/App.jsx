import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import {Interface} from "./components/Interface";
import { Environment, OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [4, 0, -12], fov: 35 }}>
        <Environment preset="city"/>
        
        <Experience />
        <OrbitControls 
      makeDefault 
      />
   
      </Canvas>
      <Interface />
  
    </>
  );
}

export default App;
