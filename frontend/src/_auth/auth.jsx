import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import { validationSchema } from "../utils/validationSchema";
import { useNavigate } from "react-router-dom";
import styles from "./auth.module.css";
import { Link } from "react-router-dom";
import { TokenContext } from "../context/accessTokenContext";
import { AuthTypeContext } from "../context/authTypeContext";
import { UserDetailsContext } from "../context/userDetailsContext";
import { toast } from "react-toastify";

function Auth() {
  const [error, setError] = useState("");
  const { userDetails, setUserDetails } = useContext(UserDetailsContext);
  const { authType, setAuthType } = useContext(AuthTypeContext);
  const { accessToken, setAccessToken } = useContext(TokenContext);
  const nav = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      fetch(`http://localhost:3000/auth/${authType}`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then(async (response) => {
          if (response.ok) {
            const res = await response.json();
            setAccessToken(res.token); // assuming the token is in res.token
            setUserDetails({ username: res.username });
            if (authType === 'signin') {
              toas(res.message)
              nav("/cart");
            } else {
              toast(res.message)
              nav("/address");
            }
          } else {
            const res = await response.json();
            toast(res.message);
          }
        })
        .catch((error) => {
          toast.error("Network error, Please try again later")
        });
    },
  });

  const { values, handleBlur, touched, handleChange, handleSubmit, errors } = formik;

  return (
    <div className={styles.formContainer}>
      <div className={styles.logo}>
        <h1>Drippster</h1>
      </div>
      <div className={styles.heading}>
        <h1>{authType === 'signup' ? 'Create a new Account' : 'Sign In to your Account'}</h1>
        <span>To use Drippster, please enter your details</span>
      </div>
      <div className={styles.gridContainer}>
        <br />
        <form onSubmit={handleSubmit}>
          <span className={styles.error}>{error}</span>
          {authType === "signup" && (
            <>
              <label className={styles.label} htmlFor="username">Username</label>
              <br />
              <input
                type="text"
                autoComplete="off"
                id="username"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.username && touched.username && (<span className={styles.errors}>{errors.username}</span>)}
            </>
          )}
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            autoComplete="off"
            id="email"
            name="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.email && touched.email && (<span className={styles.errors}>{errors.email}</span>)}
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (<span className={styles.errors}>{errors.password}</span>)}
          <br />
          {authType === "signup" && (
            <>
              <label htmlFor="confirmPassword">Confirm password</label>
              <br />
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                autoComplete="off"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirmPassword && touched.confirmPassword && (<span className={styles.errors}>{errors.confirmPassword}</span>)}
            </>
          )}
          <br />
          <button type="submit">
            <span>Submit</span>
          </button>
          <span className={styles.choice}>
            {authType === "signin" ? (
              <>Don't have an Account? <Link className={styles.link} to="/signup">Create Account</Link></>
            ) : (
              <>Already have an Account? <Link className={styles.link} to="/signin">Sign In</Link></>
            )}
          </span>
        </form>
      </div>
    </div>
  );
}

export default Auth;
