import { Html } from "@react-three/drei";

const CanvasLoader = () => {
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="w-screen"
    >
        <img src="/assets/loader.svg" alt="loader" width={40} height={40} />
        <h3 className="flex w-fit">Loading 3D Model.. </h3>

    </Html>
  );
};

export default CanvasLoader;
