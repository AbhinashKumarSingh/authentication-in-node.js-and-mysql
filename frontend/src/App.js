
import './App.css';
import HomeScreen from './Pages/Homescreen';
import Register from './Pages/Register';
import {Routes,Route} from 'react-router-dom'
import Login from './Pages/Login';
import Home from './Pages/Home';
import Welcome from './Pages/Welcome';

function App() {
  
  return (
    <div className="App">
      <HomeScreen />

      <Routes>

        <Route path='/login' element={<Login />}></Route>
        <Route path={ '/userWelcome'} element={<Welcome />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route exact path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
