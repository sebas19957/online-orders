import { BrowserRouter } from "react-router-dom";

import "./App.css";

import { AppTheme } from "./theme/AppTheme";

import AppRoutes from "./routes";

import SnackbarTheme from "./theme/SnackbarTheme";

function App() {
  return (
    <SnackbarTheme>
      <BrowserRouter>
        <AppTheme>
          <AppRoutes />
        </AppTheme>
      </BrowserRouter>
    </SnackbarTheme>
  );
}

export default App;
