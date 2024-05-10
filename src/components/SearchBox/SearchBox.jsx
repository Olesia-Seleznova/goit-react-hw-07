import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectFilteredContacts } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilteredContacts);

  const handleChange = (e) => dispatch(changeFilter(e.target.value));

  return (
    <div className={css.div}>
      <p className={css.p}>Find contact by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}
