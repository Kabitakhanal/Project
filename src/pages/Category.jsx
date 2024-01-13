/*import React from 'react'
import { useParams } from 'react-router-dom';

const Category = () => {
    const { id } = useParams();
    return (
        <div className='category'>
          <h2>Category {id} Articles</h2>
          {/* Display the news articles here 
*/


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Category = () => {
    const { id } = useParams();
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Use axios to make a GET request to fetch all articles for the given category ID
        axios.get(`http://localhost:4400/articles`, {
            params: {
                category: id,
            },
        })
        .then(response => setArticles(response.data))
        .catch(error => console.error('Error fetching articles:', error));
    }, [id]);

    return (
        <div className='category'>
            
            <ul>
                {articles.map(article => (
                    <li key={article.id}>
                      <h1>Category : {article.category}</h1>
                      <img src={article.image}/>
                        <h3>Title:{article.title}</h3>
                        <span>Author:{article.author}</span>
                        
                        {/* Add more details as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Category;