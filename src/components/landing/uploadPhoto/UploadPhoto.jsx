import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MdOutlineArrowForward } from "react-icons/md";
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
<section className="min-h-screen bg-white relative overflow-hidden">
  {/* Decorative shape at top */}
  <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-[#855EF1] to-purple-400 clip-path-polygon-[0_0,_100%_0,_100%_70%,_0_100%]">
    <img src={shape} alt="decorative shape" className="w-full h-full object-cover opacity-20" />
  </div>

  {/* Main content container */}
  <div className="container mx-auto px-4 py-16 relative z-10">
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header section */}
      <div className="bg-[#855EF1] px-8 py-6 text-center">
        <h4 className="text-2xl font-bold text-white">Upload Profile Photo</h4>
        <p className="text-purple-100 mt-2">
          To continue you need to add a profile photo.
        </p>
      </div>

      {/* Form section */}
      <div className="p-8">
        <form onSubmit={handleSubmit}>
          {/* File upload area */}
          <div className="mb-8 text-center">
            <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-purple-200 rounded-lg cursor-pointer hover:bg-purple-50 transition-colors">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-10 h-10 text-purple-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                </svg>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-[#855EF1]">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-400 mt-1">JPEG, PNG (Max 5MB)</p>
              </div>
              <input 
                type="file" 
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
            </label>
          </div>

          {/* Image preview */}
          {file && (
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                <img 
                  src={URL.createObjectURL(file)} 
                  alt="Profile Preview" 
                  className="h-48 w-48 object-cover rounded-lg shadow-md"
                />
                <button
                  type="button"
                  onClick={() => setFile(null)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Remove photo"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Submit button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              disabled={isLoading || !file}
              className={`flex items-center px-8 py-3 rounded-full text-white font-medium transition-colors ${
                !file || isLoading 
                  ? 'bg-purple-300 cursor-not-allowed' 
                  : 'bg-[#855EF1] hover:bg-purple-700'
              }`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Uploading...
                </>
              ) : (
                <>
                  Continue
                  <MdOutlineArrowForward className="ml-2" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* App download section */}
        <div className="text-center">
          <div className="flex justify-center mb-3">
            <img src={downloadApp} alt="Download app" className="h-6" />
          </div>
          <p className="text-gray-600 mb-4">Download our app for:</p>
          <div className="flex justify-center space-x-4">
            <NavLink to="/about">
              <button className="p-2 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors">
                <img src={apps} alt="App Store" className="h-10" />
              </button>
            </NavLink>
            <NavLink to="/about">
              <button className="p-2 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors">
                <img src={appg} alt="Google Play" className="h-10" />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Decorative shape at bottom */}
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-r from-[#855EF1] to-purple-400 clip-path-polygon-[0_30%,_100%_0,_100%_100%,_0_100%] opacity-10">
    <img src={bgweball} alt="background pattern" className="w-full h-full object-cover" />
  </div>
</section>
  );
};

export default UploadPhoto;