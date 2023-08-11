import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CharacterPage } from './pages/CharacterPage';
import './App.css';
import { AppLayout } from './layout/AppLayout';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path='character/:id' element={<CharacterPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
