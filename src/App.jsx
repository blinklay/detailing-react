import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
