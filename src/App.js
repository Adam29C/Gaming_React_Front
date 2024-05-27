import React from "react";
import Routing from "./Components/Routes/Routing";
import { AppProvider } from "./Components/Context/CreateContext";
const App = () => {
  return (
    <AppProvider>
      <Routing />
    </AppProvider>
  );
};

export default App;
