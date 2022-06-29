import { useProgress } from "@react-three/drei";
const Loading = () => {
    const { active, progress } = useProgress();
    return active ? (
        <div className="loader">
            <span>{Math.floor(progress)}%</span>
        </div>
    ) : null;
};
export default Loading;
