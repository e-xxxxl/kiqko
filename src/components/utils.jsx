// utils.jsx
const utils = {
    prevImg: (imgList, setImgObj, setImgIndex, imgIndex) => {
        let imgIdx = imgIndex - 1;
        let totalItem = imgList.length - 1;
        if (imgIdx < 0) {
            imgIdx = totalItem;
            setImgObj(imgList[imgIdx]);
            setImgIndex(imgIdx);
        } else {
            setImgObj(imgList[imgIdx]);
            setImgIndex(imgIdx);
        }
    },
    nextImg: (imgList, setImgObj, setImgIndex, imgIndex) => {
        let imgIdx = imgIndex + 1;
        let totalItem = imgList.length - 1;
        if (imgIdx > totalItem) {
            imgIdx = 0;
            setImgObj(imgList[imgIdx]);
            setImgIndex(imgIdx);
        } else {
            setImgObj(imgList[imgIdx]);
            setImgIndex(imgIdx);
        }
    }
};

export default utils;
