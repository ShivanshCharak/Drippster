import React, { useState ,useContext} from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import styles from "../_auth/auth.module.css";
import { addressSchema } from "../schemas/index";
import { TokenContext } from "../context/accessTokenContext";
import { AuthTypeContext } from "../context/authTypeContext";
const AddressForm = () => {
  const {accessToken,setAccessToken} = useContext(TokenContext)
  const {authType,setAuthType} = useContext(AuthTypeContext)
  const initialValues = {
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  };

  const navigate = useNavigate();
  {console.log(accessToken)}
  const formik = useFormik({
    initialValues,
    validationSchema: addressSchema,
    onSubmit: (values) => {
      
      fetch("http://localhost:3000/userDetails/createAddress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer ${accessToken}`
        },
        body: JSON.stringify({...values,}),
      })
      .then(() => {
          console.log("endej")
          // Handle success, e.g., navigate to another page
          setAuthType("signin")
          navigate("/success");
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    },
  });

  const handleBlur = (e) => {
    formik.handleBlur(e);
  };

  const handleChange = (e) => {
    formik.handleChange(e);
  };

  return (
    <div className={styles.formContainer}>
      <div style={{ marginRight: "100px" }} className={styles.heading}>
        <h1>Address Form</h1>
        <span>Please enter your address details</span>
      </div>
      <div className={styles.gridContainer}>
        <form onSubmit={formik.handleSubmit}>
          <br />
          <label htmlFor="streetAddress">Street Address:</label> <br />
          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            value={formik.values.streetAddress}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {formik.touched.streetAddress && formik.errors.streetAddress && (
            <div className={styles.errors}>{formik.errors.streetAddress}</div>
          )}
          <br />
          <label htmlFor="city">City:</label> <br />
          <input
            type="text"
            id="city"
            name="city"
            value={formik.values.city}
            onChange={handleChange}
            onBlur={handleBlur}
          />
         
          { formik.touched.city && formik.errors.city && (
            <div className={styles.errors}>{formik.errors.city}</div>
          )}
          <br />
          <label htmlFor="state">State/Province:</label> <br />
          <input
            type="text"
            id="state"
            name="state"
            value={formik.values.state}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {formik.touched.state && formik.errors.state && (
            <div className={styles.errors}>{formik.errors.state}</div>
          )}
          <br />
          <label htmlFor="zipCode">ZIP/Postal Code:</label> <br />
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formik.values.zipCode}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {formik.touched.zipCode && formik.errors.zipCode && (
            <div className={styles.errors}>{formik.errors.zipCode}</div>
          )}
          <br />
          <label htmlFor="country">Country:</label> <br />
          <input
            type="text"
            id="country"
            name="country"
            value={formik.values.country}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {formik.touched.country && formik.errors.country && (
            <div className={styles.errors}>{formik.errors.country}</div>
          )}
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;
