import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import LazyLoadHandler from "../components/LazyLoadHandler/LazyLoadHandler";
import PrivateRoute from "./PrivateRoute";

const Home = lazy(() => import("../pages/Home/Home"));
const Auth = lazy(() => import("../pages/Auth/Auth"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const TextEditor = lazy(() => import("../pages/TextEditor/TextEditor"));
const MyDocs = lazy(() => import("../pages/MyDocs/MyDocs"));

function AllRoutes() {
  return (
    <LazyLoadHandler>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <PrivateRoute>
                <Home />
            </PrivateRoute>
          }
        />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/docs/:id"
          element={
            <PrivateRoute>
              <TextEditor />
            </PrivateRoute>
          }
        />
        <Route
          path="/my-docs"
          element={
            <PrivateRoute>
              <MyDocs />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LazyLoadHandler>
  );
}

export default AllRoutes;
