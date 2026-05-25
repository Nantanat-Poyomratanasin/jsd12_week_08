import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { MessageProvider } from "./contexts/messageContext/MessageProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// createRoot(document.getElementById("root")).render(
//   <MessageProvider>
//     <App />
//   </MessageProvider>,
// );
