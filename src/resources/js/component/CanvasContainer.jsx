import { OrbitControls, useContextBridge } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import { Physics } from "use-ammojs";
import { useMovementContext } from "../context/MovementContext";
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
                    near: 10,
                    far: 1000,
                    position: [0, 0, -800],
                }}
                id="screenshot"
                // これがないとスクショがブラックアウト
                gl={{ preserveDrawingBuffer: true }}
            >
                {/* useContextをCanvas内で使うためのコンポ-ネント */}
                <ContextBridge>
                    <Suspense fallback={null}>
                        <ambientLight intensity={0.29} />
                        <Physics>
                            <Photos />
                            <OrbitControls makeDefault />
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
