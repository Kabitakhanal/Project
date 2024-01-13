import React from 'react'
import {Link} from 'react-router-dom'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://www.taylorswiftweb.net/wp-content/uploads/2023/08/1989taylorsversion-710x300.jpg" alt=""/>
        <div className="user">
          <img src="https://scontent.fktm17-1.fna.fbcdn.net/v/t1.6435-9/118516432_2037518213045167_4173629095027840717_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=be3454&_nc_ohc=EKP8f7MIZXIAX-dQ8AN&_nc_ht=scontent.fktm17-1.fna&oh=00_AfAFeU2tmyXTn3EvStXjTkBNVzn80XZIfPJwcQ63U88rSA&oe=6559ED21" alt=""/>
          <div className="info">
            <br />
            <span>Kabita</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={'/write?edit=2'}>
            <img src={Edit} alt=""/>
            </Link>
            <img src={Delete} alt=""/>
          </div>
        </div>
        <h1>1989(Taylor's Version) OUT SOON!!!</h1>
        <p>
          <p>
        On October 27th, something extraordinary is happening in the world of music. Taylor Swift, the iconic singer-songwriter, is re-releasing her album "1989" in her own re-recorded version, known as "1989 (Taylor's Version)." This release holds immense significance for both Taylor and her dedicated fanbase.
        <br />
        <br />
        "1989 (Taylor's Version)" is a labor of love and reclamation. Taylor Swift is taking back control of her music and her art. With the re-recorded version of this groundbreaking album, she regains ownership and creative authority over her work. This is a powerful statement of artist empowerment, asserting that creators should have the final say in their own legacy.
        <br />
        <br />

        For fans, this is not just a musical event; it's a celebration of loyalty and unwavering support. It's a chance to relive the magic of "1989" with a fresh perspective while honoring Taylor's artistic journey. It's a moment to stand in unity with an artist who has faced and overcome many challenges in her career.
       <br />
       <br />
       In summary, the release of "1989 (Taylor's Version)" on October 27th represents an artist reclaiming her work, a community celebrating their connection with her, and a milestone in the ongoing conversation about artistic rights and ownership in the music industry.
       </p>
       </p>
      </div>
      <Menu/>
    </div>
  );
};

export default Single;