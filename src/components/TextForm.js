import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value) 
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

    const [text, setText] = useState(''); 
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1 className='mb-4 heading'>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control write" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn1 btn-primary mx-1 my-1 col-12 col-sm-3 col-md-4 col-lg-2 " onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn1 btn-primary mx-1 my-1 col-12 col-sm-3 col-md-4 col-lg-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 col-sm-2 col-12 col-md-3 col-lg-2" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 col-sm-2 col-12 col-md-3 col-lg-2" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 col-sm-3 col-12 col-md-4 col-lg-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3 hii" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2 className='textsummary'>Your text summary</h2>
            <p className='inner'>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p className='inner'>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2 className='textsummary'>Preview</h2>
            <p className='inner inner1'>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}