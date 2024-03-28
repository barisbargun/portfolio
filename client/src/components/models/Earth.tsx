import { useGLTF } from "@react-three/drei";

const Earth = ({ inview }: { inview: boolean }) => {
  const earth = useGLTF("/planet/scene.gltf");
  return (
    inview &&
    <primitive object={earth.scene} scale={3} position-y={0} rotation-y={0} />
  );
}

export default Earth