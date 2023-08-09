import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { VetlyApp } from "./VetlyApp";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store";

// import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Auth0Provider
      domain="dev-lqnhn2ygk2i1fzv8.us.auth0.com"
      clientId="awolDJJB9jScDB56PN3UM4gPBeiZ807H"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    > */}
      <BrowserRouter>
        <VetlyApp />
      </BrowserRouter>
      {/* </Auth0Provider> */}
    </Provider>
  </React.StrictMode>
);
