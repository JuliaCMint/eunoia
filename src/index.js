import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

// dev-y5bxvryb4r2kvzzn.us.auth0.com
// CXIoF9b7ZJXCiezxfzeAtT4oIc0Tpxek

root.render(
  <Auth0Provider
    domain='dev-y5bxvryb4r2kvzzn.us.auth0.com'
    clientId='CXIoF9b7ZJXCiezxfzeAtT4oIc0Tpxek'
    authorizationParams={{
      redirect_uri: window.location.origin,
      cacheLocation: "localstorage",
    }}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
