import { createRoot } from "react-dom/client";
import "./index.css";

import { Provider as ChakraProvider, Provider } from "./components/ui/provider";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";

import Routing from "./Route";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider>
        <Routing />
      </ChakraProvider>
    </BrowserRouter>
  </Provider>
);
