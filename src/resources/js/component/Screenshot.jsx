import html2canvas from "html2canvas";
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
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useState } from "react";

const Screenshot = () => {
    const [modalOn, setModalOn] = useState(false);
    const handleOpen = () => setModalOn(true);
    const handleClose = () => setModalOn(false);
    const [targetImgUri, setTargetImgUri] = useState("");

    const saveAsImage = () => {
        const downloadLink = document.createElement("a");
        if (typeof downloadLink.download === "string") {
            downloadLink.href = targetImgUri;

            // ファイル名
            downloadLink.download = `${Date()}.png`;

            // Firefox では body の中にダウンロードリンクがないといけないので一時的に追加
            document.body.appendChild(downloadLink);

            // ダウンロードリンクが設定された a タグをクリック
            downloadLink.click();

            // Firefox 対策で追加したリンクを削除しておく
            document.body.removeChild(downloadLink);
        } else {
            window.open(targetImgUri);
        }
        handleClose();
    };

    const onClickExport = () => {
        // 画像に変換する component の id を指定
        const target = document.getElementById("screenshot");

        html2canvas(target, {
            dpi: 300,
            scale: 2,
        }).then((canvas) => {
            setTargetImgUri(() => canvas.toDataURL("img/png"));
            handleOpen();
        });
    };
    return (
        <>
            <IconButton
                onClick={() => onClickExport()}
                sx={{
                    position: "fixed",
                    top: "90%",
                    left: "65%",
                }}
            >
                <VisibilityOutlinedIcon
                    sx={{ color: "gray" }}
                    fontSize="large"
                />
            </IconButton>
            <Modal open={modalOn} onClose={handleClose}>
                <Card>
                    <CardMedia
                        component="img"
                        image={targetImgUri}
                        sx={{
                            height: "50vh",
                        }}
                    />
                    <CardContent sx={{ backgroundColor: "black" }}>
                        <Typography variant="body1" sx={{ color: "white" }}>
                            あなたの端末にImageがダウンロードされます
                            <br />
                            <br />
                            Imageはこの体験を仕向けた製作者にも開示され､複製されます
                            <br />
                            <br />
                            脳を殺さないでください
                        </Typography>
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
                            onClick={() => saveAsImage()}
                        >
                            必要
                        </Button>
                        <Button
                            color="error"
                            size="small"
                            onClick={() => handleClose()}
                        >
                            不要
                        </Button>
                    </CardActions>
                </Card>
            </Modal>
        </>
    );
};

export default Screenshot;
