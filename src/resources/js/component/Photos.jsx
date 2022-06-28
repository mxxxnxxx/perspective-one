import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { BodyType, ShapeType, useRigidBody } from "use-ammojs";
import { useMovementContext } from "../context/MovementContext";

const SPEED = 15;
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
    const colorMap = useLoader(TextureLoader, "./photos.jpg");

    return (
        <mesh ref={ref}>
            <boxBufferGeometry args={[300, 200, 0.1]} />
            <meshStandardMaterial map={colorMap} visible={true} />
        </mesh>
    );
};
export default Photos;
