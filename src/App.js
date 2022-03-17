import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const [mode,setMode] = useState('dark')

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor ='gray'
    }else{
      setMode('light')
      document.body.style.backgroundColor ='#fff'
         }
  }
  return (
    <>
<Navbar title="textapp" abouttext="about textApp" mode={mode} toggleMode={toggleMode} />
<div className='container my-3'>
  <Alert alert="this is alert"></Alert>
<Textform heading="enter text to analyze"  mode={mode}></Textform>
  </div>

<About></About>
    </>
  );
}

export default App;
