import {BrowserRouter, Routes,Route} from 'react-router-dom';
import CartPage from './pages/CartPage';
import GamePage from './pages/GamePage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      

      <Routes>
        <Route path="/"  element={ <HomePage/> }/>
        <Route path="/games" element={ <GamePage/> } />
        <Route path="/cart" element={ <CartPage/>  } />

      </Routes></BrowserRouter>
    </div>
  );
}

export default App;
