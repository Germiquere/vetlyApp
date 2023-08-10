import React from "react";
import { SearchBar } from "./SearchBar";
import { useAuth0 } from "@auth0/auth0-react";

export const MiddleHeader = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div className="flex pl-5 pr-10 justify-between mb-5">
      {/* TODO: Aqui iria el logo que me pasa la gente de design, que seria una imagen pero yo lo puse como un div a modo de ilustracion */}
      <div>LOGO</div>
      <SearchBar />
      <div className="flex gap-10">
        {isAuthenticated ? (
          <button className="text-center">
            <img
              src={user.picture}
              alt="Imagen del usuario"
              className="w-8 h-8 rounded-full mx-auto mb-1"
            />
            Bienvenido {user.given_name}
          </button>
        ) : (
          <button>
            <i className="fa-solid fa-user"></i>
          </button>
        )}

        <button>
          <i className="fa-solid fa-bag-shopping"></i>
        </button>
      </div>
    </div>
  );
};
