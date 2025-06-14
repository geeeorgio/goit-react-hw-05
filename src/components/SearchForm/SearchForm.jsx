import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import s from "./SearchForm.module.css";

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    setQuery(e.target.value);
    setSearchParams({ query: query });
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
