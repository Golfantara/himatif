import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Icc from "./pages/Agenda/Icc";
import VisiMisi from "./pages/about/VisiMisi";
import Makrab from "./pages/Agenda/Makrab";
import PesertaI from "./pages/Agenda/PesertaI";
import PesertaM from "./pages/Agenda/PesertaM";
import Protected from "./Protected";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="Icc" element={<Icc />} />
          <Route path="Icc/PesertaI" element={<PesertaI />} />
          <Route path="Makrab" element={<Makrab />} />
          <Route path="VisiMisi" element={<VisiMisi />} />
          <Route
            path="Makrab/PesertaM"
            element={
              <Protected>
                <PesertaM />
              </Protected>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
