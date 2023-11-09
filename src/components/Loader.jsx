// Importing necessary modules from react-three-fiber
import { Html, useProgress } from "@react-three/drei";


// CanvasLoader is a functional component that displays a loader while the canvas is loading
const CanvasLoader = () => {
  const { progress } = useProgress();

  // The component returns an HTML compnent from @react-three/drei
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

// Export the CanvasLoader component
export default CanvasLoader;