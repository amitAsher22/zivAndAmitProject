//// pages + components
import NotFound from "./components/NotFound";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
// import EmailStart from "./components/EmailStart";


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";





function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
         <Route path="/" element={<Page1/>}/> 
         <Route path="/page2" element={<Page2/>}/> 
         <Route path="/page3" element={<Page3/>}/> 
         <Route path="*" element={<NotFound/>}/> 
    </Routes>
    </BrowserRouter>
     
      
     
    </div>
  );
}

export default App;
