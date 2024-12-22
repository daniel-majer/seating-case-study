import "./App.css";
import { Route, Routes } from "react-router";

import { Main } from "./ui/Main";
import { AppLayout } from "./ui/AppLayout";
import { Checkout } from "./pages/Checkout";
import { Error } from "./pages/Error";
import { Login } from "./pages/Login";

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
