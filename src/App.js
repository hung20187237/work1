import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Test1 from "./pages/Test1/Test1";
import Test2 from "./pages/Test2/Test2";
import Test3 from "./pages/Test3/Test3";
import Test4_1 from "./pages/Test4.1/Test4_1";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test1" element={<Test1 />} />
        <Route path="/test2" element={<Test2 />} />
        <Route path="/test3" element={<Test3/>}/>
        <Route path="/test4" element={<Test4_1/>}/>
      </Routes>

    </Router>
  );
}

export default App;