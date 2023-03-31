import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../components";
import {
  Home,
  Chat,
  Contact,
  Login,
  Register,
  ForgotPassword,
  SetPassword,
  VerifyAccount,
  NotFound,
  Profile,
} from "../pages";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/verify-account"
          element={
            <PublicRoute>
              <VerifyAccount />
            </PublicRoute>
          }
        />
        <Route
          path="/forgot-pwd"
          element={
            <PublicRoute>
              <ForgotPassword />
            </PublicRoute>
          }
        />
        <Route
          path="/set-password"
          element={
            <PublicRoute>
              <SetPassword />
            </PublicRoute>
          }
        />
        <Route
          path="/home"
          element={
            <Layout withFooter>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <Layout>
                <Chat />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PrivateRoute>
              <Layout withFooter>
                <Contact />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Layout withFooter>
                <Profile />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
