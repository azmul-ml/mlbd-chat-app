import React from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

import { useAppDispatch } from "../../../app/hooks";
import { registerUser } from "../redux/auth.slice";
import { RegistrationCredentials } from "../types/auth.types";

export default function Register() {
  const dispatch = useAppDispatch();
  let history = useHistory();

  const handleSubmit = async (values: RegistrationCredentials) => {
    const response = await dispatch(registerUser(values));
    if (response.payload) {
      history.push("/");
    }
    console.log(response.payload);
  };

  return (
    <div>
      <h1>Register!</h1>
      <Formik
        initialValues={{ name: "", email: "", password: "", roles: ["admin"]}}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <br/>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <br/><br/>
            <label htmlFor="email">Email:</label>
            <br/>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <br/><br/>
            {errors.email && touched.email && errors.email}
            <label htmlFor="email">Password:</label>
            <br/>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <br/><br/>
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

