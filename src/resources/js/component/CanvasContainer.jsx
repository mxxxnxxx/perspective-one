import { OrbitControls, useContextBridge } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Physics } from "use-ammojs";
import { useMovementContext } from "../context/MovementContext";
import Cave from "./Cave";
import JoystickController from "./JoystickController";
import Photos from "./Photos";
import Screenshot from "./Screenshot";

const CanvasContainer = () => {
    // useContextをCanvas内で使うための記述
    const { Context } = useMovementContext();
    const ContextBridge = useContextBridge(Context);
    return (
        <>
            <Canvas
                camera={{
                    fov: 75,
                    near: 0.1,
                    far: 100000,
                    position: [0, 0, -100],
                }}
                id="screenshot"
                gl={{
                    // これがないとスクショがブラックアウト
                    preserveDrawingBuffer: true,
                }}
            >
                {/* useContextをCanvas内で使うためのコンポ-ネント */}
                <ContextBridge>
                    <Suspense fallback={null}>
                        <ambientLight intensity={0.29} />
                        <Physics>
                            <Photos />
                            <Cave />
                            <OrbitControls
                                makeDefault
                                zoomSpeed={0.2}
                                rotateSpeed={0.6}
                            />
                        </Physics>
                    </Suspense>
                </ContextBridge>
            </Canvas>
            <JoystickController />
            <Screenshot />
        </>
    );
};

export default CanvasContainer;