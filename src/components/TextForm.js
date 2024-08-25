import React, { useState } from 'react';
import {marked} from 'marked';

export default function TextForm(props) {
    const handleOnChange = (event) => {
        setText(event.target.value);
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

    const [text, setText] = useState('Enter text here');

    const getMarkdownText = () => {
        let rawMarkup = marked(text);
        return { __html: rawMarkup };
    }

    return (
        <>
            <div className="container" style={{color: props.mode==='dark' ? 'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"></label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? 'grey':'white', color:props.mode==='dark' ? 'white':'#042743'}} id="myBox" rows="8"></textarea>
                </div>

                <button className="btn btn-primary" onClick={handleClearButton}>Clear All</button>
                <button disabled={text.length===0} className="btn btn-primary" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark' ? 'white':'#042743'}}>
                <h2>Preview</h2>
                <div dangerouslySetInnerHTML={getMarkdownText()} />
            </div>
        </>
    );
}
