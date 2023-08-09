import React from "react";
import { SearchBar } from "./SearchBar";

export const MiddleHeader = () => {
  return (
    <div className="flex pl-5 pr-10 justify-between mb-5">
      {/* TODO: Aqui iria el logo que me pasa la gente de design, que seria una imagen pero yo lo puse como un div a modo de ilustracion */}
      <div>LOGO</div>
      <SearchBar />
      <div className="flex gap-10">
        <button>
          <i className="fa-solid fa-user"></i>
        </button>

        <button>
          <i className="fa-solid fa-bag-shopping"></i>
        </button>
      </div>
    </div>
  );
};
