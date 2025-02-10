import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router";

import History from "../pages/history";
import Home from "../pages/home";
import NavBar from "../components/common/navBar";
import NotFound from "../pages/not-found";

const AppRouter = () => {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route element={<Home />} index />
        <Route element={<History />} path="history" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter
