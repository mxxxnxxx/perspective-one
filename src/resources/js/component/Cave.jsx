import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Cave = () => {
    const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] =
        useLoader(TextureLoader, [
            "./Stylized_Cliff_Rock_003_basecolor.jpg",
            "./Stylized_Cliff_Rock_003_height.png",
            "./Stylized_Cliff_Rock_003_normal.jpg",
            "./Stylized_Cliff_Rock_003_roughness.jpg",
            "./Stylized_Cliff_Rock_003_ambientOcclusion.jpg",
        ]);
    return (
        <mesh>
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
    );
};

export default Cave;
