import React from "react";

function Search({onSearch, searchTerm}) {
 
  function handleSearch(e) {
    onSearch(e.target.value);
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" 
          placeholder="Search Pokemon"
          value={searchTerm}
          onChange={handleSearch}
        />
        <i className="search icon" type="submit" />
      </div>
    </div>
  );
}

export default Search;
