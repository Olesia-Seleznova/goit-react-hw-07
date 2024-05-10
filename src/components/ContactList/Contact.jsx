import { BiSolidUser } from "react-icons/bi";
import { BiSolidPhone } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className={css.div}>
        <div className={css.row}>
          <p>
            <BiSolidUser />
            Name: {name}
          </p>
          <p className={css.p}>
            <BiSolidPhone />
            Number: {number}
          </p>
        </div>

        <button
          className={css.btn}
          onClick={() => dispatch(deleteContact(id))}
          type="submit"
        >
          Delete
        </button>
      </div>
    </>
  );
}
