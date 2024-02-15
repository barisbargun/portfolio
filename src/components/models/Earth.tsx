import { useGLTF } from "@react-three/drei";

const Earth = ({earth}:{earth:any}) => {
  return (

    <primitive object={earth.scene} scale={3} position-y={0} rotation-y={0} />

  );
}

export default Earth