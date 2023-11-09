import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

// Stars is a functional component that displays the stars in the canvas
const Stars = (props) => {
  const ref = useRef();
  // random.inSphere is a function from maath/random that generates random points in a sphere
  const [sphere] = useState(() => 
  random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  // useFrame is a hook from @react-three/fiber that runs a function on every frame
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    // The component returns a mesh with the stars in the canvas
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false} />
      </Points>
    </group>
  );
};

// StarsCanvas is a functional component that displays the canvas with the stars
const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

// Export the StarsCanvas component
export default StarsCanvas;