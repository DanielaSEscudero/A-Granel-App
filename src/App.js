import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './Redux/store';

import Inicio from './components/Inicio/Inicio';
import Home from './components/Home/Home';


function App() {
  return (
    <Provider store={store}>
    <Router>
        <Routes>
        <>

          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/home" element={<Home />} />
          
        </>
        </Routes>
    </Router>
    </Provider>
  );
}

export default App;
