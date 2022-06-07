import "./index.css";
import App from "./App";
import React from "react";
import { render } from "react-dom";
import { AuthProvider } from "@asgardeo/auth-react";

const Index = () => (
  <AuthProvider
    config={{
      signInRedirectURL: "http://localhost:3000",
      signOutRedirectURL: "http://localhost:3000",
      clientID: "wiDGyfgzwOYsbF7gJAVvwSZ9lE8a",
      baseUrl: "https://api.asgardeo.io/t/sudam",
      scope: ["openid", "profile"],
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>
);

render(<Index />, document.getElementById("root"));
