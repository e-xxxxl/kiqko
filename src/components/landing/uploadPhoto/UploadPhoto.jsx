import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { MdOutlineArrowForward } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import shape from '../../../assets/images/shape2.png';
import bgweball from '../../../assets/images/bgweball.png';
import apps from '../../../assets/images/apps.png';
import appg from '../../../assets/images/appg.png';
import downloadApp from '../../../assets/images/downloadApp.png';
import './UploadPhoto.css';

const UploadPhoto = () => {
  const [files, setFiles] = useState([]);
  const [captions, setCaptions] = useState({});
  const [mainPhotoIndex, setMainPhotoIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const userId = localStorage.getItem("userId");
  const history = useHistory();

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles(prev => [...prev, ...newFiles]);
    
    // Initialize captions for new files
    const newCaptions = {...captions};
    newFiles.forEach((file, index) => {
      newCaptions[file.name] = '';
    });
    setCaptions(newCaptions);
  };

  const handleCaptionChange = (fileName, value) => {
    setCaptions(prev => ({
      ...prev,
      [fileName]: value
    }));
  };

  const handleSetMainPhoto = (index) => {
    setMainPhotoIndex(index);
  };

  const handleRemovePhoto = (index) => {
    const newFiles = [...files];
    const removedFile = newFiles.splice(index, 1)[0];
    setFiles(newFiles);
    
    // Remove caption for deleted file
    const newCaptions = {...captions};
    delete newCaptions[removedFile.name];
    setCaptions(newCaptions);
    
    // Adjust main photo index if needed
    if (mainPhotoIndex === index) {
      setMainPhotoIndex(null);
    } else if (mainPhotoIndex > index) {
      setMainPhotoIndex(mainPhotoIndex - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const formData = new FormData();
      
      // Append files
      files.forEach((file, index) => {
        formData.append('photos', file);
        formData.append(`captions[${index}]`, captions[file.name] || '');
        if (index === mainPhotoIndex) {
          formData.append('mainPhotoIndex', index);
        }
      });
      
      const response = await fetch(
        `https://kiqko-backend.onrender.com/api/users/${userId}/photos`,
        {
          method: 'POST',
          body: formData,
        }
      );
      
      if (response.ok) {
        history.push('/manage-media');
      } else {
        console.error('Failed to upload photos');
      }
    } catch (error) {
      console.error('Error uploading photos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section>
      <section className="all-top-shape all-shape-inner">
        <img src={shape} alt="shape" />
      </section>
      <div className="all-container margin-bottom-step">
        <div className="all-container-inner setting-area position-top-all">
          <div className="all-seting-area">
            <Col md={12}>
              <div className="profile-main-part-area-inner mb-0 bg-all-pages mt-0 pb-0">
                <Col md={12} className="all-title-top mb-4 text-center">
                  <h4>Upload Photos</h4>
                  <p className="sub-p">
                    To continue you need to add a photo.<br />
                    To be a verified member you need to add a minimum of four photos.
                  </p>
                </Col>
                
                <div className="page-wrapper-all">
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col className="text-center" md={12}>
                        <div className="add-photo-upload">
                          <input 
                            type="file" 
                            onChange={handleFileChange}
                            multiple
                            accept="image/*"
                          />
                          <p className="upload-hint">Click to upload photos (JPEG, PNG)</p>
                        </div>

                        {files.length > 0 && (
                          <div className="uploaded-photos-container">
                            {files.map((file, index) => (
                              <div key={index} className="uploaded-photo-item">
                                <div className="photo-preview">
                                  <img 
                                    src={URL.createObjectURL(file)} 
                                    alt={`Preview ${index + 1}`} 
                                  />
                                  <button 
                                    type="button" 
                                    className="remove-photo-btn"
                                    onClick={() => handleRemovePhoto(index)}
                                  >
                                    ×
                                  </button>
                                </div>
                                
                                <div className="caption-field">
                                  <div className="form-field-row caption-area">
                                    <Form.Group className="mb-2">
                                      <Form.Control 
                                        className="form-custom upload-field-photo" 
                                        type="text" 
                                        placeholder="Add Caption (Max 99 characters)"
                                        value={captions[file.name] || ''}
                                        onChange={(e) => handleCaptionChange(file.name, e.target.value)}
                                        maxLength={99}
                                      />
                                    </Form.Group>
                                  </div>

                                  <div className="check-upload">
                                    <Form.Group className="mb-3 check-form check-long">
                                      <Form.Check 
                                        type="checkbox" 
                                        label="Make this my main picture"
                                        checked={mainPhotoIndex === index}
                                        onChange={() => handleSetMainPhoto(index)}
                                      />
                                    </Form.Group>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </Col>
                    </Row>

                    <Row className="mt-5">
                      <Col className="mt-12" md={12}>
                        <Button 
                          type="submit" 
                          className="all-btn-round mt-4" 
                          variant="primary"
                          disabled={isLoading || files.length === 0}
                        >
                          {isLoading ? 'Uploading...' : 'Continue'}
                          <MdOutlineArrowForward className="arrow-sign arrowba" />
                        </Button>
                      </Col>
                    </Row>
                  </form>

                  <Row>
                    <hr className="hr-color mt-4"></hr>
                    <p className="text-center app-p mb-0">
                      <span><img src={downloadApp} alt="downloadApp" /></span>
                      Download our app for:
                    </p>
                    <div className="col-md-12 text-center">
                      <NavLink exact to="bout">
                        <Button className="btn-app-link"> 
                          <img src={apps} alt="apps" />
                        </Button>
                      </NavLink>
                      <NavLink exact to="bout">
                        <Button className="btn-app-link"> 
                          <img src={appg} alt="appg" />
                        </Button>
                      </NavLink>
                    </div>
                  </Row>
                </div>
              </div>
            </Col>
          </div>
          <div className="clearfix"></div>
        </div>
        <div className="clearfix"></div>
        
        {/* shape-footer-all */}
        <div className="shape-footer-all footershape-basics">
          <img src={bgweball} alt="bgweball" />
        </div>
        {/* shape-footer-all */}
      </div>
    </section>
  );
};

export default UploadPhoto;