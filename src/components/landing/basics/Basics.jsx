import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { MdOutlineArrowForward } from "react-icons/md";
import './Basics.css';
import shape from '../../../assets/images/shape2.png';
import bgweball from '../../../assets/images/bgweball.png';
import apps from '../../../assets/images/apps.png';
import appg from '../../../assets/images/appg.png';
import downloadApp from '../../../assets/images/downloadApp.png';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Basics = () => {
    const [formData, setFormData] = useState({
    gender: "",
    birthDate: {
      month: "",
      day: "",
      year: "",
    },
    ethnicity: "",
    maritalStatus: "",
    height: "165cm - (5'5\")",
    bodyType: "",
    hasKids: "",
    wantsKids: "",
    hereFor: "",
    wouldRelocate: "",
  });

  const userId = localStorage.getItem("userId");
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  // Load initial data if needed
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/users/${userId}`);
        if (res.ok) {
          const data = await res.json();
          // Format the data if needed
          setFormData(prev => ({
            ...prev,
            ...data,
            birthDate: data.birthDate ? {
              month: new Date(data.birthDate).getMonth() + 1,
              day: new Date(data.birthDate).getDate(),
              year: new Date(data.birthDate).getFullYear(),
            } : prev.birthDate
          }));
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleBirthdayChange = (part, value) => {
    setFormData((prev) => ({
      ...prev,
      birthDate: {
        ...prev.birthDate,
        [part]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { month, day, year } = formData.birthDate;

    // Convert to valid date string: "YYYY-MM-DD"
    const formattedBirthDate = new Date(
      `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`
    ).toISOString();

    // Replace birthDate object with proper Date
    const formattedData = {
      ...formData,
      birthDate: formattedBirthDate,
    };

    try {
      const res = await fetch(
        `https://kiqko-backend.onrender.com/api/users/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formattedData),
        }
      );
      if (res.ok) {
        history.push("/upload-photo");
      }
    } catch (err) {
      console.error("Error updating profile:", err);
    }
  };

  if (loading) return <div>Loading...</div>;

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
        <h4>Basics</h4>
      </Col>

      <div className="page-wrapper-all">
        <form onSubmit={handleSubmit}>
          <div className="pageWrapper-inner mt-5 basic-page basic-page-full">
            <Row className="m-0-responsive">
              <Col md={12}>
                <label className="labelForm">I am a</label>
                <Button 
                  className={`formBtn all-select-btnr ${formData.gender === "Female" ? "active" : ""}`} 
                  variant="primary"
                  onClick={() => handleChange("gender", "Female")}
                >
                  <input type="radio" id="Female" name="gender" checked={formData.gender === "Female"} />
                  <label htmlFor="Female">Woman</label>
                </Button>
                <Button 
                  className={`formBtn all-select-btnr ${formData.gender === "Male" ? "active" : ""}`} 
                  variant="primary"
                  onClick={() => handleChange("gender", "Male")}
                >
                  <input type="radio" id="Male" name="gender" checked={formData.gender === "Male"} />
                  <label htmlFor="Male">Man</label>
                </Button>
              </Col>
            </Row>

            <Row className="row-custom-width m-0-responsive">
              <label className="labelForm mt-4">Birthday</label>
              <Col className="ps-1 p-ends-res pe-2" md={4}>
                <Form.Select 
                  className="form-custom-inner brder-form" 
                  size="lg"
                  value={formData.birthDate.month}
                  onChange={(e) => handleBirthdayChange("month", e.target.value)}
                >
                  <option value="">Month</option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </Form.Select>
              </Col>
              <Col className="ps-2 p-ends-res pe-1" md={4}>
                <Form.Select 
                  className="form-custom-inner brder-form" 
                  size="lg"
                  value={formData.birthDate.day}
                  onChange={(e) => handleBirthdayChange("day", e.target.value)}
                >
                  <option value="">Day</option>
                  {Array.from({length: 31}, (_, i) => i + 1).map(day => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </Form.Select>
              </Col>
              <Col className="pe-2" md={4}>
                <Form.Select 
                  className="form-custom-inner brder-form" 
                  size="lg"
                  value={formData.birthDate.year}
                  onChange={(e) => handleBirthdayChange("year", e.target.value)}
                >
                  <option value="">Year</option>
                  {Array.from({length: 85}, (_, i) => new Date().getFullYear() - 18 - i).map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </Form.Select>
              </Col>
            </Row>

            <Row className="m-0-responsive">
              <Col className="mt-4 pt-3" md={12}>
                <label className="labelForm">Race</label>
                {["White / Caucasian", "Asian", "Black / African Decent", "Latino / Hispanic", 
                  "North American", "East Indian", "Pacific Islander", "Middle Eastern", 
                  "Mixed Race", "Other Race"].map(race => (
                  <Button 
                    key={race}
                    className={`formBtn all-select-btnr ${formData.ethnicity === race ? "active" : ""}`} 
                    variant="primary"
                    onClick={() => handleChange("ethnicity", race)}
                  >
                    <input 
                      type="radio" 
                      id={race.split(' ')[0]} 
                      name="race" 
                      checked={formData.ethnicity === race} 
                    />
                    <label htmlFor={race.split(' ')[0]}>{race}</label>
                  </Button>
                ))}
              </Col>
            </Row>

            <Row className="m-0-responsive">
              <Col className="mt-4 pt-3" md={12}>
                <label className="labelForm">Marital Status</label>
                {["Single", "Divorced", "Separated", "Widowed", "Attached"].map(status => (
                  <Button 
                    key={status}
                    className={`formBtn all-select-btnr ${formData.maritalStatus === status ? "active" : ""}`} 
                    variant="primary"
                    onClick={() => handleChange("maritalStatus", status)}
                  >
                    <input 
                      type="radio" 
                      id={status} 
                      name="maritalStatus" 
                      checked={formData.maritalStatus === status} 
                    />
                    <label htmlFor={status}>{status}</label>
                  </Button>
                ))}
              </Col>
            </Row>

            <Row className="m-0-responsive">
              <label className="labelForm mt-4">Height</label>
              <Col className="pe-0" md={3}>
                <Form.Select 
                  className="form-custom-inner brder-form font-small" 
                  size="lg"
                  value={formData.height}
                  onChange={(e) => handleChange("height", e.target.value)}
                >
                  {[
                    "150cm - (4'11\")", "152cm - (5'0\")", "155cm - (5'1\")", "157cm - (5'2\")", 
                    "160cm - (5'3\")", "163cm - (5'4\")", "165cm - (5'5\")", "168cm - (5'6\")", 
                    "170cm - (5'7\")", "173cm - (5'8\")", "175cm - (5'9\")", "178cm - (5'10\")", 
                    "180cm - (5'11\")", "183cm - (6'0\")", "185cm - (6'1\")", "188cm - (6'2\")", 
                    "191cm - (6'3\")", "193cm - (6'4\")", "195cm - (6'5\")", "198cm - (6'6\")", 
                    "201cm - (6'7\")", "203cm - (6'8\")", "205cm - (6'9\")", "208cm - (6'10\")", 
                    "210cm - (6'11\")", "213cm - (7'0\")"
                  ].map(height => (
                    <option 
                      key={height} 
                      value={height}
                      selected={formData.height === height}
                    >
                      {height}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Row>

            <Row className="m-0-responsive">
              <Col className="mt-4 pt-3 body-type-btnr" md={12}>
                <label className="labelForm">Body Type</label>
                {[
                  "Slim / Slender", "Athletic / Fit", "Average", "Curvy", "Muscular", 
                  "A few extra pounds", "Big and Beautiful", "Heavy"
                ].map(type => (
                  <Button 
                    key={type}
                    className={`formBtn all-select-btnr ${formData.bodyType === type ? "active" : ""}`} 
                    variant="primary"
                    onClick={() => handleChange("bodyType", type)}
                  >
                    <input 
                      type="radio" 
                      id={type.split(' ')[0]} 
                      name="bodyType" 
                      checked={formData.bodyType === type} 
                    />
                    <label htmlFor={type.split(' ')[0]}>{type}</label>
                  </Button>
                ))}
              </Col>
            </Row>

            <Row className="m-0-responsive">
              <Col className="mt-4 pt-3 kid-btn" md={12}>
                <label className="labelForm">Have Kids</label>
                {[
                  "No", "Yes, they live at home", 
                  "Yes, they sometimes live at home", 
                  "Yes, they live away from home"
                ].map(option => (
                  <Button 
                    key={option}
                    className={`formBtn all-select-btnr ${formData.hasKids === option ? "active" : ""}`} 
                    variant="primary"
                    onClick={() => handleChange("hasKids", option)}
                  >
                    <input 
                      type="radio" 
                      id={option.split(' ')[0]} 
                      name="kids" 
                      checked={formData.hasKids === option} 
                    />
                    <label htmlFor={option.split(' ')[0]}>{option}</label>
                  </Button>
                ))}
              </Col>
            </Row>

            <Row className="m-0-responsive">
              <Col className="mt-4 pt-3 kid-btn" md={12}>
                <label className="labelForm">Want Kids</label>
                {["Yes", "No", "Maybe", "Undecided"].map(option => (
                  <Button 
                    key={option}
                    className={`formBtn all-select-btnr ${formData.wantsKids === option ? "active" : ""}`} 
                    variant="primary"
                    onClick={() => handleChange("wantsKids", option)}
                  >
                    <input 
                      type="radio" 
                      id={`w${option}`} 
                      name="wantkids" 
                      checked={formData.wantsKids === option} 
                    />
                    <label htmlFor={`w${option}`}>{option}</label>
                  </Button>
                ))}
              </Col>
            </Row>

            <Row className="m-0-responsive here-for">
              <Col className="mt-4 pt-3 kid-btn" md={12}>
                <label className="labelForm">Here For</label>
                {["Long-term", "Short-term", "Dating", "Friendship", "Hangout Buddy"].map(option => (
                  <Button 
                    key={option}
                    className={`formBtn all-select-btnr ${formData.hereFor === option ? "active" : ""}`} 
                    variant="primary"
                    onClick={() => handleChange("hereFor", option)}
                  >
                    <input 
                      type="radio" 
                      id={option.split('-')[0]} 
                      name="hereFor" 
                      checked={formData.hereFor === option} 
                    />
                    <label htmlFor={option.split('-')[0]}>{option}</label>
                  </Button>
                ))}
              </Col>
            </Row>

            <Row className="m-0-responsive">
              <Col className="mt-4 pt-3 kid-btn" md={12}>
                <label className="labelForm">Relocate</label>
                {["No", "Yes", "Undecided"].map(option => (
                  <Button 
                    key={option}
                    className={`formBtn all-select-btnr ${formData.wouldRelocate === option ? "active" : ""}`} 
                    variant="primary"
                    onClick={() => handleChange("wouldRelocate", option)}
                  >
                    <input 
                      type="radio" 
                      id={`${option}r`} 
                      name="relocate" 
                      checked={formData.wouldRelocate === option} 
                    />
                    <label htmlFor={`${option}r`}>{option}</label>
                  </Button>
                ))}
              </Col>
            </Row>
          </div>

          <Row className="m-0-responsive">
            <Col className="mt-12 mt-5" md={12}>
              <Button type="submit" className="all-btn-round mt-4" variant="primary">
                Continue<MdOutlineArrowForward className="arrow-sign arrowba" />
              </Button>
            </Col>
          </Row>
        </form>

        <Row className="m-0-responsive">
          <hr className="hr-color mt-5"></hr>
          <p className="text-center app-p mb-0">
            <span><img src={downloadApp} alt="downloadApp" /></span>Download our app for:
          </p>
          <div className="col-md-12 text-center">
            <NavLink exact to="bout">
              <Button className="btn-app-link"> <img src={apps} alt="apps" /></Button>
            </NavLink>
            <NavLink exact to="bout">
              <Button className="btn-app-link"> <img src={appg} alt="appg" /></Button>
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

export default Basics;