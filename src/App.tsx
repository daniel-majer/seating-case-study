import "./App.css";
import { Route, Routes } from "react-router";

import { Main } from "./ui/Main";
import { Checkout } from "./pages/Checkout";
import { Error } from "./pages/Error";
import { lazy, Suspense } from "react";
import { SpinnerFullPage } from "./ui/SpinnerFullPage";

const AppLayout = lazy(() => import("./ui/AppLayout"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  return (
    <Suspense fallback={<SpinnerFullPage />}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Main />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  );
}

export default App;
