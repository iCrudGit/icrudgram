
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddPost from './pages/AddPost';
import Pdftemplate from './pages/Pdftemplate';
import Shares from './pages/Shares';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/addpost" element={<AddPost />}/>
          <Route path="/shares" element={<Shares />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/template" element={<Pdftemplate />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
