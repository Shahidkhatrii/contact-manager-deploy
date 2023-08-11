import React, { lazy, Suspense } from "react";
import { Skeleton } from "@mui/material";
import "./App.css";
import ProtectedRoute from "./utils/ProtectedRoutes";
import { ContactCrudContextProvider } from "../context/ContactsCrudContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ContactListSkeleton from "./ContactListSkeleton";
import CardSkeleton from "./CardSkeleton";
import DetailCardSkeleton from "./DetailCardSkeleton";
const Header = lazy(() => import("./Header"));
const ContactDetails = lazy(() => import("./ContactDetails"));
const EditContact = lazy(() => import("./EditContact"));
const AddContact = lazy(() => import("./AddContact"));
const Signup = lazy(() => import("./auth/Signup"));
const ContactList = lazy(() => import("./ContactList"));
const Login = lazy(() => import("./auth/Login"));

function App() {
  return (
    <>
      <Router>
        <Suspense
          fallback={
            <Skeleton
              variant="rectangular"
              sx={{ bgcolor: "grey.200" }}
              animation="wave"
              height={60}
            />
          }
        >
          <Header />
        </Suspense>

        <Toaster position="bottom-center" toastOptions={{ duration: 2000 }} />
        <div className="ui container">
          <ContactCrudContextProvider>
            <Routes>
              <Route
                path="/signup"
                element={
                  <Suspense fallback={<CardSkeleton />}>
                    <Signup />
                  </Suspense>
                }
              />
              <Route
                path="/login"
                element={
                  <Suspense fallback={<CardSkeleton />}>
                    <Login />
                  </Suspense>
                }
              />
              <Route
                path="/"
                element={
                  <Suspense fallback={<CardSkeleton />}>
                    <Login />
                  </Suspense>
                }
              />
              <Route
                path="/Add"
                exact
                element={
                  <ProtectedRoute>
                    <Suspense
                      fallback={
                        <div style={{ paddingTop: "3.5rem" }}>
                          <ContactListSkeleton
                            amount={3}
                            height={80}
                            styleHeight={5}
                          />
                        </div>
                      }
                    >
                      <AddContact />
                    </Suspense>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/contactlist"
                element={
                  <ProtectedRoute>
                    <Suspense
                      fallback={
                        <>
                          <Skeleton
                            height={120}
                            animation="wave"
                            sx={{ bgcolor: "grey.200" }}
                          />
                          <ContactListSkeleton
                            amount={8}
                            height={100}
                            styleHeight={5}
                          />
                        </>
                      }
                    >
                      <ContactList />
                    </Suspense>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/edit"
                exact
                element={
                  <ProtectedRoute>
                    <Suspense
                      fallback={
                        <div style={{ paddingTop: "3.5rem" }}>
                          <ContactListSkeleton
                            amount={3}
                            height={80}
                            styleHeight={5}
                          />
                        </div>
                      }
                    >
                      <EditContact />
                    </Suspense>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/contact/:id"
                exact
                element={
                  <ProtectedRoute>
                    <Suspense fallback={<DetailCardSkeleton />}>
                      <ContactDetails />
                    </Suspense>
                  </ProtectedRoute>
                }
              />
            </Routes>
          </ContactCrudContextProvider>
        </div>
      </Router>
    </>
  );
}

export default App;
