import { Typography } from "@mui/material";
import { useProgress } from "@react-three/drei";
const Loading = () => {
    const { active, progress } = useProgress();
    return active ? (
        <div className="loader">
            <Typography>{progress}‰</Typography>
        </div>
    ) : null;
};
export default Loading;
