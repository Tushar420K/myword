// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
let x=0;

function App() {
  const types = {one : {
      navbar :{
        color:'white',
        backgroundColor:'#004651',
        transition:'all 0s'
      },
      textform :{
        backgroundColor:'white',
        transition:'all 0s'
      },
      textformbtn:{
        backgroundColor:'#004651',
        transition:'all 0s'
      },
      alertC:{
        text : {color:'#004651'},
        box : {boxShadow:'3px 3px 4px 4px rgb(163, 163, 163)',backgroundColor:'white'},
        out : {backgroundColor:'white'},
        in : {backgroundColor:'#016271'}
      }
    },
    two : {
      navbar :{
        color:'white',
        backgroundColor:'black',
        transition:'all 0s'
      },
      textform :{
        color:'black',
        backgroundColor:'#cbcbcb',
        transition:'all 0s'
      },
      textformbtn:{
        backgroundColor:'black',
        transition:'all 0s'
      },
      alertC:{
        text : {color:'white'},
        box : {boxShadow:'2px 2px 3px 3px rgb(133, 133, 133)',backgroundColor:'#0A2647'},
        out : {backgroundColor:'#012a31'},
        in : {backgroundColor:'black'}
      }
    }
  }
  if(x===0)
  {
    document.body.style.backgroundColor = '#f4f4f4';
    document.title = 'Text-Utility'
    x+=1;
  }
  const [alert,setalert] = useState(null)
  const [mode,setmode] = useState(types.one)

  return (
    <div>
        {/* <Router> */}
        <Navbar title="Text-Analyzer" mode={mode} setmode={setmode} types={types} alert={alert} setalert={setalert}/>
        <Alert alert={alert} mode={mode}/>
        <Textform mode={mode} alert={alert} setalert={setalert}/>
        {/* <Routes> */}
          {/* <Route path='/' element={<Textform mode={mode} alert={alert} setalert={setalert}/>}/> */}
          {/* <Route path='/about' element={<Textform mode={mode} alert={alert} setalert={setalert}/>}/> */}
        {/* </Routes> */}
        {/* </Router> */}
    </div>
  );
}

export default App;