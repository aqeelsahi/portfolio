import { useEffect, useState } from 'react';
import './App.css';
import Signin from './components/Signin';
import ModeSelector from './components/ModeSelector/indext';
import Main from './components/Main';
import Toast from './components/Toast';
import Cover from './components/Cover';

const App = () => {
  const [mode, setMode] = useState<string>('');

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
      {/* <Signin/> */}
      {/* <Main/> */}
      {/* <Toast
        title={'Aqeel'}
        subTitle='11 mins ago'
        text={'Hello, world! This is a toast message.'}
        closeBtn
        actionBtn={{label: 'Submit', onClick:()=> console.log('submitted')}}
      /> */}
      <Cover/>
      <ModeSelector mode={mode} setMode={setMode}/>
    </div>
  );
}

export default App;
