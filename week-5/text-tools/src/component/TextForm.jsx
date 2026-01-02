import React, {useState}from "react"

const TextForm=() => {

    const [text,setText] = useState("");

    return(
        <div className='container my-4'>
        <form className='d-flex flex-column gap-2'>
     <label className='h2 border-bottom border-4 border-primary'>Enter some text below</label>
     <textarea>
       className='p-2'
       rows={8}
       placehoulder={(e)=>setText(e.target.value)}
     </textarea>
     <div className='d-flex gap-2'>
        <button type='button' className='btn btn-primary' onClick={()=>setText(text.toUpperCase())} >Change to uppercase</button>
        <button type='button' className='btn btn-primary' onClick={()=>setText(text.toUpperCase())} >Change to lowercase</button>
        <button type='button' className='btn btn-primary' onClick={()=>{navigator.clipboard.writeText(text)} }>Copy</button>
        <button type='button' className='btn btn-primary' onClick={()=>setText("") }></button>
     </div>
        </form>
       <div>
        <h3 className='my-3'> Text Analysis</h3>
        <p>there are {text.length}characters and {text.split("").lenth}wors in your text</p>
        <p>Time required to read : {(text.spilit("").length * 0.3).toFixed(0) }sec </p>
       </div>

        </div>
    ) 
}
export default Textform 
