import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { BodyType, ShapeType, useRigidBody } from "use-ammojs";

import { useEffect, useState } from "react";
import * as THREE from "three";

const SPEED = 10;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();

const keys = {
    ArrowUp: "forward",
    ArrowDown: "backward",
    ArrowLeft: "left",
    ArrowRight: "right",
    KeyA: "left",
    KeyD: "right",
    KeyW: "forward",
    KeyS: "backward",
};

const moveFieldByKey = (key) => keys[key];

const Controls = () => {
    const [movement, setMovement] = useState({
        forward: false,
        backward: false,
        left: false,
        right: false,
        up: false,
        down: false,
    });
    const handleMouseMove = (e) => {};

    useEffect(() => {
        const handleKeyDown = (e) =>
            setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: true }));
        const handleKeyUp = (e) =>
            setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false }));
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);
        document.addEventListener("pointermove", handleMouseMove);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("keyup", handleKeyUp);
            document.removeEventListener("pointermove", handleMouseMove);
        };
    }, []);
    return movement;
};

const Photos = () => {
    const [ref, api] = useRigidBody(() => ({
        mass: 10000,
        bodyType: BodyType.DYNAMIC,
        shapeType: ShapeType.SPHERE,
        position: [0, 0, 0],
    }));

    let { forward, backward, left, right } = Controls();

    useFrame(() => {
        frontVector.set(0, Number(backward) - Number(forward), 0);
        sideVector.set(Number(left) - Number(right), 0, 0);
        direction
            .subVectors(frontVector, sideVector)
            .normalize()
            .multiplyScalar(SPEED);
        api.setLinearVelocity(direction);
    });
    // 3段階
    // テクスチャ - 作成
    // マテリアル作成
    // マテリアルでMesh作成
    // console.log(textureUrl);
    const colorMap = useLoader(TextureLoader, "./photos.jpg");

    return (
        <mesh ref={ref}>
            <boxBufferGeometry args={[300, 200, 0.1]} />
            <meshStandardMaterial map={colorMap} visible={true} />
        </mesh>
    );
};
export default Photos;
