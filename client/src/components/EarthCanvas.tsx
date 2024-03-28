import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";
import { Earth } from "./models";
import { useInView } from "react-intersection-observer";

const EarthCanvas = () => {
  
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (

    <Canvas
      frameloop={inView ? 'demand' : "never"}
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
      ref={ref}
    >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            rotateSpeed={0.3}
            enabled = {inView ? true : false}
          />
          <Earth inview = {inView} />
        </Suspense>

      <Preload all />
    </Canvas>

  );
}

export default EarthCanvas