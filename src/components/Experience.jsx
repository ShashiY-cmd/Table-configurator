import { Stage } from "@react-three/drei";
import {Table} from './Table'
import { color } from "three/examples/jsm/nodes/Nodes.js";
import { useConfigurator } from "./contexts/configurator";
export const Experience = () => {
  const {legs} = useConfigurator()
  return (
    <>

    <Stage
    intensity={1.5}
    shadows={{
      type:"accumulative",
      color: "#d9afd9",
      colorBlend: 2,
      opacity: 2,
    }}
      adjustCamera={2}>
      
      <Table/>
      
      </Stage>
   </>
  );
};
