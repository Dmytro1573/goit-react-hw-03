import { Field, Form, Formik, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

export default function ContactForm({ onAdd }) {
  const usernameId = useId();
  const userPhoneNumber = useId();

  const handleFormSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.username,
      number: values.phone,
    });
    actions.resetForm();
  };

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required!"),
    phone: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required!"),
  });

  return (
    <Formik
      initialValues={{ username: "", phone: "" }}
      onSubmit={handleFormSubmit}
      validationSchema={SignupSchema}
    >
      <Form className={css.formContainer}>
        <label htmlFor={usernameId} className={css.label}>
          Name
        </label>
        <Field
          name="username"
          type="text"
          id={usernameId}
          className={css.inputField}
        />
        <ErrorMessage
          name="username"
          component="span"
          className={css.errorMessage}
        />
        <label htmlFor={userPhoneNumber} className={css.label}>
          Number
        </label>
        <Field
          type="tel"
          name="phone"
          id={userPhoneNumber}
          className={css.inputField}
        />
        <ErrorMessage
          name="phone"
          component="span"
          className={css.errorMessage}
        />
        <button type="submit" className={css.submitButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
