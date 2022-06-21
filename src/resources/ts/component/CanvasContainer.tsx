import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { OrbitControls, Plane, PointerLockControls, Stats } from '@react-three/drei';
import * as THREE from 'three';
import "../../css/app.css"
import EnhancedFrame from '../container/EnhancedFrame'
import { Mesh } from 'three';


const CanvasContainer: React.FC = () => {

    return (
        <div >
            <Canvas id='canvas-container' style={{ height: "100%" }}>
                <mesh>
                    <EnhancedFrame />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <pointLight position={[10, 10, 10]} />
                    <meshStandardMaterial color={"hotpink"} />
                </mesh>
                <Plane args={[200, 200]} position={[0, -20, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <meshStandardMaterial color="#fff" />
                </Plane>

                <OrbitControls />

            </Canvas>
        </div>
    )
}

export default CanvasContainer
