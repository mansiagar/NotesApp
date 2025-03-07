import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { Provider as ChakraProvider } from "./components/ui/provider";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";

import App from "./App";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </Provider>
);
