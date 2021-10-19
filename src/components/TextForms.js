import React, {useState} from 'react'


export default function TextForms(props) {
    const handleUpClick =()=>{
        // console.log("UpperCase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleLoClick =()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")

    }
    const handleTcClick = ()=> {
        let newText = text.split(" ").map((currentValue) => {
            let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
            return newText;
        });
        setText(newText.join(" "));
        props.showAlert("Converted to Titlecase", "success")

    }
    const handleClearClick =()=>{
        let newText = ' ';
        setText(newText)
        props.showAlert("Text is Cleared", "success")

    }
    const handleOnChange =(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleCopy= ()=>{
        var text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "success")


    // const handleExtraSpaces= ()=> {
    //     let newText = text.split(/[ ]+/);
    //     setText(newText.join(" "))
    // }
    
}

    const [text, setText] = useState('');    // React.com se laaya isko 
    // text = "new Text" ; // Wrong way to chnge the text
    // setText ("new Text"); // correct way to chnge the State 
    return (
        <>
        <div class="container" style={{color: props.mode==='light'?'#312d2d':'white'}}>   
            <h1>{props.heading}</h1>      
           <div className="mb-3">
           {/* <label for="myBox" class="form-label">Example textarea</label> */}
           <textarea className="form-control" 
           value ={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#312d2d':'white' , color: props.mode==='light'?'#312d2d':'white'}} id="myBox" rows="8"></textarea>
           </div>
           <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
           <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
           <button className="btn btn-primary mx-1" onClick={handleTcClick}>Convert to Titlecase</button>
           <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
           <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
           {/* <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button> */}
        </div>
        <div className="container my-3" style={{color: props.mode==='light'?'#312d2d':'white'}}>
            <h1>Your text summary</h1>
            <p >{((text.trim().split(" ")).filter(function (element) {
                    return element !== "";
                })).length} words and {text.length} characters </p>

            <p>{0.08 * text.split (" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Kuch toh likh le nalle"}</p>

        </div>
        </>
    )
}
