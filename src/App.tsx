import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./lib/theme";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Jornada from "./pages/Jornada";
import Agenda from "./pages/Agenda";
import Exames from "./pages/Exames";
import Ultrassons from "./pages/Ultrassons";
import Medicacoes from "./pages/Medicacoes";
import PlanoDeVoo from "./pages/PlanoDeVoo";
import Arquivos from "./pages/Arquivos";
import Tarefas from "./pages/Tarefas";
import Fiorela from "./pages/Fiorela";
import Medico from "./pages/Medico";
import Configuracoes from "./pages/Configuracoes";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/jornada" element={<Jornada />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/exames" element={<Exames />} />
            <Route path="/ultrassons" element={<Ultrassons />} />
            <Route path="/medicacoes" element={<Medicacoes />} />
            <Route path="/plano-de-voo" element={<PlanoDeVoo />} />
            <Route path="/arquivos" element={<Arquivos />} />
            <Route path="/tarefas" element={<Tarefas />} />
            <Route path="/fiorela" element={<Fiorela />} />
            <Route path="/medico" element={<Medico />} />
            <Route path="/configuracoes" element={<Configuracoes />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
