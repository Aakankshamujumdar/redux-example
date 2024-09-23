import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home"
import Checkout from "./pages/Checkout"
import { Provider } from 'react-redux';
import store from './redux/Store';




function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/checkout" element={<Checkout/>}/>
     </Routes>
    </BrowserRouter>
    </Provider>
  
  );
}

export default App;
