import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Navbar from "./components/ui/feature/Navbar";
import NoteForm from "./component/NoteForm";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/noteForm" element={<NoteForm />}></Route>
      </Routes>
    </div>
  );
};

export default App;
