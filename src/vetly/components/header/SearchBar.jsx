import React from "react";

export const SearchBar = () => {
  return (
    <div className="flex justify-between items-center text-center gap-2">
      <i className="fa-solid fa-magnifying-glass text-tertiary"></i>
      <input
        type="seach"
        placeholder="Search and hit Enter"
        className="flex-2 border border-gray-300 rounded-none p-2 w-64"
      />
      <p className="text-tertiary">All Categories</p>
    </div>
  );
};
