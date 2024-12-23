import { BrowserRouter } from "react-router";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext";
import { EventProvider } from "./contexts/EventContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <EventProvider>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </EventProvider>,
);
