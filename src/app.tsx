import {
  HashRouter,
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { USE_BROWSER_ROUTER } from "./common/constants";
import GlobalHeader from "./components/global-header";
import DashboardPage from "./pages/dashboard/dashboard-page";
import NotFound from "./pages/not-found";
import "./styles/app.scss";
import { useEffect, useState } from "react";
import { Character } from "./common/types";

export default function App() {
  const Router = USE_BROWSER_ROUTER ? BrowserRouter : HashRouter;

  const [character, setCharacter] = useState<Character>({});

  return (
    <div style={{ height: "100%" }}>
      <Router>
        <GlobalHeader />
        <div style={{ height: "56px", backgroundColor: "#000716" }}>&nbsp;</div>
        <div>
          <Routes>
            <Route index path="/" element={<DashboardPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
