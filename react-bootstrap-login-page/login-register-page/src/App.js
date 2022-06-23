import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/login/login';
import Register from './components/register/register';
import Home from './components/home/home';
import './App.css';

function App() {
  const state = false //  useSelector(state => state.UserReducer);
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          {/* <Link to='/register'>Register</Link> */}
          <Routes>
            {state.user ? <Route path='/' element={<Home/>} /> :<Route path='/' element={<Login/>} /> }
            {/* <Route path='/' element={<Login/>} /> */}
            <Route path='/register' element={<Register/>} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
