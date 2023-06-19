import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Experience } from './Experience';

const AnimationMainPage = () => {
  return (
    <div className='h-screen mx-0 my-0 bg-milk'>
      <Canvas camera={{
        fov: 64,
        position: [10.3, 5.5, 2],
      }}>
        <Experience/>
      </Canvas>
    </div>
  );
}



export default AnimationMainPage