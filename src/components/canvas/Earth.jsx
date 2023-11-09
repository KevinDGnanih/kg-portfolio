import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

// Earth is a functional component that displays the earth in the canvas
const Earth = () => {

  // useGLTF is a hook from @react-three/drei that loads a GLTF model
  const earth = useGLTF('./planet/scene.gltf')

  return (
    // The component returns a mesh with the earth in the canvas
    <primitive 
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0} />
  )
}

// EarthCanvas is a functional component that displays the canvas with the earth
const EarthCanvas = () => {
  return (

    // Canvas is a component from @react-three/fiber that displays a canvas
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{ 
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
       }}>
        
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls 
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2} />
        </Suspense>
        <Earth />

    </Canvas>
  )
}

// Export the EarthCanvas component
export default EarthCanvas;