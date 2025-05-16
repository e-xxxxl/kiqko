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
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const userId = localStorage.getItem("userId");
  const history = useHistory();

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (!file) {
    alert('Please select a photo to upload');
    return;
  }
  
  setIsLoading(true);
  
  try {
    const formData = new FormData();
    formData.append('profilePhoto', file);
    
    const response = await fetch(
      `http://localhost:5000/api/users/upload-photo/${userId}`,
      {
        method: 'POST',
        body: formData,
      }
    );
    
    const data = await response.json();
    
    if (response.ok) {
      // Optional: Save to localStorage
      localStorage.setItem('profilePhoto', data.photoUrl);
      
      // Verify the photo was saved by fetching user data
      const userResponse = await fetch(
        `https://kiqko-backend.onrender.com/api/users/profilee/${userId}`
      );
      const userData = await userResponse.json();
      
      console.log("User data after upload:", userData);
      
      history.push('/manage-media');
    } else {
      console.error('Upload failed:', data);
      alert(data.message || 'Upload failed. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again.');
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
                  <h4>Upload Profile Photo</h4>
                  <p className="sub-p">
                    To continue you need to add a profile photo.<br />
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
                            accept="image/*"
                          />
                          <p className="upload-hint">Click to upload profile photo (JPEG, PNG)</p>
                        </div>

                        {file && (
                          <div className="uploaded-photos-container">
                            <div className="uploaded-photo-item">
                              <div className="photo-preview">
                                <img 
                                  src={URL.createObjectURL(file)} 
                                  alt="Profile Preview" 
                                />
                                <button 
                                  type="button" 
                                  className="remove-photo-btn"
                                  onClick={() => setFile(null)}
                                >
                                  ×
                                </button>
                              </div>
                            </div>
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
                          disabled={isLoading || !file}
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