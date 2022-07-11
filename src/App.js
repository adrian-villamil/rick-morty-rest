import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Character from './pages/Character';
import Home from './pages/Home';

function App() {  

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/character" element={<Character />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
