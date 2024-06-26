import React from 'react';
import './MenuItem.css';
import { useNavigate} from 'react-router-dom'; // Importing the hooks from react-router-dom

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate(); // Getting the navigation function

  const handleClick = () => {
    navigate(`/${linkUrl}`);
  };

  return (
    <div className={`${size} menu-item`} onClick={handleClick}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
