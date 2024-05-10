import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
// import { addContact } from "../../redux/contactsSlice";
import { addContact } from "../../redux/contactsOps";
import css from "./ContactForm.module.css";

const feedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const contact = {
      name: values.name,
      number: values.number,
      id: nanoid(),
    };
    dispatch(addContact(contact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={feedbackSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameFieldId}>
          Name
        </label>
        <Field className={css.field} type="text" name="name" id={nameFieldId} />
        <ErrorMessage className={css.span} name="name" component="span" />
        <label className={css.label} htmlFor={numberFieldId}>
          Number
        </label>
        <Field
          className={css.field}
          type="text"
          name="number"
          id={numberFieldId}
        />
        <ErrorMessage className={css.span} name="number" component="span" />

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
