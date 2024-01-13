/*import React, { useState } from 'react';
import './NewsForm.css'; // Make sure to import your CSS file
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const NewsForm = () => {
  const [title, setTitle] = useState('');
  const [author,setAuthor]=useState('');
  const [content, setContent] = useState('');
  const [created,setCreated]= useState('');
  const [category,setCategory]=useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleAuthorChange = (e) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e) => {
    setTitle(e.target.value);
  };
  const handleCreatedChange = (e) => {
    setTitle(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setTitle(e.target.value);
  };

  
  const handleImageChange = (e) => {
    // Handle image upload logic here
    const file = e.target.files[0];
    setImage(file);
  };

  const handleClassifyClick = () => {
    // Implement your classify button logic here
    // You can send the title, content, and image to a server for classification

    // Create FormData object
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('content', content);
    formData.append('created', created);
    formData.append('category', category);
    formData.append('image', image);

    // Example: Send formData to your server using fetch
    fetch('/api/classify', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server
        console.log(data);
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      });
  };
  const[value, setValue]=useState('')
  return (
    <div className='boxforwrite'>
    <div className="news-form">
        
      <label>Title</label>
      <input type="text"  className='title' value={title} onChange={handleTitleChange} />
      <label>Title</label>
      <input type="text"  className='title' value={title} onChange={handleTitleChange} />


      <label>Content</label>
      <div className="editorContainer">
          <ReactQuill className="editor" theme='snow' value={value} onChange={setValue} />
        </div>
       <br></br>

      
      <input type="file" onChange={handleImageChange} />
      <br></br>
      <br></br>

      <button className='classifybutton' onClick={handleClassifyClick}>Classify</button>
    </div>
    </div>
  );
};

export default NewsForm;
*/

import React, { useState } from 'react';
import './NewsForm.css'; // Make sure to import your CSS file
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NewsForm = () => {
  const [article, setArticle] = useState({
    title: "",
    author: "",
    content: "",
    created: "",
    category: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setArticle((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4400/articles", article);
      console.log("SUCESS");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='form'>
      <h1>Write your own article</h1>
      <input
        type='text'
        placeholder='Title'
        onChange={handleChange}
        name='title'
      />
      <input
        type='text'
        placeholder='Author'
        onChange={handleChange}
        name='author'
      />
      <textarea
        placeholder='Content'
        onChange={handleChange}
        name='content'
      />
      <input
        type='date'
        placeholder='Created'
        onChange={handleChange}
        name='created'
      />
      <input
        type='text'
        placeholder='Category'
        onChange={handleChange}
        name='category'
      />
      <input
        type='text'
        placeholder='Image URL'
        onChange={handleChange}
        name='image'
      />
      <button className='formbutton' onClick={handleClick}>
        Upload
      </button>
    </div>
  );

};

export default NewsForm;