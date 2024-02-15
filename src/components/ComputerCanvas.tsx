import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";
import { Computer } from "./models";
import { InView, useInView } from "react-intersection-observer";


const ComputerCanvas = () => {
  const computer = useGLTF("/desktop_pc/scene.gltf");
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  return (

    <Canvas
      frameloop={inView ? 'demand' : "never"}
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      ref={ref}
    >
      {inView &&
        <Suspense fallback={<CanvasLoader />}>

          <OrbitControls
            autoRotate
            autoRotateSpeed={0.5}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computer computer={computer} />
        </Suspense>
      }

      <Preload all />
    </Canvas>

  );
}

export default ComputerCanvas