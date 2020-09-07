import React from "react";
import { useFormik } from "formik";

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "Charles",
      email: "",
      channel: "",
    },
    onSubmit: (values) => {
      console.log("Form data", values);
    },
    validate: (values) => {
      //values.name values.email values.channel
      //errors.name errors.email errors.channel
      //errors.name = "This field is required"
      let errors = {};

      if (!values.name) {
        errors.name = "Required";
      }

      if (!values.email) {
        errors.email = "Required";
      }
      if (!values.channel) {
        errors.channel = "Required";
      }

      return errors;
    },
  });

  // console.log("Form Values", formik.values);
  return (
    <div>
      <h1 className="youtube-header">Youtube Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;
