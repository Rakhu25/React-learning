import React ,{useState} from 'react'

export default function Textform(props) {
 const handleUpClick =() => {
    console.log("uppercase was click" +text);
    const newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick =() => {
    console.log("uppercase was click" +text);
    const newText = text.toLowerCase();
    setText(newText)
  }
  const handleCapitalize =() => {
    console.log("capitalize was click" +text);
    let arr = text.split(' ');
    for(let i =0;i<arr.length;i++){
      arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
    }
    let newText = arr.join(' ');
    setText(newText)
  }
 
const handleSentence = () =>{
  console.log("sentence was click" +text);
   const newText = text.charAt(0).toUpperCase()+text.slice(1);
  setText(newText);
}
  const handleOnChange =(event) => {
    console.log("handle on change");
    setText(event.target.value);
  }
   const handleCopy = () =>{
    let text = document.querySelector('#mybox')
    text.select();
    navigator.clipboard.writeText(text.value); 
  }

  const handleClearClick =() => {
    console.log("uppercase was click" +text);
    const newText = '';
    setText(newText)
  }

 

  
  // Declare a new state variable, which we'll call "text"
  const [text, setText] = useState('Enter text here for convert');
   // text = "new text"; //wrong way to change state
 // setText("new text") // correct way to change state;
  return (
    <>
   <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
     <h1>{props.heading}</h1>
      <div className="mb-3">
    <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
  </div>
  <button className='btn btn-primary mx-3' onClick={handleUpClick}>UPPERCASE</button>
  <button className='btn btn-primary mx-3' onClick={handleLoClick}>lowercase</button>

  <button className='btn btn-primary mx-3' onClick={handleSentence}>sentense Case</button>
  
  <button className='btn btn-primary mx-3' onClick={handleCapitalize}>Capitalized Case</button>
  <button className='btn btn-primary mx-3' onClick={handleCopy}>copy</button>
  <button className='btn btn-primary mx-3' onClick={handleClearClick}>Clear</button>
     </div>
     <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
     <h2>about text</h2>
     <p>{text.split(" ").length} words  {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'enter something in the textbox above to previiew here'}</p>
     </div>
     </>
  )
}
