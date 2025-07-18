import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Form, Button, Row, Col } from "react-bootstrap";

import background from "../assets/hero_banner_aus.webp";
import backgroundResp from "../assets/hero_banner_aus_res.webp";
import backgroundResp2 from "../assets/hero_banner_aus_res_sam.webp";
import logo from "../assets/images/Planet-2.png";

// Styled components moved outside the functional component
const Wrapper = styled.section`
  width: 100%;
  min-height: 906px;
  background: #fff url(${background});
  background-repeat: no-repeat;
  background-size: 100%;

  .onlyMob {
    display: none;
  }

  .left {
    margin-top: 5rem;
  }
  .paddingForm {
    padding: 0 25px;
  }
  .borderRad input {
    border-radius: 0px;
  }
  .borderRad select {
    border-radius: 0px;
  }
  .borderRad {
    border-radius: 0px;
  }

  .textCenter {
    text-align: center;
  }
  .form-container {
    background-color: #f5c543;
    padding: 8px 20px;
    position: relative;
    clip-path: polygon(
      80px 0,
      100% 0,
      100% calc(100% - 80px),
      calc(100% - 80px) 100%,
      0 100%,
      0 80px
    );
  }
  .form-title {
    font-size: 24px;
    font-weight: bold;
    color: #000;
    margin-bottom: 20px;
    text-align: center;
  }
  .form-control {
    margin-bottom: 15px;
    border-radius: 5px;
    border: none;
    padding: 12px;
    width: 100%;
  }
  .submit-button {
    background-color: #152a68;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 12px 20px;
    font-size: 18px;
    font-weight: bold;
    width: 100%;
    cursor: pointer;
  }
  .error-message {
    color: red;
    font-size: 12px;
    margin-bottom: 10px;
  }
  .logo {
    width: 240px;
    padding: 1rem;
    top: 20px;
    left: 20px;
    z-index: 1000;
  }
  .bannerCont {
    width: 100%;
    display: flex;
    padding-left: 100px;
    gap: 100px;
    padding-right: 100px !important;
    padding-top: 80px;
  }
  .left .l1 {
    font-size: 5vw;
    font-weight: 400;
    color: white;
    margin-bottom: 1rem;
    top: -2rem;
    font-family: "Montserrat", sans-serif;
    position: relative;
    left: -1rem;
  }
  .left .l2 {
    font-size: 3vw;
    font-weight: 600;
    color: white;
    line-height: 4vw;
    margin-bottom: 0px;
    font-family: "Poppins", sans-serif;
    position: relative;
    left: -1rem;
    top: -2rem;
    text-shadow: -2px 2px 2px #f5c543;
  }
  .left .l3 {
    font-size: 69px;
    font-weight: 800;
    color: #f7cb3b;
    margin-bottom: 0px;
    width: max-content;
  }

  .lresp1,
  .lresp2 {
    display: none;
  }
  .right .form {
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .form .form_h2 {
    font-weight: bold;
    font-size: 19px;
    padding-top: 35px;
    text-align: center;
  }
  .margin-bottom {
    margin-bottom: 10px;
  }
  .formButton {
    font-size: 16px;
  }
  .fntSize {
    font-size: 13px;
  }

  @media (max-width: 450px) {
    min-height: 810px;
    background-image: url(${backgroundResp});
    background-size: 100%;
    object-fit: cover;
    .hideMob {
      display: none;
    }
    .onlyMob {
      display: block;
    }
    .paddingForm {
      padding: 0;
    }

    .logo {
      display: none;
    }

    .fntSize {
      font-size: 11px;
    }
    .lresp1,
    .lresp2 {
      display: block;
    }
    .lresp1 {
      font-size: 26px;
      font-weight: 400;
      color: white;
      margin-bottom: 0px;
      text-align: center;
    }
    .lresp2 {
      font-size: 2rem;
      font-weight: 700;
      color: #f7cb3b;
      line-height: 42px;
      text-align: center;
    }
    .l1,
    .l2,
    .l3 {
      display: none;
    }
    .bannerCont {
      flex-direction: column;
      padding-left: 0px;
      gap: 20px !important;
      justify-content: center;
      padding-right: 0px !important;
      align-items: center;
    }

    .right {
      padding: 0 20px;
      max-width: 350px;
      width: 100%;
    }

    .overrideWidth {
      width: 100% !important;
    }

    .logo {
      width: 250px;
      padding: 0.5rem;
    }

    .form .form_h2 {
      font-weight: bold;
      font-size: 18px;
      padding-top: 32px;
      text-align: center;
    }
  }

  @media (max-width: 400px) {
    .bannerCont {
      margin-top: 0px;
    }
  }
  @media (max-width: 1450px) {
    .left .l3 {
      font-size: 61px;
    }
    .bannerCont {
      gap: 180px;
    }
    .l3 {
      width: max-content;
    }
  }
  @media (min-width: 1600px) {
    min-height: 1132px;
    .bannerCont {
      width: 100%;
      display: flex;
      gap: 340px;
      padding-top: 50px;
    }
    .form {
      margin-right: 40px;
    }
    .right {
      margin-left: -75px;
    }
    .overrideWidth {
      width: 100%;
    }

    @media (min-width: 780px) {
      .overrideWidth {
        padding-top: 14rem !important;
      }
    }

    .left .l3 {
      font-size: 79px;
      font-weight: 800;
      color: #f7cb3b;
    }
    .form .form_h2 {
      font-weight: 700;
      font-size: 23px;
    }
    .formButton {
      font-size: 20px;
    }
    .fntSize {
      font-size: 16px;
    }
  }

  @media (max-width: 400px) {
    background-image: url(${backgroundResp2}) !important;
  }

  @media (min-width: 450px) and (max-width: 768px) {
    min-height: 610px;
    background-image: url(${backgroundResp});
    background-size: 100%;
    object-fit: cover;
    .bannerCont {
      flex-direction: column;
      padding-left: 0px;
      gap: 20px !important;
      justify-content: center;
      align-items: center;
    }

    .logo {
      display: none;
    }

    .lresp1,
    .lresp2 {
      display: block;
      text-align: center;
    }
    .l1,
    .l2,
    .l3 {
      display: none;
    }

    .form-row {
      justify-content: center;
    }
    .lresp1 {
      font-size: 33px;
      margin-bottom: 0px;
      color: white;
    }
    .lresp2 {
      font-size: 48px;
      font-weight: 700;
      color: #f7cb3b;
      line-height: 42px;
      text-align: center;
    }
    .right {
      margin-bottom: 15px;
      max-width: 400px;
      width: 100%;
    }

    .overrideWidth {
      width: 100% !important;
    }
  }
  @media (min-width: 575px) and (max-width: 650px) {
    .overrideWidth {
      width: 72%;
    }
  }
  @media (min-width: 650px) and (max-width: 768px) {
    .overrideWidth {
      width: 61%;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .overrideWidth {
      width: 61%;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    min-height: 610px;
    background-image: url(${backgroundResp});
    background-size: 100%;
    object-fit: cover;
    padding-bottom: 4rem;
    .bannerCont {
      flex-direction: column;
      padding-left: 0px;
      gap: 20px !important;
      justify-content: center;
      align-items: center;
    }

    .logo {
      display: none;
    }

    .lresp1,
    .lresp2 {
      display: block;
      text-align: center;
    }
    .l1,
    .l2,
    .l3 {
      display: none;
    }

    .form-row {
      justify-content: center;
    }
    .lresp1 {
      font-size: 33px;
      margin-bottom: 0px;
      color: white;
    }
    .lresp2 {
      font-size: 48px;
      font-weight: 700;
      color: #f7cb3b;
      line-height: 42px;
      text-align: center;
    }
    .right {
      margin-bottom: 15px;
      max-width: 450px;
      width: 100%;
    }

    .overrideWidth {
      width: 100% !important;
    }
  }
  @media (min-width: 1024px) and (max-width: 1150px) {
    min-height: 625px;

    .overrideWidth {
      width: 90%;
    }

    .left .l3 {
      font-size: 34px;
      font-weight: 800;
      color: #f7cb3b;
      margin-bottom: 0px;
      width: max-content;
    }

    .form-control {
      margin-bottom: 13px;
      border: none;
      padding: 7px;
      width: 100%;
    }
  }
  @media (min-width: 1150px) and (max-width: 1330px) {
    min-height: 701px;

    .overrideWidth {
      width: 90%;
    }

    .left .l3 {
      font-size: 42px;
      font-weight: 800;
      color: #f7cb3b;
      margin-bottom: 0px;
      width: max-content;
    }

    .form-control {
      margin-bottom: 13px;
      border: none;
      padding: 7px;
      width: 100%;
    }
  }
  @media (min-width: 1330px) and (max-width: 1440px) {
    min-height: 800px;

    .overrideWidth {
      width: 90%;
    }

    .left .l3 {
      font-size: 52px;
      font-weight: 800;
      color: #f7cb3b;
      margin-bottom: 0px;
      width: max-content;
    }
  }
  @media (width: 1024px) {
    .overrideWidth {
      width: 50%;
    }
  }

  .flag {
    display: none;
  }

  @media only screen and (max-width: 1024px) {
    .flag {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .left {
      margin-top: 0rem;
    }
  }

  @media (min-width: 320px) and (max-width: 374px) {
    .hPmNGO .logimg-div img {
      width: 20vw !important;
    }
  }
  .text_abroad {
    background: #f5c543;
    padding: 0 1rem;
  }
`;

const BannerContainer = styled.div`
  display: flex;
  padding-left: 100px;
  gap: 100px;
  padding-right: 100px !important;
  min-height: 100vh;
  justify-content: flex-end;

  @media (max-width: 768px) {
    min-height: 1366px;
    margin-bottom: -20rem;
  }

  @media screen and (min-width: 600x) {
    justify-content: flex-end !important;
  }
`;

// Add this function outside your component
const getUtmParams = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    source: urlParams.get("utm_source") || "Landing Page",
    medium: urlParams.get("utm_medium") || "",
    campaign: urlParams.get("utm_campaign") || "",
  };
};

const LandingBanner = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    phone: "",
    currentCity: "",
    preferredStudyDestination: "Australia",
    currentLevelOfEducation: "",
    languageTestTaken: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  });

  // Validation functions
  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  // Get UTM parameters when component mounts
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setFormData((prevState) => ({
      ...prevState,
      utm_source: urlParams.get("utm_source") || "",
      utm_medium: urlParams.get("utm_medium") || "",
      utm_campaign: urlParams.get("utm_campaign") || "",
      utm_term: urlParams.get("utm_term") || "",
      utm_content: urlParams.get("utm_content") || "",
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear previous error for this field
    setErrors((prev) => ({ ...prev, [name]: "" }));

    // Validation logic for each field
    switch (name) {
      case "Name":
        if (value && !validateName(value)) {
          setErrors((prev) => ({
            ...prev,
            Name: "Only letters and spaces are allowed",
          }));
          return; // Don't update the value if invalid
        }
        break;

      case "phone":
        // Prevent non-numeric input
        if (value && !/^\d*$/.test(value)) {
          return;
        }

        // Check first digit if entering first number
        if (
          value.length === 1 &&
          (parseInt(value) < 6 || parseInt(value) > 9)
        ) {
          setErrors((prev) => ({
            ...prev,
            phone: "Phone number must start with 6-9",
          }));
          return;
        }

        // Limit to 10 digits
        if (value.length > 10) {
          return;
        }

        // Validate complete phone number
        if (value.length === 10 && !validatePhone(value)) {
          setErrors((prev) => ({
            ...prev,
            phone: "Please enter a valid 10-digit phone number",
          }));
        }
        break;

      case "email":
        // Don't show email error while typing
        break;

      case "currentCity":
        if (value && !validateName(value)) {
          setErrors((prev) => ({
            ...prev,
            currentCity: "Only letters and spaces are allowed for city",
          }));
          return; // Don't update the value if invalid
        }
        break;

      case "preferredStudyDestination":
        if (!value) {
          setErrors((prev) => ({
            ...prev,
            preferredStudyDestination:
              "Please select your preferred study destination",
          }));
        }
        break;

      case "currentLevelOfEducation":
        if (!value) {
          setErrors((prev) => ({
            ...prev,
            currentLevelOfEducation:
              "Please select your current level of education",
          }));
        }
        break;

      case "languageTestTaken":
        if (!value) {
          setErrors((prev) => ({
            ...prev,
            languageTestTaken: "Please select your language test status",
          }));
        }
        break;

      default:
        break;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add handleBlur for email validation
  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (name === "email" && value) {
      if (!validateEmail(value)) {
        setErrors((prev) => ({
          ...prev,
          email: "Please enter a valid email address",
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const newErrors = {};

    if (!formData.Name || !validateName(formData.Name)) {
      newErrors.Name = "Please enter a valid name (letters only)";
    }

    if (!formData.phone || !validatePhone(formData.phone)) {
      newErrors.phone =
        "Please enter a valid 10-digit phone number starting with 6-9";
    }

    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.currentCity) {
      newErrors.currentCity = "Please enter your current city";
    } else if (!validateName(formData.currentCity)) {
      newErrors.currentCity =
        "Current city can only contain letters and spaces";
    }

    if (!formData.preferredStudyDestination) {
      newErrors.preferredStudyDestination =
        "Please select your preferred study destination";
    }

    if (!formData.currentLevelOfEducation) {
      newErrors.currentLevelOfEducation =
        "Please select your current level of education";
    }

    if (!formData.languageTestTaken) {
      newErrors.languageTestTaken = "Please select your language test status";
    }

    // If there are any errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Send to PHP endpoint only
      await fetch("https://stealthlearn.in/studyAbroad/planetnew_CRM.php", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: formData.Name,
          email: formData.email,
          phone: formData.phone,
          current_city: formData.currentCity,
          preferred_study_destination: formData.preferredStudyDestination,
          current_level_of_education: formData.currentLevelOfEducation,
          language_test_taken: formData.languageTestTaken,
          utm_source: formData.utm_source,
          utm_medium: formData.utm_medium,
          utm_campaign: formData.utm_campaign,
          utm_term: formData.utm_term,
          utm_content: formData.utm_content,
          submission_url: window.location.href,
          referrer: document.referrer || "",
        }),
      });

      // Redirect to thank you page
      window.location.href = "/thankyou.html";
    } catch (error) {
      console.error("Error:", error);
      // Even if there's an error, we'll still redirect to thank you page
      // since the form submission might have gone through
      window.location.href = "/thankyou.html";
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Wrapper>
      <div className="catch">
        <img className="logo" src={logo} alt="Logo" />
        <BannerContainer className="bannerCont">
          <div className="right">
            <div className="form">
              <Row className="form-row">
                <Col
                  className="overrideWidth w-100"
                  xs={10}
                  sm={6}
                  md={6}
                  lg={6}
                  xl={12}
                >
                  <div className="form-container">
                    <h2 className="form_h2 paddingForm">Register Now</h2>
                    <Form
                      className="textCenter paddingForm"
                      onSubmit={handleSubmit}
                    >
                      {Object.keys(errors).map(
                        (key) =>
                          errors[key] && (
                            <p key={key} className="error-message">
                              {errors[key]}
                            </p>
                          )
                      )}

                      <Form.Group
                        controlId="formName"
                        className="margin-bottom borderRad"
                      >
                        <Form.Control
                          className="fntSize"
                          type="text"
                          placeholder="Name"
                          name="Name"
                          value={formData.Name}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>

                      <Form.Group
                        controlId="formEmail"
                        className="margin-bottom borderRad"
                      >
                        <Form.Control
                          className="fntSize"
                          type="email"
                          placeholder="Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                        />
                      </Form.Group>

                      <Form.Group
                        controlId="formPhone"
                        className="margin-bottom borderRad"
                      >
                        <Form.Control
                          className="fntSize"
                          type="tel"
                          placeholder="Phone Number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>

                      <Form.Group
                        controlId="formCurrentCity"
                        className="margin-bottom borderRad"
                      >
                        <Form.Control
                          className="fntSize"
                          type="text"
                          placeholder="Current City"
                          name="currentCity"
                          value={formData.currentCity}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>

                      <Form.Group
                        controlId="formCurrentLevelOfEducation"
                        className="margin-bottom borderRad"
                      >
                        <Form.Control
                          className="fntSize"
                          as="select"
                          name="currentLevelOfEducation"
                          value={formData.currentLevelOfEducation}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Current Level of Education</option>
                          <option value="12th Pass">12th Pass</option>
                          <option value="Graduate">Graduate</option>
                          <option value="Post Graduate">Post Graduate</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Group
                        controlId="formLanguageTestTaken"
                        className="margin-bottom borderRad"
                      >
                        <Form.Control
                          className="fntSize"
                          as="select"
                          name="languageTestTaken"
                          value={formData.languageTestTaken}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Any Language Test Taken?</option>
                          <option value="IELTS">IELTS</option>
                          <option value="TOEFL">TOEFL</option>
                          <option value="PTE">PTE</option>
                          <option value="Duolingo">Duolingo</option>
                          <option value="Others">Others</option>
                          <option value="None">None</option>
                        </Form.Control>
                      </Form.Group>

                      <Button
                        variant="primary"
                        type="submit"
                        className="margin-bottom formButton borderRad"
                        style={{
                          backgroundColor: "#152A68",
                          borderColor: "#152A68",
                        }}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Register Now"}
                      </Button>
                    </Form>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </BannerContainer>
      </div>
    </Wrapper>
  );
};

export default LandingBanner;
