import Home from "./components/Home.tsx"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </Router>
    </>
  )
}

export default App
