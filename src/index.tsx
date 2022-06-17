import "./index.css";
import App from "./App";
import React from "react";
import { render } from "react-dom";
import { AuthProvider } from "@asgardeo/auth-react";

const Index = () => (
  <AuthProvider
  config={ {
    signInRedirectURL: "http://localhost:3000",
    signOutRedirectURL: "http://localhost:3000",
    clientID: "ppVB5LnIDOkwTmiwSlS19RzEh9ga",
    baseUrl: "https://api.asgardeo.io/t/wso2staging",
    scope: [ "openid","profile" ]
    } } 
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>
);

render(<Index />, document.getElementById("root"));
