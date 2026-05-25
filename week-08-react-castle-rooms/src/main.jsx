import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MessageProvider } from "./contexts/messageContext/MessageProvider";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );

createRoot(document.getElementById("root")).render(
  <MessageProvider>
    <App />
  </MessageProvider>,
  //แสดงว่า app คือค่าที่อยู่ในตัวแปร children ของ MessageProvider-->เหมือนว่าเราส่ง react component
  //ที่ชื่อว่า App เข้าไปเป็น props ของ MessageProvider (เรียกการรส่ง jsx)
);
