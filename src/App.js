import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CharacterPage } from './pages/CharacterPage';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
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
