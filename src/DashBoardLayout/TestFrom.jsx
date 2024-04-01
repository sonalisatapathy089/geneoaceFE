import { Button, Grid, Select, TextField } from "@mui/material";
import React, { useEffect, useState ,useRef} from "react";
import genespaceLogo from "../images/gp_logo.png";
import "./TestForm.css";
import MenuItem from '@mui/material/MenuItem';

const TestFrom = () => {
  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    console.log("validform", valid);
    return valid;
  };
  const initialValues = {
    firstName: "",middleName: "", lastName: "",
    state: "",dob: "",address: "",city: "",country: "",state: "",zip: "",phone: "", email: "",
    gender: "MALE", ethnicity: "Hispanic",race: "White",clinicName: "",uniqueCode: "",
    relation: "self",insuranceinfo: "Individual Paid",PhysicianName: "",phyList: "",npinum: "",
    emailOfProvider: "",DiagnosisCode: "",selectedDCodeList: "",SpecimenType:"",testCode:"",
    progressNote:"",collectorName:"",patientNote:"",barCodeAcess:"no",
    patientConsent:"yes",requesterEmail:"",date:"",
    pPolicyNo:"",payerCode:"",pCompanyName:"",pCompanyAddress:"",pCity:"",pState:"",pCompanyZipCode:"",relationShip:"",
    sPolicyNo:"",spayerCode:"",sCompanyName:"",sCompanyAddress:"",sCity:"",sState:"",sCompanyZipCode:"",srelationShip:"",
  };
  const errorsField = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const options = [
    { value: "state1", text: "state1" },
    { value: "state2", text: "state2" },
    { value: "state3", text: "state3 " },
  ];
  const diagnosisCodeList = [
    { value: "d1", label: "D1" },
    { value: "d2", label: "D2" },
    { value: "d3", label: "D3" },
    { value: "d4", label: "D4" },
    { value: "d5", label: "D5" },
  ];
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(errorsField);
  const [submitting, setSubmitting] = useState(false);
  const [date, setDate] = useState("");
  const [insuranceImgs, setinsuranceImgs] = useState([])
  const [imagesPath, setImgsPath] = useState([])
  const [images,setImages]= useState([])
  
  const handelAddImgs =()=>{
    console.log("add images", insuranceImgs);
    const newImgs = [...insuranceImgs,genespaceLogo];
    setinsuranceImgs(newImgs)
  }
  const handelRemovedImages = (index)=>{
    const updateImgs = [...insuranceImgs];
    updateImgs.splice(index,1)
    setinsuranceImgs(updateImgs)
  }
  const handelImageChange =(e)=>{
    if (e.target.files && e.target.files.length >0) {
      // const files = Array.from(e.target.files);
      // const imgUrls = files.map((file)=>{URL.createObjectURL(file)}) 
      // console.log(files[0].name, imgUrls);
      const fileList = e.target.files;
      const selectedPaths = Array.from(fileList).map(file => URL.createObjectURL(file));
      setImgsPath(selectedPaths);
      const imageUrls = Array.from(fileList).map(file => ({ url: URL.createObjectURL(file), file: file }));
      setImages(imageUrls);
      console.log("imagesPath", imagesPath);
    }

   
  }
  const onDateHandeler =()=>{
    console.log("date", Date.now());
    setDate( new Date().toLocaleString())
  }

  const handleInputChange = (e) => {
    console.log("hiii", e.target.name);
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        errors.firstName =
          value.length < 3
            ? "First Name should contain atleast 3 characters!"
            : "";
        console.log("valLength", value.length);
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      default:
        break;
    }
    setValues({
      ...values,
      [name]: value,
    });
    // setValues({[name]:e.target.value})
    console.log("after change", value);
  };

  const onSubmitHandeler = (e) => {
    console.log("val", values);
    console.log(e);
    e.preventDefault();
    // setErrors(validateValues(values));
    // (errors)?(setSubmitting(false)):( setSubmitting(true))
    // console.log("submitting",  submitting);
    console.log("error befo", errors);
    if (validateForm(errors)) {
      console.info("Valid Form", errors);
    } else {
      console.error("Invalid Form", errors);
    }
  };

  return (
    <Grid fluid spacing={0} sx={{ backgroundColor: "#fff", margin: "2%" }}>
      <form onSubmit={onSubmitHandeler}>
        <Grid xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Grid sx={{ margin: " 1% 4%" }}>
            <img src={genespaceLogo} alt={"GeneSpace"} />
          </Grid>
          <Grid sx={{ marginRight: "2%"}}>
            <p className="headingContent">GenePace Laboratories,</p>
            <p className="headingContent">1210 Waterway Blvd,</p>
            <p className="headingContent">Indianapolis, IN 46202</p>
            <p>www.genepace.com</p>
          </Grid>
        </Grid>
        <Grid fluid spacing={0} md={12} className="borderLayout" sx={{ margin: "1%" }}>
          <Grid container xs={12} className="borderBottom" sx={{ paddingLeft: "3%" ,backgroundColor:"#43a2b2", color:"#fff"}}>
            <p>PATIENT/INDIVIDUAL/EMPLOYEE INFORMATION</p>
          </Grid>

          {/* 1st input field  */}
          <Grid container>
            <Grid
              xs={12}
              md={4}
              className="borderRight borderBottom "
              padding={1}
            >
              <input
                type="text"
                className="inputStyle"
                name="firstName"
                label="firstName"
                placeholder="First Name"
                value={values.firstName}
                // required
                onChange={handleInputChange}
              />
              {errors.firstName.length > 0 && (
                <span className="error">{errors.firstName}</span>
              )}
            </Grid>
            <Grid
              xs={12}
              md={3}
              name="mdName"
              className="borderRight borderBottom"
              padding={1}
            >
              <input
                type="text"
                className="inputStyle"
                name="middleName"
                label="middleName"
                placeholder="Middle Name"
                value={values.middleName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid xs={12} md={5} padding={1} className="borderBottom">
              <input
                type="text"
                className="inputStyle"
                name="lastName"
                label="lastName"
                placeholder="Last Name"
                // required
                value={values.lastName}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          {/* 2nd input field  */}
          <Grid container>
            <Grid
              xs={12}
              md={5}
              className="borderRight borderBottom"
              padding={1}
            >
              {/* <input placeholder="Date of Birth" type="text" className='inputStyle' label="dob"  onfocus="(this.type='date')" onblur="(this.type='text')"
                /> */}
              <input
                type="text"
                className="inputStyle"
                placeholder="Date of Birth"
                // required
                name="dob"
                value={values.dob}
                onChange={handleInputChange}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
            </Grid>

            <Grid xs={12} md={7} className=" borderBottom" padding={1}>
              <input
                type="text"
                className="inputStyle"
                label="address"
                placeholder="Address"
                name="address"
                value={values.address}
                // required
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          {/* 3rd input field  */}
          <Grid container>
            <Grid
              xs={12}
              md={5}
              className="borderRight borderBottom"
              padding={1}
            >
              <input
                type="text"
                className="inputStyle"
                label="city"
                placeholder="City"
                name="city"
                value={values.city}
                // required
                onChange={handleInputChange}
              />
            </Grid>
            <Grid
              xs={12}
              md={3.5}
              className="borderRight borderBottom"
              padding={1}
            >
              <input
                type="text"
                className="inputStyle"
                label="country"
                placeholder="Country"
                name="country"
                value={values.country}
                // required
                onChange={handleInputChange}
              />
            </Grid>
            <Grid xs={12} md={3.5} className="borderBottom" padding={1}>
              {/* <input type="text" className='inputStyle' label="state" placeholder="Choose state" 
                /> */}
              <select
                className="inputStyle"
                name="state"
                onChange={handleInputChange}
                value={values.state}
                // required
              >
                <option>{"choose any state here"}</option>
                {options.map((option) => (
                  <option
                    // disabled={option.disabled}
                    key={option.value}
                    value={option.value}
                  >
                    {option.text}
                  </option>
                ))}
              </select>
            </Grid>
          </Grid>
          {/* 4th input field  */}
          <Grid container>
            <Grid
              xs={12}
              md={5}
              className="borderRight borderBottom"
              padding={1}
            >
              <input
                type="text"
                className="inputStyle"
                label="zip"
                placeholder="ZIP"
                name="zip"
                value={values.zip}
                // required
                onChange={handleInputChange}
              />
            </Grid>
            <Grid
              xs={12}
              md={3.5}
              className="borderRight borderBottom"
              padding={1}
            >
              <input
                type="text"
                className="inputStyle"
                label="phone"
                placeholder="Phone"
                name="phone"
                value={values.phone}
                // required
                onChange={handleInputChange}
              />
            </Grid>
            <Grid xs={12} md={3.5} className=" borderBottom" padding={1}>
              <input
                type="text"
                className="inputStyle"
                label="email"
                placeholder="Email"
                name="email"
                value={values.email}
                // required
                onChange={handleInputChange}
              />
              {errors.email.length > 0 && (
                <span className="error">{errors.email}</span>
              )}
            </Grid>
          </Grid>
          {/* 5th i/p field  */}
          <Grid container>
            <Grid
              xs={12}
              md={6}
              className="borderRight borderBottom"
              padding={1}
            >
              Gender :
              <label>
                <input
                  type="radio"
                  defaultChecked
                  value="MALE"
                  name="gender"
                  className="marginLeft"
                  onChange={handleInputChange}
                />
                MALE
              </label>
              <label>
                <input
                  type="radio"
                  value="FEMALE"
                  name="gender"
                  className="marginLeft"
                  onChange={handleInputChange}
                />
                FEMALE
              </label>
              <label>
                <input
                  type="radio"
                  value="Others"
                  name="gender"
                  className="marginLeft"
                  onChange={handleInputChange}
                />
                Other
              </label>
            </Grid>
            <Grid xs={12} md={6} className=" borderBottom" padding={1}>
              Ethnicity :
              <label>
                <input
                  type="radio"
                  defaultChecked
                  value="Hispanic"
                  name="hispanic"
                  className="marginLeft"
                  onChange={handleInputChange}
                />
                Hispanic
              </label>
              <label>
                <input
                  type="radio"
                  value="Non-Hispanic"
                  name="hispanic"
                  className="marginLeft"
                  onChange={handleInputChange}
                />
                Non-Hispanic
              </label>
              <input
                type="radio"
                value="Others"
                name="hispanic"
                className="marginLeft"
                onChange={handleInputChange}
              />
              Other
            </Grid>
          </Grid>
          {/* 6th  */}
          <Grid container>
            <Grid xs={12} className="borderBottom innerdivLayout" padding={1}>
              <div>Race:</div>
              <div>
                <label>
                  <input
                    type="radio"
                    defaultChecked
                    value="White"
                    name="race"
                    className="marginLeft"
                    onChange={handleInputChange}
                  />
                  White
                </label>
                <label>
                  <input
                    type="radio"
                    value=" Black Or African American"
                    name="race"
                    className="marginLeft"
                    onChange={handleInputChange}
                  />
                  Black Or African American
                </label>
                <label>
                  <input
                    type="radio"
                    value="White"
                    name="race"
                    className="marginLeft"
                    onChange={handleInputChange}
                  />
                  White
                </label>
                <label>
                  <input
                    type="radio"
                    value=" Asian"
                    name="race"
                    className="marginLeft"
                    onChange={handleInputChange}
                  />
                  Asian
                </label>
                <label>
                  <input
                    type="radio"
                    value="American Indian Or Alaskan Native"
                    name="race"
                    className="marginLeft"
                    onChange={handleInputChange}
                  />
                  American Indian Or Alaskan Native
                </label>
                <label>
                  <input
                    type="radio"
                    value=" Hispanic Or Latino"
                    name="race"
                    className="marginLeft"
                    onChange={handleInputChange}
                  />
                  Hispanic Or Latino
                </label>
                <label>
                  <input
                    type="radio"
                    value="Native Hawaiian or Other Pacific Islander"
                    name="race"
                    className="marginLeft"
                    onChange={handleInputChange}
                  />
                  Native Hawaiian or Other Pacific Islander
                </label>
                <label>
                  <input
                    type="radio"
                    value=" Other"
                    name="race"
                    className="marginLeft"
                    onChange={handleInputChange}
                  />
                  Other
                </label>
              </div>
            </Grid>
          </Grid>
          {/* 7th */}
          <Grid container>
            <Grid
              xs={12}
              md={6}
              className="borderRight borderBottom"
              padding={1}
            >
              <input
                type="text"
                className="inputStyle"
                label="clinicName"
                placeholder="Enter Organization/Clinic Name*"
                name="clinicName"
                value={values.clinicName}
                // required
                onChange={handleInputChange}
              />
            </Grid>
            <Grid xs={12} md={6} className="borderBottom" padding={1}>
              <input
                type="text"
                className="inputStyle"
                label="uniqueCode"
                placeholder="Enter Organization/Clinic Unique Code*"
                name="uniqueCode"
                value={values.uniqueCode}
                // required
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          {/* 8th */}
          <Grid container>
            <Grid xs={12} md={6} padding={1} className="innerdivLayout">
              <div>Relationship with Patient :</div>
              <div>
                <label>
                  <input
                    type="radio"
                    defaultChecked
                    value="Self"
                    name="relation"
                    onChange={handleInputChange}
                  />
                  Self
                </label>
                <label>
                  <input
                    type="radio"
                    value="Spouse"
                    name="relation"
                    onChange={handleInputChange}
                  />
                  Spouse
                </label>
                <label>
                  <input
                    type="radio"
                    value="Child"
                    name="relation"
                    onChange={handleInputChange}
                  />
                  Child
                </label>
                <label>
                  <input
                    type="radio"
                    value="Others"
                    name="relation"
                    onChange={handleInputChange}
                  />
                  Others
                </label>
              </div>
            </Grid>
          </Grid>
        </Grid>
        {/* 9 th  */}
      
        <Grid md={12} className="borderLayout" sx={{ margin: "1%" }}>
         <Grid container sx={{backgroundColor:"#43a2b2", color:"#000"}}>
            <span className="marginLeft">
              <p style={{color:"#fff",marginTop:"10%"}}>INSURANCE INFORMATION</p>
            </span>
            <span style={{ margin: "2% 0% 2% 3%" }}>
            <label style={{color:"#fff"}}>
                <input
                  type="radio"
                  defaultChecked
                  value="Individual Paid"
                  name="insuranceinfo"
                  onChange={handleInputChange}
                />
                Individual Paid
              </label>
              <label style={{color:"#fff"}}>
                <input
                  type="radio"
                  value="Employer Paid"
                  name="insuranceinfo"
                  onChange={handleInputChange}
                />
                Employer Paid
              </label>
              <label style={{color:"#fff"}}>
                <input
                  type="radio"
                  value="Insurance"
                  name="insuranceinfo"
                  onChange={handleInputChange}
                />
                Insurance
              </label>
              <label style={{color:"#fff"}}>
                <input
                  type="radio"
                  value="Others"
                  name="insuranceinfo"
                  onChange={handleInputChange}
                />
                Other
              </label>
            </span>
            {(values.insuranceinfo == "Insurance")?(
            <Grid container sx={{backgroundColor:"#fff"}}>
            {/* Primary  */}
            <Grid container
              sx={{backgroundColor:"#edeeef", color:"#000"}}
              xs={12}
              md={12}
              padding={1}
              className="borderBottom"
            >
              <p className="marginLeft">
              PRIMARY INSURANCE
              </p>
            </Grid>
            <Grid
              xs={12}
              md={4}
              className="borderRight borderBottom "
              padding={1}
            >
              <input
                type="text"
                className="inputStyle"
                name="pPolicyNo"
                label="pPolicyNo"
                placeholder="Insurance Company Policy Number"
                value={values.pPolicyNo}
                // required
                onChange={handleInputChange}
              />
            </Grid>
            <Grid
              xs={12}
              md={3}
              name="mdName"
              className="borderRight borderBottom"
              padding={1}
            >
              <input
                type="text"
                className="inputStyle"
                name="pGroupNo"
                label="pGroupNo"
                placeholder="Insurance Company Group Number(if you have any)"
                value={values.pGroupNo}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid xs={12} md={5} padding={1} className="borderBottom">
            {/* <Select
                options={diagnosisCodeList}
                placeholder="Select Code"
                className="inputStyle"
                name="selectedDCodeList"
                value={values.selectedDCodeList}
                onChange={handleInputChange}
                isSearchable={true}
                // isMulti8
              /> */}
               <Select
                 placeholder="Select Code"
                 name="selectedDCodeList"
                 value={values.selectedDCodeList}
                 onChange={handleInputChange}
                 sx={{width:"100%"}}
        >
          {
            diagnosisCodeList.map((item)=>{
              return (
                <MenuItem value={item.label}>{item.value}</MenuItem>
              )
            })
          }
        </Select>
            </Grid>
            {/* 2nd field  */}
            <Grid
              xs={12}
              md={4}
              className="borderRight borderBottom "
              padding={1}
            >
              <input
                type="text"
                className="inputStyle"
                name="payerCode"
                label="payerCode"
                placeholder="Payer Code (if not listed above)"
                value={values.payerCode}
                // required
                onChange={handleInputChange}
              />
            </Grid>
            <Grid
              xs={12}
              md={3}
              name="mdName"
              className="borderRight borderBottom"
              padding={1}
            >
              <input
                type="text"
                className="inputStyle"
                name="pCompanyName"
                label="pCompanyName"
                placeholder="Insurance Company Name"
                value={values.pCompanyName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid xs={12} md={5} padding={1} className="borderBottom">
            <input
                type="text"
                className="inputStyle"
                name="pCompanyAddress"
                label="pCompanyAddress"
                placeholder="Insurance Company Address"
                value={values.pCompanyAddress}
                onChange={handleInputChange}
                />
            </Grid>
            {/* 3rd  */}
            <Grid
              xs={12}
              md={4}
              className="borderRight borderBottom "
              padding={1}
            >
              <input
                type="text"
                className="inputStyle"
                name="pCity"
                label="pCity"
                placeholder="Insurance Company City"
                value={values.pCity}
                // required
                onChange={handleInputChange}
              />
            </Grid>
            <Grid
              xs={12}
              md={3}
              name="mdName"
              className="borderRight borderBottom"
              padding={1}
            >
              <input
                type="text"
                className="inputStyle"
                name="pState"
                label="pState"
                placeholder="Insurance Company State"
                value={values.pState}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid xs={12} md={5} padding={1} className="borderBottom">
            <input
                type="text"
                className="inputStyle"
                name="pCompanyZipCode"
                label="pCompanyZipCode"
                placeholder="Insurance Company Zip Code"
                value={values.pCompanyZipCode}
                onChange={handleInputChange}
                />
            </Grid>
            <Grid xs={12} className="borderBottom">
            <div style={{ margin: "2% 7% 2% 3%" }}>
            Relationship to policy holder  :
              <label>
                <input
                  type="radio"
                  value="self"
                  defaultChecked
                  name="relationShip"
                  className="marginLeft"
                  onChange={handleInputChange}
                />
                Self
              </label>
              <label>
                <input
                  type="radio"
                  className="marginLeft"
                  value="Spouse"
                  name="relationShip"
                  onChange={handleInputChange}
                />
                Spouse
              </label>
              <label>
                <input
                  type="radio"
                  className="marginLeft"
                  value="Child"
                  name="relationShip"
                  onChange={handleInputChange}
                />
                Child
              </label>
              <label>
                <input
                  type="radio"
                  className="marginLeft"
                  value="Other"
                  name="relationShip"
                  onChange={handleInputChange}
                />
                Other
              </label>
            </div>
            </Grid> 

          {/* Secondary  */}
          <Grid container
              sx={{backgroundColor:"#edeeef", color:"#000"}}
              xs={12}
              md={12}
              padding={1}
              className="borderBottom"
            >
              <p className="marginLeft">
              SECONDARY INSURANCE
              </p>
            </Grid>
            <Grid
              xs={12}
              md={4}
              className="borderRight borderBottom "
              padding={1}
            >
              <input
                type="text"
                className="inputStyle"
                name="sPolicyNo"
                label="sPolicyNo"
                placeholder="Insurance Company Policy Number"
                value={values.sPolicyNo}
                // required
                onChange={handleInputChange}
              />
            </Grid>
            <Grid
              xs={12}
              md={3}
              name="mdName"
              className="borderRight borderBottom"
              padding={1}
            >
              <input
                type="text"
                className="inputStyle"
                name="sGroupNo"
                label="sGroupNo"
                placeholder="Insurance Company Group Number(if you have any)"
                value={values.sGroupNo}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid xs={12} md={5} padding={1} className="borderBottom">
            {/* <Select
                options={diagnosisCodeList}
                placeholder="Select Code"
                className="inputStyle"
                name="selectedDCodeList"
                value={values.selectedDCodeList}
                onChange={handleInputChange}
                isSearchable={true}
                // isMulti
              /> */}
               <Select
          value={values.dailyReportName}
          name="selectedDCodeList"
          onChange={handleInputChange}
          sx={{width:"100%", color:"#000"}}
        >
          {
            diagnosisCodeList.map((item)=>{
              return (
                <MenuItem value={item.label}>{item.value}</MenuItem>
              )
            })
          }
        </Select>
            </Grid>
            {/* 2nd field  */}
            <Grid
              xs={12}
              md={4}
              className="borderRight borderBottom "
              padding={1}
            >
              <input
                type="text"
                className="inputStyle"
                name="spayerCode"
                label="spayerCode"
                placeholder="Payer Code (if not listed above)"
                value={values.spayerCode}
                // required
                onChange={handleInputChange}
              />
            </Grid>
            <Grid
              xs={12}
              md={3}
              name="mdName"
              className="borderRight borderBottom"
              padding={1}
            >
              <input
                type="text"
                className="inputStyle"
                name="sCompanyName"
                label="sCompanyName"
                placeholder="Insurance Company Name"
                value={values.sCompanyName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid xs={12} md={5} padding={1} className="borderBottom">
            <input
                type="text"
                className="inputStyle"
                name="sCompanyAddress"
                label="sCompanyAddress"
                placeholder="Insurance Company Address"
                value={values.sCompanyAddress}
                onChange={handleInputChange}
                />
            </Grid>
            {/* 3rd  */}
            <Grid
              xs={12}
              md={4}
              className="borderRight borderBottom "
              padding={1}
            >
              <input
                type="text"
                className="inputStyle"
                name="sCity"
                label="sCity"
                placeholder="Insurance Company City"
                value={values.sCity}
                // required
                onChange={handleInputChange}
              />
            </Grid>
            <Grid
              xs={12}
              md={3}
              name="mdName"
              className="borderRight borderBottom"
              padding={1}
            >
              <input
                type="text"
                className="inputStyle"
                name="sState"
                label="sState"
                placeholder="Insurance Company State"
                value={values.sState}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid xs={12} md={5} padding={1} className="borderBottom">
            <input
                type="text"
                className="inputStyle"
                name="sCompanyZipCode"
                label="sCompanyZipCode"
                placeholder="Insurance Company Zip Code"
                value={values.sCompanyZipCode}
                onChange={handleInputChange}
                />
            </Grid>
            <Grid xs={12}>
            <div style={{ margin: "2% 7% 2% 3%" }}>
            Relationship to policy holder  :
              <label>
                <input
                  type="radio"
                  value="self"
                  defaultChecked
                  name="srelationShip"
                  className="marginLeft"
                  onChange={handleInputChange}
                />
                 Self
              </label>
              <label>
                <input
                  type="radio"
                  className="marginLeft"
                  value="Spouse"
                  name="srelationShip"
                  onChange={handleInputChange}
                />
                Spouse
              </label>
              <label>
                <input
                  type="radio"
                  className="marginLeft"
                  value="Child"
                  name="srelationShip"
                  onChange={handleInputChange}
                />
                Child
              </label>
              <label>
                <input
                  type="radio"
                  className="marginLeft"
                  value="Other"
                  name="srelationShip"
                  onChange={handleInputChange}
                />
                Other
              </label>
            </div>
            </Grid>  

            </Grid>):(<></>)}
          </Grid>
        </Grid>
        {/* PROVIDER INFORMATION */}

        <Grid md={12} className="borderLayout" sx={{ margin: "1%" }}>
          <Grid container sx={{backgroundColor:"#43a2b2",paddingLeft: "3%",color:"#fff"}} xs={12} className="borderBottom">
            <p >PROVIDER INFORMATION</p>
          </Grid>
          <Grid container>
            <Grid
              xs={12}
              md={6}
              className="borderRight borderBottom"
              padding={1}
            >
              <input
                type="text"
                className="inputStyle"
                label="PhysicianName"
                placeholder="Physician Name"
                name="PhysicianName"
                value={values.PhysicianName}
                // required
                onChange={handleInputChange}
              />
            </Grid>
            <Grid xs={12} md={6} className="borderBottom" padding={1}>
              <input
                type="text"
                className="inputStyle"
                label="phyList"
                placeholder="Please Select physician from list"
                name="phyList"
                value={values.phyList}
                // required
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              xs={12}
              md={6}
              className="borderRight"
              padding={1}
            >
              <input
                type="text"
                className="inputStyle"
                label="npinum"
                placeholder="NPI Number"
                name="npinum"
                value={values.npinum}
                // required
                onChange={handleInputChange}
              />
            </Grid>
            <Grid xs={12} md={6}  padding={1}>
              <input
                type="text"
                className="inputStyle"
                label="emailOfProvider"
                placeholder="Email"
                name="emailOfProvider"
                value={values.emailOfProvider}
                // required
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* ICD-10 CODE, DIAGNOSIS CODE REQUIRED */}

        <Grid md={12} className="borderLayout" sx={{ margin: "1%" }}>
          <Grid xs={12} container className="borderBottom" sx={{ paddingLeft: "3%",backgroundColor:"#43a2b2", color:"#fff"}}>
            <p>ICD-10 CODE, DIAGNOSIS CODE REQUIRED</p>
          </Grid>
          <Grid container xs={12} sx={{ paddingLeft: "3%",backgroundColor:"#f9e8a5" }}>
            <p >
              A valid Diagnosis Code code is REQUIRED and must support the
              medical necessity of the confirmation tests ordered
            </p>
          </Grid>
          <Grid container>
            <Grid
              xs={12}
              md={6}
              className="borderRight"
              padding={1}
            >
              <input
                type="text"
                className="inputStyle"
                label="DiagnosisCode"
                placeholder="Diagnosis Code (Write Code if not listed)"
                name="DiagnosisCode"
                value={values.DiagnosisCode}
                // required
                onChange={handleInputChange}
              />
            </Grid>
            <Grid xs={12} md={6} padding={1}>
              <Select
                options={diagnosisCodeList}
                placeholder="Select Code"
                className="inputStyle"
                name="selectedDCodeList"
                value={values.selectedDCodeList}
                onChange={handleInputChange}
                isSearchable={true}
                isMulti
              />
            </Grid>
          </Grid>
        </Grid>

        {/* SPECIMEN INFORMATION */}
        <Grid md={12} className="borderLayout" sx={{ margin: "1%" }}>
          <Grid xs={12} container className="borderBottom" sx={{ paddingLeft: "3%",backgroundColor:"#43a2b2", color:"#fff"}}>
            <p>SPECIMEN INFORMATION</p>
          </Grid>
         
          <Grid container>
            <Grid
              xs={12}
              md={6}
              className="borderRight"
              padding={1}
            >
              <input
                type="text"
                className="inputStyle"
                label="SpecimenType"
                placeholder="Specimen Type"
                name="SpecimenType"
                value={values.DiagnosisCode}
                // required
                onChange={handleInputChange}
              />
            </Grid>
            <Grid xs={12} md={6} padding={1}>
              <Select
                options={diagnosisCodeList}
                placeholder="Select Code"
                className="inputStyle"
                name="selectedDCodeList"
                value={values.selectedDCodeList}
                onChange={handleInputChange}
                isSearchable={true}
                isMulti
              />
            </Grid>
          </Grid>
        </Grid>
        {/* TEST REQUEST - PLEASE CHOOSE ONE. ORDERS CANNOT BE PROCESSED WITHOUT TEST REQUEST. */}
        <Grid md={12} className="borderLayout" sx={{ margin: "1%" }}>
          <Grid container xs={12} className="borderBottom" sx={{ paddingLeft: "3%",backgroundColor:"#43a2b2", color:"#fff"}}>
            <p>TEST REQUEST - PLEASE CHOOSE ONE. ORDERS CANNOT BE PROCESSED WITHOUT TEST REQUEST</p>
          </Grid>
          <Grid container>
            <Grid
              xs={12}
              md={6}
              className="borderRight"
              padding={1}
            >
              <input
                type="text"
                className="inputStyle"
                label="testCode"
                placeholder="Test Code"
                name="testCode"
                value={values.testCode}
                // required
                onChange={handleInputChange}
              />
            </Grid>
            <Grid xs={12} md={6} padding={1}>
              <Select
                options={diagnosisCodeList}
                placeholder="Select Code"
                className="inputStyle"
                name="selectedDCodeList"
                value={values.selectedDCodeList}
                onChange={handleInputChange}
                isSearchable={true}
                isMulti
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Progress Note/ Medical Necessity/ Chart Note */}
        <Grid md={12} className="borderLayout" sx={{ margin: "1%" }}>
        <Grid
              xs={12}
              md={6}
              padding={1}
            >
              <input
                type="text"
                className="inputStyle"
                label="progressNote"
                placeholder="Progress Note/ Medical Necessity/ Chart Note"
                name="progressNote"
                value={values.progressNote}
                // required
                onChange={handleInputChange}
              />
            </Grid>
        </Grid>

        {/* UPLOAD PICTURE/PHOTO INSURANCE CARD BACK SIDE */}
        <Grid md={12} className="borderLayout innerdivLayout" sx={{ margin: "1%"}}>
          <Grid xs={12} md={4} className="borderLayout" sx={{"margin":"2%"}}>
             <Grid container  xs={12} className="borderBottom" sx={{ paddingLeft: "3%",backgroundColor:"#43a2b2", color:"#fff"}}>
               <p className="contentMargin">UPLOAD PICTURE/PHOTO INSURANCE CARD FRONT SIDE</p>
             </Grid>
             <Grid container xs={12} >
                <>
               {
                  insuranceImgs.map((image,index)=>{
                    return <div>
                       <label htmlFor="fileInput">
                          
                       
                          <input type="file" accept="image/*" multiple  style={{display:'none'}} id="fileInput" />
                          <img src={image} alt="Image" />
                          
                            <button onClick={()=>handelRemovedImages(index)}>remove</button>
                         
                       </label>
                          {/* <img src={image} alt="Image" />
                          <input type="file" /> */}

                    </div>
                  })
                 }
                <button onClick={handelAddImgs}>
                  Add Images
                </button> 
                </>
             </Grid>
          </Grid>
          <Grid xs={12} md={4} className="borderLayout" sx={{"margin":"2%"}}>
             <Grid container xs={12} className="borderBottom" sx={{ paddingLeft: "3%",backgroundColor:"#43a2b2", color:"#fff"}}>
               <p className="contentMargin">UPLOAD PICTURE/PHOTO INSURANCE CARD BACK SIDE</p>
             </Grid>
             <Grid xs={12}>
               <p className="contentMargin"> UPLOAD PICTURE/PHOTO INSURANCE CARD BACK SIDE</p>
             </Grid>
          </Grid>
          <Grid xs={12} md={4} className="borderLayout" sx={{"margin":"2%"}}>
             <Grid container xs={12} className="borderBottom" sx={{ paddingLeft: "3%",backgroundColor:"#43a2b2", color:"#fff"}}>
             <p className="contentMargin"> UPLOAD PICTURE/PHOTO INSURANCE CARD BOTH SIDE</p>
             </Grid>
             <Grid xs={12}>
               UPLOAD PICTURE/PHOTO INSURANCE CARD BACK SIDE
             </Grid>
          </Grid>
        </Grid>
        {/* CLINICAL INFORMATION */}
        <Grid md={12} className="borderLayout" sx={{ margin: "1%" }}>
          <Grid container xs={12} className="borderBottom" sx={{ paddingLeft: "3%",backgroundColor:"#43a2b2", color:"#fff"}}>
            <p>CLINICAL INFORMATION</p>
          </Grid>
          <Grid container className="borderBottom">
            <Grid
              xs={12}
              md={6}
              className="borderRight"
              padding={1}
            >
              <input
                type="text"
                className="inputStyle"
                label="collectorName"
                placeholder="Collector Name"
                name="collectorName"
                value={values.collectorName}
                // required
                onChange={handleInputChange}
              />
            </Grid>
            <Grid xs={12} md={6} padding={1}>
              <Select
                options={diagnosisCodeList}
                placeholder="Select Code"
                className="inputStyle"
                name="selectedDCodeList"
                value={values.selectedDCodeList}
                onChange={handleInputChange}
                isSearchable={true}
                isMulti
              />
            </Grid>
          </Grid>
          <Grid xs={12} sx={{margin:"1%"}}>
            <button onClick={onDateHandeler}>Today </button>
            <span className="marginLeft">{date}</span>
          </Grid>
        </Grid>
        {/* Patient Note */}
        <Grid md={12} className="borderLayout" sx={{ margin: "1%" }}>
        <Grid
              xs={12}
              md={6}
              padding={1}
            >
              <input
                type="text"
                className="inputStyle"
                label="patientNote"
                placeholder="Patient Note"
                name="patientNote"
                value={values.patientNote}
                // required
                onChange={handleInputChange}
              />
            </Grid>
        </Grid>

        {/* DO YOU HAVE A BAR CODE ACCESSION NUMBER ON THE SPECIMEN TUBE? */}

        <Grid md={12} className="borderLayout" sx={{ margin: "1%" }}>
         <Grid container sx={{ paddingLeft: "3%",backgroundColor:"#43a2b2", color:"#fff"}}>
            <span>
              <p>DO YOU HAVE A BAR CODE ACCESSION NUMBER ON THE SPECIMEN TUBE?</p>
            </span>
            <span style={{ margin: "2% 0% 0 3%" }}>
              <label>
                <input
                  type="radio"
                  value="yes"
                  name="barCodeAcess"
                  onChange={handleInputChange}
                />
                 Yes
              </label>
              <label>
                <input
                  type="radio"
                  defaultChecked
                  value="no"
                  name="barCodeAcess"
                  onChange={handleInputChange}
                />
                No
              </label>
            </span>
            {(values.barCodeAcess == "yes")?(<Grid
              xs={12}
              md={12}
              padding={1}
            >
              <input
                type="text"
                className="inputStyle"
                label="accessionNumber"
                placeholder="Enter Bar Code Accession Number"
                name="accessionNumber"
                value={values.accessionNumber}
                // required
                onChange={handleInputChange}
              />
            </Grid>):(<></>)}
          </Grid>
        </Grid>
        {/* PATIENT CONSENT */}
        <Grid md={12} className="borderLayout" sx={{ margin: "1%" }}>
         <Grid container>
            <Grid container xs={12} className="borderBottom" sx={{ paddingLeft: "3%",backgroundColor:"#43a2b2", color:"#fff"}}>
              <p>PATIENT CONSENT</p>
            </Grid>
            <Grid xs={12}>
            <div style={{ margin: "2% 7% 2% 3%" }}>
             I Consent For This Test :
              <label>
                <input
                  type="radio"
                  value="yes"
                  defaultChecked
                  name="patientConsent"
                  className="marginLeft"
                  onChange={handleInputChange}
                />
                 Yes
              </label>
              <label>
                <input
                  type="radio"
                  className="marginLeft"
                  value="no"
                  name="patientConsent"
                  onChange={handleInputChange}
                />
                No
              </label>
            </div>
            </Grid>            
          </Grid>
        </Grid>
        {/* RECORD REQUESTED BY */}
        <Grid md={12} className="borderLayout" sx={{ margin: "1%" }}>
         <Grid container>
            <Grid  container xs={12} className="borderBottom" sx={{ paddingLeft: "3%",backgroundColor:"#43a2b2", color:"#fff"}}>
              <p>RECORD REQUESTED BY</p>
            </Grid>
            <Grid
              xs={12}
              md={12}
              padding={1}
            >
              <input
                type="text"
                className="inputStyle"
                label="requesterEmail"
                placeholder="Enter Your Name/ Email"
                name="requesterEmail"
                value={values.requesterEmail}
                // required
                onChange={handleInputChange}
              />
            </Grid>           
          </Grid>
        </Grid>
        {/* REQUESTING PROVIDER */}
          <Grid md={12} className="borderLayout" sx={{ margin: "1%" }}>
         <Grid container>
            <Grid container xs={12} className="borderBottom" sx={{ paddingLeft: "3%",backgroundColor:"#43a2b2", color:"#fff"}}>
              <p>REQUESTING PROVIDER</p>
            </Grid>
            <Grid
              xs={12}
              md={6}
              padding={1}
              className="borderRight"
            >
              <input
                type="text"
                className="inputStyle"
                label="requesterEmail"
                placeholder="Enter Your Name/ Email"
                name="requesterEmail"
                value={values.requesterEmail}
                // required
                onChange={handleInputChange}
              />
            </Grid>    
            <Grid
              xs={12}
              md={6}
              padding={1}
            >
              <input
                type="text"
                className="inputStyle"
                placeholder="date"
                // required
                name="date"
                value={values.date}
                onChange={handleInputChange}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
            </Grid>        
          </Grid>
        </Grid>
        <Button type="submit">Submit</Button>
      </form>
    </Grid>
   
  );
};

export default TestFrom;
