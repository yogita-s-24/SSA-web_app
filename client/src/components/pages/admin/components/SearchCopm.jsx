import React, { useState } from "react";
import { CgSearch } from "react-icons/cg";

function SearchCopm({ data, onSearch, onHideAllStudents }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  // Handle the onChange event to hide "All Students"
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    onHideAllStudents(searchTerm); // Pass searchTerm to onHideAllStudents
  };

  return (
    <div className="my-4 flex w-full items-center justify-center">
      <div className="flex items-center justify-center overflow-hidden rounded-2xl border bg-white ps-2">
        <input
          type="search"
          className="border-transparent px-2 py-1 outline-none"
          placeholder="Search Students by Name...."
          value={searchTerm}
          onChange={handleInputChange} // Call handleInputChange on input change
        />
        <button className="px-2 py-2 active:bg-gray-100" onClick={handleSearch}>
          <CgSearch />
        </button>
      </div>
    </div>
  );
}

export default SearchCopm;
