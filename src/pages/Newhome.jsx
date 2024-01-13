import React from 'react';
import './newhome.scss'

const NewsCard = ({ cardNumber, tag, time, title, creator }) => (
  <div className={`card card-${cardNumber}`}>
    <div className="card-img"></div>
    <a href="" className="card-link">
      <div className="card-img-hovered"></div>
    </a>
    <div className="card-info">
      <div className="card-about">
        <a className={`card-tag ${tag}`}>{tag}</a>
        <div className="card-time">{time}</div>
      </div>
      <h1 className="card-title">{title}</h1>
      <div className="card-creator">by <a href="">{creator}</a></div>
    </div>
  </div>
);

const CardContainer = () => (
  <div className="card-container">
    <NewsCard
      cardNumber={1}
      tag="News"
      time="6/11/2018"
      title="There have been a big Tesla accident at New Jersey"
      creator="Sardorbek Usmonov"
    />
    <NewsCard
      cardNumber={2}
      tag="Tech"
      time="6/07/2018"
      title="Samsung laptops are exploding again"
      creator="Tyler Platt"
    />
    <NewsCard
      cardNumber={3}
      tag="Deals"
      time="5/27/2018"
      title="Apple is having a big sale for the first time"
      creator="Timur Mirzoyev"
    />
    <NewsCard
      cardNumber={4}
      tag="Politics"
      time="5/20/2018"
      title="Net Neutrality is coming to its end"
      creator="Gregoy Trem"
    />
  </div>
);

export default CardContainer;


/*
import React, { useState, useEffect } from 'react';
import './newhome.scss';

const NewsCard = ({ cardNumber, tag, time, title, creator }) => (
  <div className={`card card-${cardNumber}`}>
    <div className="card-img"></div>
    <a href="" className="card-link">
      <div className="card-img-hovered"></div>
    </a>
    <div className="card-info">
      <div className="card-about">
        <a className={`card-tag ${tag}`}>{tag}</a>
        <div className="card-time">{time}</div>
      </div>
      <h1 className="card-title">{title}</h1>
      <div className="card-creator">by <a href="">{creator}</a></div>
    </div>
  </div>
);

const CardContainer = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_API_URL' with the actual API endpoint
    const API_URL = 'https://your-api-endpoint.com/news';

    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        // Assuming the API response is an array of news articles
        setNewsData(data);
      } catch (error) {
        console.error('Error fetching data from the API', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div className="card-container">
      {newsData.map((article, index) => (
        <NewsCard
          key={index}
          cardNumber={index + 1}
          tag={article.tag}
          time={article.time}
          title={article.title}
          creator={article.creator}
        />
      ))}
    </div>
  );
};

export default CardContainer;

*/