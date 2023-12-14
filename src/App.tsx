import { useEffect, useState } from 'react';
import './App.css';
import Signin from './components/Signin';
import ModeSelector from './components/ModeSelector/indext';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './components/Admin';
import NotFound from './components/NotFound';

const App = () => {
  const [mode, setMode] = useState<string>('');
const currentUser = false;
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setMode(storedTheme);
    }
  }, []);

  useEffect(() => {
    if (mode) {
      document.documentElement.setAttribute('data-bs-theme', mode);
      localStorage.setItem('theme', mode);
    }
  }, [mode]);
  
  return (
    <div className={`app ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
          {/* {currentUser ? (
            <button
            type='button'
              color="secondary"
              onClick={logOut}
            >Logout</button>
          ) : null} */}
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={ <Main />} />
          <Route path="admin" element={currentUser ? <Admin /> : <Signin />} />
          <Route path="signin" element={currentUser ? <Admin /> : <Signin />} />
          <Route path="*" element={ <NotFound />} />
        </Routes>
      </BrowserRouter>

      <ModeSelector mode={mode} setMode={setMode}/>
    </div>
  );
}

export default App;
