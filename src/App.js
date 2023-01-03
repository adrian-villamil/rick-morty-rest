import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CharacterPage } from './pages/CharacterPage/CharacterPage';
import { HomePage } from './pages/HomePage/HomePage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/character/:id' element={<CharacterPage />} />
          <Route path='*' element={<p style={{color: 'white'}}>404: Not found</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
