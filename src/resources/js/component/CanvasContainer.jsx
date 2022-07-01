import { OrbitControls, useContextBridge } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Physics } from "use-ammojs";
import { useMovementContext } from "../context/MovementContext";
import BlackCave from "./BlackCave";
import Cave from "./Cave";
import JoystickController from "./JoystickController";
import Loading from "./Loading";
import Photos from "./Photos";
import Screenshot from "./Screenshot";

const CanvasContainer = () => {
    // useContextをCanvas内で使うための記述
    const { Context } = useMovementContext();
    const ContextBridge = useContextBridge(Context);
    return (
        <>
            <Loading />
            <Suspense fallback={null}>
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
                        <ambientLight intensity={0.29} />
                        <Physics>
                            <Photos />
                            <Cave />
                            <BlackCave />
                            <OrbitControls
                                makeDefault
                                zoomSpeed={0.6}
                                rotateSpeed={0.6}
                            />
                        </Physics>
                    </ContextBridge>
                </Canvas>
                <JoystickController />
                <Screenshot />
            </Suspense>
        </>
    );
};

export default CanvasContainer;
