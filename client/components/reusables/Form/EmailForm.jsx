import React, { useState, useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../Button/Button";
import styles from "./EmailForm.module.scss";
import { useAxios } from "../../../utils/hooks/useAxios";
import { ErrorStateContext } from "../../../store/ErrorStateContext";

const EmailForm = (props) => {
  const { setError } = useContext(ErrorStateContext);
  const { fetchData } = useAxios(setError);

  const [focus, setFocus] = useState({
    focus: false,
    activeField: null,
  });

  const inputFocusProps = {
    onFocus: (event) => {
      setFocus({
        focus: true,
        activeField: event.target.name,
      });
    },
    onBlurCapture: () => {
      setFocus({
        focus: false,
        activeField: null,
      });
    },
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        description: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(50, "Ne vairāk kā 50 rakstzīmes")
          .required(" "),
        lastName: Yup.string()
          .max(50, "Ne vairāk kā 50 rakstzīmes")
          .required(" "),
        email: Yup.string().email().required(" "),
        description: Yup.string()
          .max(5000, "Ne vairāk kā 5000 rakstzīmes")
          .required(" "),
      })}
      onSubmit={(values, { setSubmitting }) => {
        fetchData({
          method: "POST",
          url: "/api/send-mail",
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
          },
          data: values,
        }).then(() => {
          setSubmitting(false);
          props.setName(values.firstName);
          if (props.setOpenFormModal) {
            props.setOpenFormModal(false);
          }
          props.setOpenFeedbackPopup(true);
        });
      }}
    >
      {({ errors, handleBlur, touched, values }) => (
        <Form className={`${styles.formikForm} ${styles[props.popUpForm]}`}>
          <fieldset
            className={`${
              errors.firstName && touched.firstName && styles.error
            } ${touched.firstName && !errors.firstName && styles.touched}`}
          >
            <Field
              {...inputFocusProps}
              placeholder="Vārds"
              name="firstName"
              type="text"
              onBlur={handleBlur}
              value={values.firstName}
            />

            <legend
              className={focus.activeField === "firstName" ? styles.active : ""}
              htmlFor="firstName"
            >
              Vārds
            </legend>
          </fieldset>
          <div className={styles.errorMsg}>
            <ErrorMessage name="firstName" />
          </div>
          <fieldset
            className={`${
              errors.lastName && touched.lastName && styles.error
            } ${touched.lastName && !errors.lastName && styles.touched}`}
          >
            <Field
              {...inputFocusProps}
              placeholder="Uzvārds"
              name="lastName"
              type="text"
              onBlur={handleBlur}
              value={values.lastName}
            />

            <legend
              className={focus.activeField === "lastName" ? styles.active : ""}
              htmlFor="lastName"
            >
              Uzvārds
            </legend>
          </fieldset>
          <div className={styles.errorMsg}>
            <ErrorMessage name="lastName" />
          </div>
          <fieldset
            className={`${errors.email && touched.email && styles.error} ${
              touched.email && !errors.email && styles.touched
            }`}
          >
            <Field
              {...inputFocusProps}
              placeholder="E-pasta adrese"
              name="email"
              type="email"
              onBlur={handleBlur}
              value={values.email}
            />
            <legend
              className={focus.activeField === "email" ? styles.active : ""}
              htmlFor="email"
            >
              E-pasta adrese
            </legend>
          </fieldset>
          <fieldset
            className={`${
              errors.description && touched.description && styles.error
            } ${touched.description && !errors.description && styles.touched} ${
              styles.description
            }`}
          >
            <Field
              {...inputFocusProps}
              placeholder="Apraksts"
              name="description"
              type="text"
              as="textarea"
              onBlur={handleBlur}
              value={values.description}
            />

            <legend
              className={`${
                focus.activeField === "description" ? styles.active : ""
              } ${styles.description}`}
              htmlFor="description"
            >
              Apraksts
            </legend>
          </fieldset>
          <div className={styles.errorMsg}>
            <ErrorMessage name="description" />
          </div>
          <Button className={props.submitBtn} type="submit">
            Nosūtīt
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default EmailForm;
