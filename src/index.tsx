import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { UI } from "./intrastructure/views/UI";
import { useCases } from "./intrastructure/config/IoC_Config";

ReactDOM.render(
   <UI useCases={useCases}/>, 
  document.getElementById("root")
);

serviceWorker.unregister();
