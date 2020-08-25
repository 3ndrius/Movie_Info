import React from "react";
import FontAwesome from "react-fontawesome";
import "./search.scss";

const Search = ({ handleSearch }) => {
  const [value, setValue] = React.useState("");

  let timeout = null;

  const doSearch = (ev) => {
    setValue(ev.target.value);
    clearTimeout(timeout);
    console.log(value);
    timeout = setTimeout(() => {
      handleSearch(value);
    }, 500);
  };

  return (
    <div className="search">
      <div className="search__wrap">
        <FontAwesome className="search__icon" name="search" size="2x" />
        <input
          type="text"
          className="search__input"
          placeholder="Search movie"
          onChange={doSearch}
          value={value}
        />
      </div>
    </div>
  );
};

export default Search;
