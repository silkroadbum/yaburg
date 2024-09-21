import ReactDOM from "react-dom/client";
import App from "./components/app/app";
import { Provider } from "react-redux";
import { store } from "./services/store";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/normalize.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
