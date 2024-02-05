import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";
import { Earth } from "./models";
const EarthCanvas = () => {
  return (

    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-fit h-fit"
      
    >
      <Suspense fallback={<CanvasLoader />}>

        <OrbitControls
          autoRotate
          enableZoom={false}
          rotateSpeed={0.3}
          

        />
        <Earth />
      </Suspense>

      <Preload all />
    </Canvas>

  );
}

export default EarthCanvas