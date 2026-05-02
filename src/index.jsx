import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root"); //доступ к блоку
ReactDOM.createRoot(entryPoint).render(<App />); // app - приложение
