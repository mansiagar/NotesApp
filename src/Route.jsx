import { Route, Routes } from "react-router-dom";
import App from "./App";
import NoteForm from "./component/NoteForm";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/note" element={<NoteForm />}></Route>
      </Routes>
    </div>
  );
};

export default Routing;
