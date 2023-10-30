import { BrowserRouter } from "react-router-dom";

import "./App.css";

import { AppTheme } from "./theme/AppTheme";

import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <AppTheme>
        <AppRoutes />
      </AppTheme>
    </BrowserRouter>
  );
}

export default App;
