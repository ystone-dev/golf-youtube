import React from "react";
import search from "../../assets/img/search.svg";

const Search = () => {
  return (
    <div className="search__container">
      <label htmlFor="searchInput">
        <img src={search} alt="검색" />
      </label>
      <input
        type="search"
        id="searchInput"
        placeholder="검색어를 입력해주세요"
        autoComplete="off"
        className="search__input"
      />
    </div>
  );
};

export default Search;
