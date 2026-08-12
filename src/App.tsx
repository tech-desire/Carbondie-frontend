import { Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      
      {/* <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} /> */}
    </Routes>
  )
}

export default App