import Home from "./components/Home.tsx"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./components/Projects.tsx";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/project" Component={Projects} />
      </Routes>
    </Router>
    </>
  )
}

export default App
