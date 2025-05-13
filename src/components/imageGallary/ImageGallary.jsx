
import '../../App.css';
import React, { useState } from 'react';
import { useModal } from 'react-hooks-use-modal';
import '../profile/profile.css';
import { MdOutlineClose } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Form from 'react-bootstrap/Form';
import utils from '../utils';



const ImageGallary = (getData) => {
    const [Modal, open, close] = useModal('root', {
        preventScroll: true,
        closeOnOverlayClick: false
    });

    const [imgObj, setImgObj] = useState({});
    const [imgIndex, setImgIndex] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);


    const ImgGallary = () => getData.imgList.map((item, index) => (
                

            <ul>
                <li>
                    <img onClick={() => { onViewImage(index) }} src={item.imgUrl} alt="Dynamic Images.." />
                </li>
            </ul>

       
    ))

    const ImgViewer = () => (
        <Modal>
                  <div className="popup-modal-viewer">
                <div className="user-modal-top"> <span> <img src={imgObj.imgUrl} alt="Images..." /> </span>
                <div className="user-modal-top-details">
                <h5>Sola</h5>
                <p>Long Beach, CA-60</p>
                </div>
                <button className='btn btn_closega' onClick={close}><MdOutlineClose className="arrow-sign" /></button>
                </div>
              <div className="main-view-image"><img src={imgObj.imgUrl} alt="Images..." /></div>
              <div className="user-caption">{imgObj.caption}</div>
              {/* <div style={{ marginBottom: '10px' }} className='customizableDiv'>This is a customizable div</div> */}
              <div className="caption_title">
                    <div className="send-message-user2">
                      <p>
                      <Form.Control className="form-control" type="text" placeholder="Send her a message"/>
                        <button className="btn">Send Message</button>
                      </p>
                    </div>
                  </div>
              <button className='btn btn-next-pre left-posp' onClick={previous} disabled={isDisabled}><MdOutlineArrowBackIosNew/></button>
              <button className='btn btn-next-pre right-posp' onClick={next} disabled={isDisabled}><MdOutlineArrowForwardIos /></button>
             
          </div>
            {/* <div>
                <div>
                    <img src={imgObj.imgUrl} alt="Images..." height={500} width={700} />
                    </div>
                <div style={{ background: "rgb(84 80 80)", color: "#fff", fontWeight: "bold", textAlign: 'center' }}>Caption: {imgObj.caption}</div>
                <div style={{ marginBottom: '10px' }} className='customizableDiv'>This is a customizable div</div>
                <button className='btn btn-success btnCostom' onClick={previous} disabled={isDisabled}>Previous</button>
                <button className='btn btn-success btnCostom' onClick={next} disabled={isDisabled}>Next</button>
                <button className='btn btn-danger btnCostom' onClick={close}>CLOSE</button>
            </div> */}
        </Modal>
    )

    function onViewImage(idx) {
        console.log('Param Data, Image Index => ', getData,idx);
        setImgObj(getData.imgList[idx], idx);
        setImgIndex(idx);
        if(getData.imgList.length  <= 1){
            setIsDisabled(true);
        }
        open();
    }

    function previous() {
        utils.prevImg(getData.imgList, setImgObj, setImgIndex, imgIndex)
    }

    function next() {
        utils.nextImg(getData.imgList, setImgObj, setImgIndex, imgIndex)
    }

    return (
        
        <div>
            <ImgViewer /> 
 
            <ImgGallary /> 

        </div>
    );
};

export default ImageGallary;
