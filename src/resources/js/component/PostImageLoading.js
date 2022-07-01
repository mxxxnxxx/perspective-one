import styled from "@emotion/styled";
import { Backdrop, CircularProgress, createStyles } from "@mui/material";
import React from "react";
const useStyles = styled((theme) =>
    createStyles({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: "#fff",
        },
    })
);

const PostImageLoading = ({ isLoading, isFetching }) => {
    const classes = useStyles();

    return (
        <>
            <Backdrop className={classes.backdrop} open={isLoading}>
                <CircularProgress color="error" />
            </Backdrop>

            {!(isFetching === undefined) && (
                <Backdrop
                    className={classes.backdrop}
                    open={isLoading || isFetching}
                >
                    <CircularProgress color="primary" />
                </Backdrop>
            )}
        </>
    );
};

export default PostImageLoading;
