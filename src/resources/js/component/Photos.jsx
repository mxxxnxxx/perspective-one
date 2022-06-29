import { useFrame, useLoader } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { BodyType, ShapeType, useRigidBody } from "use-ammojs";
import { useMovementContext } from "../context/MovementContext";

const SPEED = 2;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();

const Photos = () => {
    const { Controls } = useMovementContext();
    const [ref, api] = useRigidBody(() => ({
        mass: 10000,
        bodyType: BodyType.DYNAMIC,
        shapeType: ShapeType.SPHERE,
        position: [0, 0, 0],
    }));

    const { up, down, left, right } = Controls();

    useFrame(() => {
        frontVector.set(0, Number(down) - Number(up), 0);
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
    const texture = useLoader(TextureLoader, "./photos.jpg");
    useMemo(() => (texture.minFilter = THREE.LinearFilter), []);
    return (
        <mesh ref={ref}>
            <boxBufferGeometry args={[30, 20, 0.1]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    );
};
export default Photos;
