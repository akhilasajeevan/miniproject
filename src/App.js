import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Map from './Components/Map';
import MyComponent from './Components/Foreach';
function App() {
  return (
    <div>
   
<BrowserRouter>
<Routes>
  <Route path='/Login'element={<Login/>}/>
<Route path='/'element={<Home/>}/>
</Routes>

</BrowserRouter> 
   {/*
        { <Map/> }
  

    {/* <MyComponent/> */}
      {/* <Home/> */}
    </div>
  );
  
}

export default App;
