import { Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Stars } from './models'

const StarsCanvas = () => {
  
  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      className='!pointer-events-none'
    >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default StarsCanvas