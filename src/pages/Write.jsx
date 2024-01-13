import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const Write = () => {
  const[value, setValue]=useState('')
 
  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='Title'/>
        <div className="editorContainer">
          <ReactQuill className="editor" theme='snow' value={value} onChange={setValue} />
        </div>
        </div>
      <div className="menu">
        <div className="item1">
          
          <input style={{display:"none"}} type='file' name="" id="file" />
          <label className="file" htmlFor='file'>Upload Image</label>
          <button className='publishButton' >
            Publish</button>
         
        </div>
        

          

        </div>
      </div>
    
  )
}

export default Write