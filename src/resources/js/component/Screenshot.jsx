import html2canvas from "html2canvas";
import { IconButton } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const Screenshot = () => {
    const saveAsImage = (uri) => {
        const downloadLink = document.createElement("a");

        if (typeof downloadLink.download === "string") {
            downloadLink.href = uri;

            // ファイル名
            downloadLink.download = "component.png";

            // Firefox では body の中にダウンロードリンクがないといけないので一時的に追加
            document.body.appendChild(downloadLink);

            // ダウンロードリンクが設定された a タグをクリック
            downloadLink.click();

            // Firefox 対策で追加したリンクを削除しておく
            document.body.removeChild(downloadLink);
        } else {
            window.open(uri);
        }
    };
    const onClickExport = () => {
        // 画像に変換する component の id を指定
        const target = document.getElementById("screenshot");
        html2canvas(target, {
            dpi: 315,
        }).then((canvas) => {
            const targetImgUri = canvas.toDataURL("img/png");
            saveAsImage(targetImgUri);
        });
    };
    return (
        <IconButton
            onClick={() => onClickExport()}
            sx={{
                position: "fixed",
                top: "90%",
                left: "65%",
            }}
        >
            <VisibilityOutlinedIcon sx={{ color: "gray" }} fontSize="large" />
        </IconButton>
    );
};

export default Screenshot;
