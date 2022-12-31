import React from 'react'
import '../App.css';

export default function alert(props) {
    if(props.alert==null)
    return (<div className='alerthid' id='boxalert'>
      <div className='alerttext'>
          <h3 className='alert-content'></h3>
      </div>
      <div className='runout1' id='runout'><div className='runin1' id='runin'></div></div>
  </div>);
    const g = setTimeout(()=>{
        if(document.getElementsByClassName('alertbox'))
            document.getElementById('boxalert').className='alerthid';
    },1500);
    document.getElementById('boxalert').className='alertbox'
    return (
        <div className='alertbox' id='boxalert' style={props.mode.alertC.box}>
            <div className='alerttext'>
                <h5 className='alert-content' style={props.mode.alertC.text}>{props.alert.text}</h5>
            </div>
            <div className='runout' id='runout' style={props.mode.alertC.out}><div className='runin' id='runin' style={props.mode.alertC.in}></div></div>
        </div>
        );
}
