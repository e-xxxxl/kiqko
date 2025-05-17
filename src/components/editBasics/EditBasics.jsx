import React, { useState } from "react";
import CommonLayout from "../../layouts/Common";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import "./editBasics.css";
import shape from "../../assets/images/shape2.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";

import settingView from "../../assets/images/myProfile.png";
import settingEdit from "../../assets/images/editPofile.png";
import settingUpload from "../../assets/images/updateLocation.png";
import settingReset from "../../assets/images/resetPassword.png";
import settingHide from "../../assets/images/hideProfile.png";
import settingDelete from "../../assets/images/deleteAccount.png";
import settingLogout from "../../assets/images/logout.png";
import manageMedia from "../../assets/images/manageMedia.png";
import viewedMe from "../../assets/images/viewedMe.png";
import myLikes from "../../assets/images/myLikes.png";
import likesMe from "../../assets/images/likesMe.png";
import homea from "../../assets/images/homea.png";
import liveicon from "../../assets/images/liveicon.png";
import yourm from "../../assets/images/yourm.png";
import blockedUsers from "../../assets/images/blockedUsers.png";
import serr from "../../assets/images/serr.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
const EditBasics = () => {
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
    age: "19", // Add this line with a default value
    bodyType: "",
    hasKids: "",
    wantsKids: "",
    hereFor: "",
    wouldRelocate: "",
  });
  const userId = localStorage.getItem("userId");

  const history = useHistory();
  const [loading, setLoading] = useState(true);

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
      `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`
    );

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
        history.push("/profile");
      }
    } catch (err) {
      console.error("Error updating profile:", err);
    }
  };

  // if (loading) return <div>Loading...</div>;

  return (
    <CommonLayout>
      <section className="all-top-shape">
        <img src={shape} alt="shape" />
      </section>
      <div className="all-container">
        <div className="pr pb-5 mb-5">
          <div className="page-wrapper-all">
            <Container>
              <Row>
                <Col md={3}>
                  <div className="left-panel-allpages mar-top-left">
                    <div className="top-user-id text-center">
                      <div className="online-user-all">
                        <h5 className="border-h5">Users Online Now</h5>
                        <div className="online-user-status border-right-online">
                          <h6>Women</h6>
                          <h4>1234</h4>
                        </div>
                        <div className="online-user-status">
                          <h6>men</h6>
                          <h4>1565</h4>
                        </div>
                      </div>
                    </div>

                    <div className="user-type-left">
                      <ul className="list-user-type left-nav">
                        <li>
                          <NavLink exact to="/profile" activeClassName="active">
                            <img src={homea} alt="homea" />
                            Home
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            exact
                            to="/search-results"
                            activeClassName="active"
                          >
                            <img src={serr} alt="liveicon" />
                            Search Results
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            exact
                            to="/live-users"
                            activeClassName="active"
                          >
                            <img src={liveicon} alt="liveicon" />
                            Live Users
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            exact
                            to="/who-viewed-you"
                            activeClassName="active"
                          >
                            <img src={viewedMe} alt="viewedMe" />
                            Who Viewed Me
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            exact
                            to="/who-likes-you"
                            activeClassName="active"
                          >
                            <img src={myLikes} alt="myLikes" />
                            Who Likes Me
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            exact
                            to="/my-likes"
                            activeClassName="active"
                          >
                            <img src={likesMe} alt="likesMe" />
                            My Likes
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            exact
                            to="/your-matches"
                            activeClassName="active"
                          >
                            <img src={yourm} alt="likesMe" />
                            Your Matches
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            exact
                            to="/blocked-users"
                            activeClassName="active"
                          >
                            <img src={blockedUsers} alt="blockedUsers" />
                            Blocked Users
                          </NavLink>
                        </li>
                        <li>
                          <NavLink exact to="/profile" activeClassName="active">
                            {" "}
                            <img src={settingView} alt="settingView" />
                            View Profile
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            exact
                            to="/edit-basics"
                            activeClassName="active"
                          >
                            {" "}
                            <img src={settingEdit} alt="settingEdit" />
                            Edit Profile{" "}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            exact
                            to="/manage-media"
                            activeClassName="active"
                          >
                            <img src={manageMedia} alt="manageMedia" />
                            Manage Media
                          </NavLink>
                        </li>
                        <li>
                          <NavLink exact to="/reset-password">
                            <img src={settingReset} alt="settingReset" />
                            Reset Password
                          </NavLink>
                        </li>
                        <li>
                          <NavLink exact to="/update-location">
                            <img src={settingUpload} alt="settingUpload" />
                            Update Location
                          </NavLink>
                        </li>
                        <li>
                          <NavLink exact to="/hide-profile">
                            <img src={settingHide} alt="settingHide" />
                            Hide Profile
                          </NavLink>
                        </li>
                        <li>
                          <NavLink exact to="/delete-account">
                            <img src={settingDelete} alt="settingDelete" />
                            Delete Account
                          </NavLink>
                        </li>
                        <li>
                          <NavLink exact to="/logout">
                            <img src={settingLogout} alt="settingLogout" />
                            Logout
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col md={9}>
             


                  <div className="profile-main-part-area-inner bg-all-pages p-4">
                    <Col xs={12} className="mb-4 text-center">
                      <h4 className="text-primary fw-bold">
                        Edit Profile Details
                      </h4>
                      <p className="text-muted">
                        Complete your profile to improve your matches
                      </p>
                    </Col>

                    <div className="page-wrapper-all">
                      <div className="pageWrapper-inner mt-3 mt-md-4 basic-page basic-page-full">
                        <form
                          onSubmit={handleSubmit}
                          className="needs-validation"
                          noValidate
                        >
                          {/* Personal Information Section */}
                          <div className="card mb-4 border-0 shadow-sm">
                            <div className="card-header bg-light">
                              <h5 className="mb-0 text-primary">
                                Personal Information
                              </h5>
                            </div>
                            <div className="card-body">
                              {/* Gender Selection */}
                              <div className="mb-4">
                                <label className="form-label fw-semibold">
                                  I am a
                                </label>
                                <div className="d-flex flex-wrap gap-3">
                                  {["Woman", "Man"].map((gender) => (
                                    <div
                                      key={gender}
                                      className="form-check form-check-inline"
                                    >
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        id={gender}
                                        checked={formData.gender === gender}
                                        onChange={() =>
                                          handleChange("gender", gender)
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={gender}
                                      >
                                        {gender}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Birthday Selection */}
                              <div className="mb-4">
                                <label className="form-label fw-semibold">
                                  Birthday
                                </label>
                                <div className="row g-3">
                                  <div className="col-md-4">
                                    <Form.Select
                                      className="form-select-lg"
                                      value={formData.birthDate.month}
                                      onChange={(e) =>
                                        handleBirthdayChange(
                                          "month",
                                          e.target.value
                                        )
                                      }
                                      required
                                    >
                                      <option value="">Month</option>
                                      {Array.from({ length: 12 }, (_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                          {new Date(0, i).toLocaleString(
                                            "default",
                                            { month: "long" }
                                          )}
                                        </option>
                                      ))}
                                    </Form.Select>
                                  </div>
                                  <div className="col-md-4">
                                    <Form.Select
                                      className="form-select-lg"
                                      value={formData.birthDate.day}
                                      onChange={(e) =>
                                        handleBirthdayChange(
                                          "day",
                                          e.target.value
                                        )
                                      }
                                      required
                                    >
                                      <option value="">Day</option>
                                      {Array.from({ length: 31 }, (_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                          {i + 1}
                                        </option>
                                      ))}
                                    </Form.Select>
                                  </div>
                                  <div className="col-md-4">
                                    <Form.Select
                                      className="form-select-lg"
                                      value={formData.birthDate.year}
                                      onChange={(e) =>
                                        handleBirthdayChange(
                                          "year",
                                          e.target.value
                                        )
                                      }
                                      required
                                    >
                                      <option value="">Year</option>
                                      {Array.from({ length: 100 }, (_, i) => {
                                        const year =
                                          new Date().getFullYear() - i;
                                        return (
                                          <option key={year} value={year}>
                                            {year}
                                          </option>
                                        );
                                      })}
                                    </Form.Select>
                                  </div>
                                </div>
                              </div>

                              {/* Ethnicity Selection */}
                              <div className="mb-4">
                                <label className="form-label fw-semibold">
                                  Ethnicity
                                </label>
                                <div className="d-flex flex-wrap gap-2">
                                  {[
                                    "White / Caucasian",
                                    "Asian",
                                    "Black / African Descent",
                                    "Latino / Hispanic",
                                    "North American",
                                    "East Indian",
                                    "Pacific Islander",
                                    "Middle Eastern",
                                    "Mixed Race",
                                    "Other Race",
                                  ].map((race) => (
                                    <div key={race} className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        id={race.replace(/\s+/g, "")}
                                        checked={formData.ethnicity === race}
                                        onChange={() =>
                                          handleChange("ethnicity", race)
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={race.replace(/\s+/g, "")}
                                      >
                                        {race}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Physical Attributes Section */}
                          <div className="card mb-4 border-0 shadow-sm">
                            <div className="card-header bg-light">
                              <h5 className="mb-0 text-primary">
                                Physical Attributes
                              </h5>
                            </div>
                            <div className="card-body">
                              <div className="row g-4">
                                {/* Height */}
                                <div className="col-md-6">
                                  <label className="form-label fw-semibold">
                                    Height
                                  </label>
                                  <Form.Select
                                    className="form-select-lg"
                                    value={formData.height}
                                    onChange={(e) =>
                                      handleChange("height", e.target.value)
                                    }
                                  >
                                    {[
                                      "150cm - (4'11\")",
                                      "152cm - (5'0\")",
                                      "155cm - (5'1\")",
                                      "157cm - (5'2\")",
                                      "160cm - (5'3\")",
                                      "163cm - (5'4\")",
                                      "165cm - (5'5\")",
                                      "168cm - (5'6\")",
                                      "170cm - (5'7\")",
                                      "173cm - (5'8\")",
                                      "175cm - (5'9\")",
                                      "178cm - (5'10\")",
                                      "180cm - (5'11\")",
                                      "183cm - (6'0\")",
                                      "185cm - (6'1\")",
                                      "188cm - (6'2\")",
                                      "191cm - (6'3\")",
                                      "193cm - (6'4\")",
                                      "195cm - (6'5\")",
                                      "198cm - (6'6\")",
                                      "201cm - (6'7\")",
                                      "203cm - (6'8\")",
                                      "205cm - (6'9\")",
                                      "208cm - (6'10\")",
                                      "210cm - (6'11\")",
                                      "213cm - (7'0\")",
                                    ].map((height) => (
                                      <option key={height} value={height}>
                                        {height}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </div>

                                {/* Age */}
                                <div className="col-md-6">
                                  <label className="form-label fw-semibold">
                                    Age
                                  </label>
                                  <Form.Select
                                    className="form-select-lg"
                                    value={formData.age}
                                    onChange={(e) =>
                                      handleChange("age", e.target.value)
                                    }
                                  >
                                    {Array.from(
                                      { length: 82 },
                                      (_, i) => i + 19
                                    ).map((age) => (
                                      <option key={age} value={age.toString()}>
                                        {age}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </div>

                                {/* Body Type */}
                                <div className="col-12">
                                  <label className="form-label fw-semibold">
                                    Body Type
                                  </label>
                                  <div className="d-flex flex-wrap gap-3">
                                    {[
                                      "Slim / Slender",
                                      "Athletic / Fit",
                                      "Average",
                                      "Curvy",
                                      "Muscular",
                                      "A few extra pounds",
                                      "Big and Beautiful",
                                      "Heavy",
                                    ].map((type) => (
                                      <div key={type} className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          id={type.replace(/\s+/g, "")}
                                          checked={formData.bodyType === type}
                                          onChange={() =>
                                            handleChange("bodyType", type)
                                          }
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor={type.replace(/\s+/g, "")}
                                        >
                                          {type}
                                        </label>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Lifestyle Section */}
                          <div className="card mb-4 border-0 shadow-sm">
                            <div className="card-header bg-light">
                              <h5 className="mb-0 text-primary">Lifestyle</h5>
                            </div>
                            <div className="card-body">
                              {/* Marital Status */}
                              <div className="mb-4">
                                <label className="form-label fw-semibold">
                                  Marital Status
                                </label>
                                <div className="d-flex flex-wrap gap-3">
                                  {[
                                    "Single",
                                    "Divorced",
                                    "Separated",
                                    "Widowed",
                                    "Attached",
                                  ].map((status) => (
                                    <div key={status} className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        id={status}
                                        checked={
                                          formData.maritalStatus === status
                                        }
                                        onChange={() =>
                                          handleChange("maritalStatus", status)
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={status}
                                      >
                                        {status}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Children */}
                              <div className="row g-4">
                                <div className="col-md-6">
                                  <label className="form-label fw-semibold">
                                    Have Kids
                                  </label>
                                  <div className="d-flex flex-column gap-2">
                                    {[
                                      "No",
                                      "Yes, they live at home",
                                      "Yes, they sometimes live at home",
                                      "Yes, they live away from home",
                                    ].map((option) => (
                                      <div key={option} className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          id={option.replace(/\s+/g, "")}
                                          checked={formData.hasKids === option}
                                          onChange={() =>
                                            handleChange("hasKids", option)
                                          }
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor={option.replace(/\s+/g, "")}
                                        >
                                          {option}
                                        </label>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div className="col-md-6">
                                  <label className="form-label fw-semibold">
                                    Want Kids
                                  </label>
                                  <div className="d-flex flex-column gap-2">
                                    {["Yes", "No", "Maybe", "Undecided"].map(
                                      (option) => (
                                        <div
                                          key={option}
                                          className="form-check"
                                        >
                                          <input
                                            className="form-check-input"
                                            type="radio"
                                            id={`w${option}`}
                                            checked={
                                              formData.wantsKids === option
                                            }
                                            onChange={() =>
                                              handleChange("wantsKids", option)
                                            }
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor={`w${option}`}
                                          >
                                            {option}
                                          </label>
                                        </div>
                                      )
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Relationship Preferences Section */}
                          <div className="card mb-4 border-0 shadow-sm">
                            <div className="card-header bg-light">
                              <h5 className="mb-0 text-primary">
                                Relationship Preferences
                              </h5>
                            </div>
                            <div className="card-body">
                              {/* Here For */}
                              <div className="mb-4">
                                <label className="form-label fw-semibold">
                                  Looking For
                                </label>
                                <div className="d-flex flex-wrap gap-3">
                                  {[
                                    "Long-term",
                                    "Short-term",
                                    "Dating",
                                    "Friendship",
                                    "Hangout Buddy",
                                  ].map((option) => (
                                    <div key={option} className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        id={option.replace(/\s+/g, "")}
                                        checked={formData.hereFor === option}
                                        onChange={() =>
                                          handleChange("hereFor", option)
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={option.replace(/\s+/g, "")}
                                      >
                                        {option}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Relocate */}
                              <div className="mb-4">
                                <label className="form-label fw-semibold">
                                  Willing to Relocate
                                </label>
                                <div className="d-flex flex-wrap gap-3">
                                  {["No", "Yes", "Undecided"].map((option) => (
                                    <div key={option} className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        id={`${option}r`}
                                        checked={
                                          formData.wouldRelocate === option
                                        }
                                        onChange={() =>
                                          handleChange("wouldRelocate", option)
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`${option}r`}
                                      >
                                        {option}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Submit Button */}
                          <div className="text-center mt-4">
                            <Button
                              type="submit"
                              className="btn-primary px-5 py-3 fw-bold"
                              size="lg"
                            >
                              Save Profile Changes
                            </Button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* );
}; */}
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default EditBasics;
