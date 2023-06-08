import React, { useState } from 'react';

const Form = (props) => {
    //defining functions here
    const handleUpClick=()=>{
        let newt=text.toUpperCase();
        setText(newt);
        props.showAlert("Converted to upper case","warning");
    }
    const handleLoClick=()=>{
        let newt=text.toLowerCase();
        setText(newt);
    }
    const handleClearText=()=>{
        setText("");
    }
    const handleCopy=()=>{
        var newt=document.getElementById("myBox");
        newt.select();
        navigator.clipboard.writeText(newt.value);
    }
    const handleSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    //it provides an event parameter
    const handleOnChange=(event)=>{
        // note that without using this we will be unable to type in the textbox
        //this is beacuse, the value of text box is text, wich can only be changes with
        // the help of the setText function
        setText(event.target.value);
    }

    const [text,setText]=useState("enter text here");
    // text is a constant variabvle now,it can only be set with the help of Settext or else it cannot be changed
    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'black'}}> 
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white' ,color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} className="form-control" id="myBox" rows="8"></textarea>
                </div>
                <button onClick={handleUpClick} className='btn btn-primary mx-1'>Convert to UpperCase</button>
                <button onClick={handleLoClick} className='btn btn-primary mx-1'>Convert to LowerCase</button>
                <button onClick={handleClearText} className='btn btn-primary mx-1'>Clear Text</button>
                <button onClick={handleCopy} className='btn btn-primary mx-1'>Copy Text</button>
                <button onClick={handleSpaces} className='btn btn-primary mx-1'>Remove Extra Spaces</button>
            </div>
            <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>Could be read in {0.008*text.split(" ").length} minutes</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something to preview it here"}</p>
            </div>
        </>
    );
}

export default Form;