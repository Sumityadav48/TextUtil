import React, {useState} from "react";



function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("UpperCase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () =>{
      // console.log("UpperCase was Clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
  }
    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);

    }
    const [text, setText] = useState('Enter text here'); 
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
    </div>

    <div className="container my-3">
        <h4>Your text summary</h4>
        <p>{text.split(" ").length} words & {text.length} characters</p>
        <p>{0.008 * text.split(" ").length } Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  );
}

export default TextForm;
