import './App.css';
import { BrowserRouter as Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from './Componentt/Navbar/Navbar';
import Home from './Componentt/Home/Home';
import User from './Componentt/User/User';
import Post from './Componentt/Post/Post';

function App() {
  return (
    <Navbar>

      <BrowserRouter>

        <Routes>
          
          <Route exact path="/" element={<Home />} />
          <Route exact path="/users/:userId" element={User}></Route>
          
        
        </Routes>


      </BrowserRouter>
    </Navbar>



  );
}

export default App;