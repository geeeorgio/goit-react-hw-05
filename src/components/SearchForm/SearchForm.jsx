import { useState } from "react";
import s from "./SearchForm.module.css";

const SearchForm = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form className={s.form}>
      <input
        className={s.input}
        type="text"
        name="query"
        value={query}
        onChange={handleChange}
      />
      <button className={s.searchBtn} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
