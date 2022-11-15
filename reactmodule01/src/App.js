import '@ui5/webcomponents-react/dist/Assets';
import '@ui5/webcomponents/dist/generated/json-imports/Themes';
import '@ui5/webcomponents-fiori/dist/generated/json-imports/Themes';
import "./App.css";
// import NotFound from "pages/NotFound";
// import AppBar from "components/AppBar";
// import MasterPage from "pages/MasterPage";
import LoaderComponent from "LoaderComponent";
import { ShellBar, ThemeProvider, Text} from "@ui5/webcomponents-react";
import React, { useEffect } from 'react';

import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme';


setTheme('sap_horizon');

const App = () => {
  setTheme("sap_horizon");

  return (
    <div className="App full-height">
      <ThemeProvider>
        <ShellBar
          logo={<img src="logo192.png" />}
          primaryTitle="React with UI5 Web Component"
        ></ShellBar>
        <Text></Text>
       <LoaderComponent></LoaderComponent>
       </ThemeProvider>
    </div>
  );
};

export default App;
