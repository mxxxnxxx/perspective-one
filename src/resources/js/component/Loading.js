import { useProgress, Html } from "@react-three/drei";

const Loading = () => {
    const { progress } = useProgress();
    return <Html center>{progress} % loaded</Html>;
};
export default Loading;
