import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Book } from "./Book";
import { useThree } from '@react-three/fiber';  // <== ADD THIS
import { useEffect } from 'react';
export const Experience = () => {
  const { gl, scene } = useThree();

  useEffect(() => {
    // This sets background color once when component mounts
    scene.background = null;        // remove any existing background texture
    gl.setClearColor('black');      // set renderer background color to black
  }, [gl, scene]);

  return (
    <>
      <color attach="background" args={['black']} />
      <Float
        rotation-x={-Math.PI / 4}
        floatIntensity={1}
        speed={.5}
        rotationIntensity={2}
      >
        <Book />
      </Float>
      <OrbitControls />
      <Environment preset="studio"></Environment>
      <directionalLight
        position={[2, 5, 2]}
        intensity={0.1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};
