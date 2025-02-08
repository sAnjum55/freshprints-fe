import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";

import History from "../pages/history";
import Home from "../pages/home";
import NotFound from "../pages/not-found";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<Home />} index />
      <Route element={<History />} path="history" />
      <Route element={<NotFound />} path="*" />
    </Route>
  )
);
