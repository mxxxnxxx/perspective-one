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
import { useEffect, useState } from "react";
import usePostImageMutation from "../hooks/usePostImageMutation";
import PostImageLoading from "./PostImageLoading";
import { Box } from "@mui/system";

const Screenshot = () => {
    const { mutate: postImage, isLoading, isFetching } = usePostImageMutation();
    const [modalOn, setModalOn] = useState(false);
    const handleOpen = () => setModalOn(true);
    const handleClose = () => setModalOn(false);
    const [targetImgUri, setTargetImgUri] = useState("");

    const saveAsImage = () => {
        const downloadLink = document.createElement("a");
        if (typeof downloadLink.download === "string") {
            // MINE形式のファイルをBlobにへんかんする
            const blobImage = mineToBlob(targetImgUri);
            // ファイルネーム定義
            const fileName = `${Date()}.png`;
            // DLリンク用ファイル名を設定
            downloadLink.download = fileName;
            // ユーザー側DLリンク生成
            downloadLink.href = window.URL.createObjectURL(blobImage);
            // Firefox では body の中にダウンロードリンクがないといけないので一時的に追加
            document.body.appendChild(downloadLink);

            // ファイルとして画像をlaravelにHTTPリクエスト
            const data = new FormData();
            data.append("img", blobImage, fileName);
            // DB保存の処理
            postImage(data, {
                onSuccess: () => downloadLink.click(),
                onError: () => console.log("error"),
            });

            // Firefox 対策で追加したリンクを削除しておく
            document.body.removeChild(downloadLink);
        } else {
            window.open(targetImgUri);
        }
        handleClose();
    };

    function mineToBlob(targetImg) {
        const type = "image/png";
        const bin = atob(targetImg.split(",")[1]);
        const buffer = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) {
            buffer[i] = bin.charCodeAt(i);
        }
        const blobImage = new Blob([buffer.buffer], { type: type });
        return blobImage;
    }
    // canvasを画像に変換する処理
    const shutter = () => {
        // 画像に変換する component の id を指定
        const target = document.getElementById("screenshot");

        html2canvas(target, {
            dpi: 300,
            scale: 3,
        }).then((canvas) => {
            setTargetImgUri(() => canvas.toDataURL("img/png", 1));
            // モーダルON
            handleOpen();
        });
    };

    // ローディング中
    if (isLoading) {
        return (
            <PostImageLoading isLoading={isLoading} isFetching={isFetching} />
        );
    }

    // useEffect(() => {}, [targetImgUri, blobImage]);
    return (
        <>
            <IconButton
                onClick={() => shutter()}
                sx={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    transform: "translateX(-50%)",
                    opacity: "60%",
                }}
            >
                <VisibilityOutlinedIcon
                    sx={{ color: "gray" }}
                    fontSize="large"
                />
            </IconButton>
            <Modal open={modalOn} onClose={handleClose}>
                <Card
                    sx={{
                        backgroundColor: "black",
                    }}
                >
                    <CardMedia
                        component="img"
                        image={targetImgUri}
                        sx={{
                            height: "60vh",
                            width: "auto",
                            backgroundColor: "black",
                            margin: "auto",
                        }}
                    />
                    <CardContent
                        sx={{
                            backgroundColor: "black",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Box sx={{ maxWidth: "70%" }}>
                            <Typography variant="body1" sx={{ color: "white" }}>
                                あなたの端末にImageがダウンロードされます
                                <br />
                                <br />
                                Imageはこの体験を仕向けた製作者にも開示され
                                <br />
                                <br />
                                複製されます
                                <br />
                                <br />
                                脳を殺さないでください
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
                            onClick={() => saveAsImage(targetImgUri)}
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
