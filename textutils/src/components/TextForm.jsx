import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="constainer" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="10"
            style={{backgroundColor : props.mode === 'dark' ? '#191919' : 'white', color : props.mode === 'dark' ? 'white' : 'black'}}
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Clear Text
        </button>
      </div>

      <div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Your text summary</h2>
        <p className="text-warning">
          {text.trim() === ""
            ? "0 Words and 0 Characters"
            : `${text.split(" ").length} Words and ${text.length} Characters`}
        </p>
        <p className="text-info">
          {text.trim() === ""
            ? "0 Minutes to read"
            : `${0.008 * text.split(" ").length} Minutes to read`}
        </p>
      </div>

      <div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text: "Nothing To Preview"}
        </p>
      </div>
    </>
  );
}
