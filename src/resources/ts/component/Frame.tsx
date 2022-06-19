import { useFrame } from '@react-three/fiber'
import * as React from 'react'
import { Mesh, MeshStandardMaterial, Plane } from 'three'
const Frame: React.FC = () => {
    const ref = React.useRef({} as Mesh)
    useFrame(() => (ref.current.rotation.x += 0.01));

    return (
        <mesh ref={ref}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color={"hotpink"} />
        </mesh>
    )
}
export default Frame
