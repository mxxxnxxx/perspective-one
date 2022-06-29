import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";
import * as THREE from "three";

const Cave = () => {
    const ref = useRef();
    const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] =
        useLoader(TextureLoader, [
            "./Stylized_Cliff_Rock_003_BaseColor.jpg",
            "./Stylized_Cliff_Rock_003_Height.png",
            "./Stylized_Cliff_Rock_003_Normal.jpg",
            "./Stylized_Cliff_Rock_003_Roughness.jpg",
            "./Stylized_Cliff_Rock_003_AmbientOcclusion.jpg",
        ]);
    const blackTexture = useLoader(TextureLoader, "./blackMap.jpg");

    return (
        <>
            <mesh ref={ref}>
                <sphereGeometry args={[1000, 3000]} />
                <meshStandardMaterial
                    displacementScale={1}
                    map={colorMap}
                    displacementMap={displacementMap}
                    normalMap={normalMap}
                    roughnessMap={roughnessMap}
                    aoMap={aoMap}
                />
            </mesh>
            <mesh>
                <sphereGeometry args={[900, 2900]} />
                <meshBasicMaterial side={THREE.DoubleSide} map={blackTexture} />
            </mesh>
        </>
    );
};

export default Cave;
