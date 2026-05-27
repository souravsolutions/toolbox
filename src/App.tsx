import { Route, Routes } from "react-router-dom";
import Layout from "./app/layout.tsx";
import PasswordGenerator from "./pages/password-generator/index.tsx";
import GuessWord from "./pages/guess-word/index.tsx";
import ShowAll from "./pages/show-all/index.tsx";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={<ShowAll/>}
        />
        <Route path="/password-generator" element={<PasswordGenerator />} />
        <Route path="/guess-word" element={<GuessWord />} />
      </Route>
    </Routes>
  );
};

export default App;
