import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header';
import { SingleCharacterPage } from './pages/SingleCharacterPage';
import { CharactersPage } from './pages/CharactersPage';
import { LocationsPage } from './pages/LocationsPage';
import { EpisodesPage } from './pages/EpisodesPage';
import './App.css';
import { AppLayout } from './layout/AppLayout';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path='character' element={<CharactersPage />} />
            <Route path='location' element={<LocationsPage />} />
            <Route path='episode' element={<EpisodesPage />} />
            <Route path='character/:id' element={<SingleCharacterPage />} />
            <Route path='*' element={<p style={{color: 'white'}}>404: Not found</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
