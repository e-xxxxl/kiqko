import React, { useState } from 'react';
import ImageGallary from './imageGallary/ImageGallary';

import img1 from '../assets/images/photo2.jpg';
import img2 from '../assets/images/photo3.jpg';
import img3 from '../assets/images/photo4.png';
import img4 from '../assets/images/photo5.png';
import img6 from '../assets/images/photo6.jpg';
import img7 from '../assets/images/photo7.jpg';
import { useModal } from 'react-hooks-use-modal';

import utils from './utils';

const Photog = () => {

    // Profile Image View Start
    const [Modal, open, close] = useModal('root', {
        preventScroll: true,
        closeOnOverlayClick: false
    });

    const [imgObj, setImgObj] = useState({});
    const [imgIndex, setImgIndex] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);

    const profileImgList = [
        { imgUrl: img6, caption: 'Profile Picture -01' },
        { imgUrl: img7, caption: 'Profile Picture -02' }
    ]

    function viewProfileImg(){ 
        setImgObj(profileImgList[0]);
        setImgIndex(0);
        if(profileImgList.length  <= 1){
            setIsDisabled(true);
        }
        open();
    }

    const ImgViewer = () => (
        <Modal>
            <div>
                <div><img src={imgObj.imgUrl} alt="Images..." height={500} width={700} /></div>
                <div style={{ background: "rgb(84 80 80)", color: "#fff", fontWeight: "bold", textAlign: 'center' }}>Caption: {imgObj.caption}</div>
                <div style={{ marginBottom: '10px' }} className='customizableDiv'>This is a customizable div</div>
                <button className='btn btn-success btnCostom' onClick={previous} disabled={isDisabled}>Previous</button>
                <button className='btn btn-success btnCostom' onClick={next} disabled={isDisabled}>Next</button>
                <button className='btn btn-danger btnCostom' onClick={close}>CLOSE</button>
            </div>
        </Modal>
    )

    function previous() {
        utils.prevImg(profileImgList, setImgObj, setImgIndex, imgIndex)
    }

    function next() {
        utils.nextImg(profileImgList, setImgObj, setImgIndex, imgIndex)
    }
    // Profile Image View End

    // Gallary Image View Start
    const gallaryImgList = [
        { imgUrl: img1, caption: 'Image-01' },
        { imgUrl: img2, caption: 'Image-02' },
        { imgUrl: img3, caption: 'Image-03' },
        { imgUrl: img4, caption: 'Image-04' }
    ]
    // Gallary Image View End

    return (
        <div>
            <img onClick={viewProfileImg} src={img6} alt="photom" height="200px" width="200px"/>
            <h5> Mrs. Jhon Doe </h5>
            <hr/>

            {/* Profile Image View */}
            <ImgViewer/>
            {/* Profile Image View */}

            <h1>Photo Gallary</h1>
            <ImageGallary imgList={gallaryImgList}/>

        </div>
    );
};

export default Photog;