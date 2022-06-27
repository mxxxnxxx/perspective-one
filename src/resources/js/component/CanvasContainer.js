import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Physics } from "use-ammojs";
import Photos from "./Photos";

const CanvasContainer = () => {
    return (
        <>
            <Canvas
                camera={{
                    fov: 75,
                    near: 0.1,
                    far: 1000,
                    position: [0, 0, -800],
                }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.29} />
                    <Physics>
                        <Photos />
                        <OrbitControls makeDefault />
                    </Physics>
                </Suspense>
            </Canvas>
        </>
    );
};

export default CanvasContainer;
