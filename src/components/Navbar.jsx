import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Logo from "../img/logoo.png"
import LoginIcon from "../img/login.png"

const Navbar = () => {
  

  const navigate=useNavigate();

  const gotoHome = () =>{
    navigate('/')
  }
  const gotoLogin = () =>{
    navigate('/login')
  }

  // ... other code ...

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleCategoryClick = (categoryId) => {
    closeDropdown();
    navigate(`/category/${categoryId}`);
  };

  return (
    <div className="navbar">
      <div className='container'>
        <div className="logo">
        <img onClick={gotoHome} src={Logo} alt=""/>
        </div>

        <ul className="nav-list">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/about">About</a>
        </li>
          <li className={`nav-item ${isDropdownOpen ? 'dropdown-open' : ''}`}>
            <button onClick={toggleDropdown} className="dropdown-button">
              Categories
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <button onClick={() => handleCategoryClick(1)}>Business</button>
                </li>
                <li>
                  <button onClick={() => handleCategoryClick(2)}>Sports</button>
                </li>
                <li>
                  <button onClick={() => handleCategoryClick(3)}>Entertainment</button>
                </li>
                <li>
                  <button onClick={() => handleCategoryClick(4)}>Politics</button>
                </li>
                <li>
                  <button onClick={() => handleCategoryClick(5)}>Education</button>
                </li>
                <li>
                  <button onClick={() => handleCategoryClick(6)}>Health</button>
                </li>
               
              </ul>
            )}
          </li>
          <li>
        <div className="loginbutton">
        <img onClick={gotoLogin} src={LoginIcon} alt=""/>
        </div>
        </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;








/*const Navbar = () => {
  const navigate=useNavigate();

  const gotoHome = () =>{
    navigate('/')
  }
  const gotoLogin = () =>{
    navigate('/login')
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };



  return (
    <div className='navbar'>
      <div className='container'>
        <div className="logo">
        <img onClick={gotoHome} src={Logo} alt=""/>
        </div>

        <ul className="nav-list">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/about">About</a>
        </li>
        <li className={`nav-item ${isDropdownOpen ? 'dropdown-open' : ''}`}>
          <button onClick={toggleDropdown} className="dropdown-button">
            Categories
          </button>
          
            <ul className="dropdown-menu">
             <li>
              <Link to="/category/1"  onClick={closeDropdown}>Business</Link>
            </li>
            <li>
              <Link to="/category/2"  onClick={closeDropdown}>Sports</Link>
            </li>
            <li>
              <Link to="/category/3"  onClick={closeDropdown}>Entertainment</Link>
            </li>
            <li>
              <Link to="/category/4"  onClick={closeDropdown}>Politics</Link>
            </li>
            <li>
              <Link to="/category/5"  onClick={closeDropdown}>Health</Link>
            </li>
            <li>
              <Link to="/category/6"  onClick={closeDropdown}>Education</Link>
            </li>
            </ul>
          
        </li>
        <li>
        <div className="loginbutton">
        <img onClick={gotoLogin} src={LoginIcon} alt=""/>
        </div>
        </li>
      </ul>
        

      </div>
     
      </div>
  )
}

export default Navbar */






/*
<div className="links">
          <Link className='link' to="/?cat=art">
            <h6>ART</h6>
            </Link>
            <Link className='link' to="/?cat=movies">
            <h6>MOVIES</h6>
            </Link>
            <Link className='link' to="/?cat=books">
            <h6>BOOKS</h6>
            </Link>
            <Link className='link' to="/?cat=design">
            <h6>DESIGN</h6>
            </Link>
            <Link className='link' to="/?cat=food">
            <h6>FOOD</h6>
            </Link>

            <span>Kabita</span>
            <span>Logout</span>
            <span className='write'>
              <Link className='link' to="/write">Write</Link>
            </span>
        
        
        </div> */