import { useState } from "react";
import toast from "react-hot-toast";
import s from "./SearchForm.module.css";

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error("Please enter a search query");
      return;
    }

    onSubmit(query);

    setQuery("");
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        placeholder="Search for a movie"
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
