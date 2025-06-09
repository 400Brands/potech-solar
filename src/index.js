import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./global-styles";
import ChatBotComponent from "./components/ChatBotComponent ";

const container = document.getElementById("root");
const root = createRoot(container);



root.render(
  <Router>
    <GlobalStyles />
    <App />
    <ChatBotComponent/>
  </Router>
);

reportWebVitals();
