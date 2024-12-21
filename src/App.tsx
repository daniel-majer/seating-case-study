import "./App.css";
import { Route, Routes } from "react-router";

import { Main } from "./components/ui/Main";

import { AppLayout } from "./components/pages/AppLayout";
import { Checkout } from "./components/pages/Checkout";
import { Error } from "./components/pages/Error";
import { Login } from "./components/pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Main />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
