import 'assets/css/style.css';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import Details from 'pages/Details';
import Cart from 'pages/Cart';
import Congratulation from 'pages/Congratulation';
import NotFound from 'pages/NotFound';

import Provider from "helper/hooks/useGlobalContext";

function App() {
  return (
  <Provider>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/categories/:idc" element={<Details/>} />
        <Route path="/categories/:idc/products/:idp" element={<Details/>} />
        <Route path="/cart/:idc" element={<Cart/>} />
        <Route path="/congratulation" element={<Congratulation/>} />
        <Route path="*" element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
  </Provider>
  );
}

export default App;
