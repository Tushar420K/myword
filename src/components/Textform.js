import React,{useState} from 'react'
import '../App.css';

export default function Textform(props) {
  const [text, setText] = useState('')
  const change = (event) =>
  {
    setText(event.target.value)
  };
  const changeup = () =>
  {
    setText(text.toUpperCase())
    props.setalert({text:"Converted to Uppercase"});
  };
  const changelo = () =>
  {
    setText(text.toLowerCase())
    props.setalert({text:"Converted to Lowercase"});
  };
  const ChangeUl = () =>
  {
    let t = text.split(' '),s = "";
    for(let i=0;i<t.length;i++)
    {
      t[i] = t[i].substring(0,1).toUpperCase()+t[i].substring(1);
      s+= t[i]+' ';
    }
    setText(s);
    props.setalert({text:"Converted to This Case"});
  };
  const clear = () =>
  {
    setText('')
  };
  return (
    <div className='form-box'>
      <div className="w-75 mx-auto">
        <h3 htmlFor="exampleFormControlTextarea1" className="form-label mb-4" style={{color : props.mode.textform.backgroundColor==='white' ? '#004651' : 'white'}}>Text Area</h3>
        <textarea placeholder='Enter Text Here' value={text} style={props.mode.textform} onChange={change} className="form-control" id="exampleFormControlTextarea1" rows="12"></textarea>
      <button className='btn btn-primary my-3 mx-1' disabled={text.length === 0} style={props.mode.textformbtn} onClick={changeup}>Convert to UPPERCASE</button>
      <button className='btn btn-primary my-3 mx-1' disabled={text.length === 0} style={props.mode.textformbtn}onClick={changelo}>Convert to lowercase</button>
      <button className='btn btn-primary my-3 mx-1' disabled={text.length === 0} style={props.mode.textformbtn}onClick={ChangeUl}>Convert to This Case</button>
      <button className='btn btn-primary my-3 mx-1' disabled={text.length === 0} style={props.mode.textformbtn}onClick={clear}>Clear Text</button>
      </div>
    </div>
  )
}
