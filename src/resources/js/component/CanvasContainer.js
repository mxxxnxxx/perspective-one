import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const CanvasContainer = () => {
    return (
        <>
            <Canvas camera={{ position: [0, 0, 17], far: 50 }}>
                <OrbitControls makeDefault />
            </Canvas>
        </>
    );
};

export default CanvasContainer;
