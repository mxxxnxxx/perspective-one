import { useProgress } from "@react-three/drei";
const Loading = () => {
    const { progress } = useProgress();
    return (
        <div>
            <span>{Math.floor(progress)}%</span>
        </div>
    );
};
export default Loading;
