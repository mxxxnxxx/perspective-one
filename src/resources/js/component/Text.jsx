import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    Modal,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const Text = () => {
    const [textModalOn, setTextModalOn] = useState(true);
    // const handleOpen = () => setTextModalOn(true);
    const handleClose = () => setTextModalOn(false);

    return (
        <Modal open={textModalOn} onClose={handleClose}>
            <Card
                sx={{
                    backgroundColor: "black",
                }}
            >
                <CardContent
                    sx={{
                        backgroundColor: "black",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Box sx={{ maxWidth: "70%" }}>
                        <Typography
                            variant="body1"
                            sx={{
                                color: "white",
                                whiteSpace: "pre-wrap",
                            }}
                        >
                            {
                                "namespace 之\n\n import (...変数:[]);\n\n export (…変数:[]) => Perspective\n\n {\n   個人 ≠ 集団 = \n\n    (あなたの内側の私) ≠ (私の内側のあなた) =\n\n    (私の男性) ≠ (私の女性) =\n\n    客観 ≠ 主観 =\n\n    空間 ≠ 時間 =\n\n    (主観の時間) ≠ (主観の時間) =\n\n    null ≠  undefined =\n\n    return  “今 目の前 で嘔吐せよ”\n}"
                            }
                        </Typography>
                    </Box>
                </CardContent>
                <CardActions
                    sx={{
                        justifyContent: "center",
                        backgroundColor: "black",
                    }}
                >
                    <Button
                        color="error"
                        size="small"
                        onClick={() => handleClose()}
                    >
                        Unit Test Start
                    </Button>
                </CardActions>
            </Card>
        </Modal>
    );
};

export default Text;
