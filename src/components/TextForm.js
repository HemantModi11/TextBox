import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase', 'success');
    }

    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase', 'success');
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleClearButton = () => {
        let newText = '';
        setText(newText);
        props.showAlert('Text area cleared', 'success');
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text,setText] = useState('Enter text here');
  return (
    <>
        <div className="container" style={{color: props.mode==='dark' ? 'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <label htmlFor="myBox" className="form-label"></label>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? 'grey':'white', color:props.mode==='dark' ? 'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>

            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary" onClick={handleDownClick}>Convert to Lowercase</button>
            <button className="btn btn-primary" onClick={handleClearButton}>Clear All</button>
            <button disabled={text.length===0} className="btn btn-primary" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark' ? 'white':'#042743'}}>
            <h1>Your Text Summary</h1>
            <p>{text.length===0? '0':text.split(" ").length} Words, {text.length} Characters. You can read this text in {text.length===0? '0':0.007 * text.split(" ").length} minutes </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview it here"}</p>
        </div>
    </>
  )
}
