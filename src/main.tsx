import { BrowserRouter } from "react-router";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./utils/i18n.ts";
import { AuthProvider } from "./contexts/AuthContext";
import { EventProvider } from "./contexts/EventContext.tsx";
import { CartProvider } from "./contexts/CartContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <EventProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </EventProvider>
  </AuthProvider>,
);
