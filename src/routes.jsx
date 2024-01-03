import { BrowserRouter, Route, Routes } from "react-router-dom";
 import PerfilAny from "./components/PerfilAny";
 import PerfilError from "./components/PerfilError";
 import Home from "./components/Home";
 
 export default function Rotas({ card2, logotipo }) {
   return (
     <BrowserRouter>
       <Routes>
         <Route
           path="/"
           element={<Home card2={card2} logotipo={logotipo} />}
         />
         <Route path="/PerfilAny" element={<PerfilAny />} />
         <Route path="/PerfilError" element={<PerfilError />} />
       </Routes>
     </BrowserRouter>
   );
 }