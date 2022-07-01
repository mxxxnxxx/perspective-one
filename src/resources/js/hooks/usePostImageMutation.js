import axios from "axios";
import { useMutation } from "react-query";
const postImage = async (imgData) => {
    // dataはimgがキーになっている画像が入っている
    const { data } = await axios.post("/api/image", imgData, {
        headers: { "content-type": "multipart/form-data" },
    });
    return data;
};

const usePostImageMutation = () => {
    return useMutation(postImage, {
        onSuccess: () => {},
        onError: () => {},
    });
};

export default usePostImageMutation;
