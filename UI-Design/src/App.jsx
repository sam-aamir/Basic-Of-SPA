import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Exp1 from "./experiments/Exp1_BootstrapForm"
import Exp2 from "./experiments/Exp2_BootstrapCards"
import Exp3 from "./experiments/Exp3_MaterialUI"
import Exp4 from "./experiments/Exp4_Navbar"


export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand navbar-light bg-light px-3">
        <Link className="navbar-brand" to="/">UI Lab</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/exp1">Exp-1</Link>
          <Link className="nav-link" to="/exp2">Exp-2</Link>
          <Link className="nav-link" to="/exp3">Exp-3</Link>
          <Link className="nav-link" to="/exp4">Exp-4</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/exp1" element={<Exp1 />} />
        <Route path="/exp2" element={<Exp2 />} />
        <Route path="/exp3" element={<Exp3 />} />
        <Route path="/exp4" element={<Exp4 />} />
      </Routes>
    </BrowserRouter>
  )
}
