import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const BlackCave = () => {
    const blackTexture = useLoader(TextureLoader, "./blackMap.jpg");
    return (
        <mesh>
            <sphereGeometry args={[900, 2900]} />
            <meshBasicMaterial side={THREE.DoubleSide} map={blackTexture} />
        </mesh>
    );
};
export default BlackCave;
