import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Classifyimg from '../img/classifynews.jpg'

const Home = () => {
  const navigate=useNavigate();
  const posts=[
    {
      id:1,
      title: "October favorite recepies",
      desc:"I have compiled a list of my favorite fall desert recepies that you can try and enjoy with your friends and family!",
      img: "https://hips.hearstapps.com/goodhousekeeping/assets/18/03/1516373451-skillet-cookie-sundaes-ghk-0218.jpg"
    },
    {
      id:2,
      title: "यो एउटा नेव्स अर्तिच्ले हो",

      desc:"नेव्स नेव्स नेव्स",
      img: "https://i2-prod.mirror.co.uk/incoming/article6363218.ece/ALTERNATES/s1200b/Draco-Malfoy-Wolf.jpg"
    },
    {
      id:3,
      title: "1989(Taylor's Version) OUT SOON!!!",
      desc:"It will arrive just three months after ‘Speak Now (Taylor’s Version)’ delivered the biggest opening sales week of the year.",
      img: "https://www.udiscovermusic.com/wp-content/uploads/2023/08/1989-Taylors-Version-1024x1024.jpg"
    },
    {
      id:4,
      title: "Tilicho Trek",
      desc:"Watch Koshish Shrestha's new video about his trek to Tilicho Lake on youtube now.",
      img: "https://i.ytimg.com/vi/YAyoDNkpPBc/maxresdefault.jpg"
    },
    
  ];
  const gotowrite = () =>{
    navigate('/write')
  }
  return (
    <div className='home'>
      <div className='box1'>
      <div className="writepost">
        <div>
        <h1>Do you want to classify your own news article?</h1>
        </div>
        <div>
        <button className='writebutton' onClick={gotowrite}>Write</button>
        </div>
      </div>
      <div className='classifyimg'>
        <img src={Classifyimg}></img>
      </div>
      </div>
      <div className='separation'></div>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt=""/>
            </div>
            <div className="content">
              <Link className='link' to={'/post/${post.id}'}>
              <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <Link className='link' to={'/post/${post.id'}>
              <button >
                Read More</button>
                </Link>
              
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;
