import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";

import './App.css';
import Home from './pages/Home/Home';
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
