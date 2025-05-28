import React from 'react';
import SideBarData from '../data/SideBarData';
import '../css/sidebar.css'
import '../App.css'
import '../css/responsive.css'
const SideBar = () => {
  
  const topLinks = SideBarData.filter(item =>
    ["DashBoard", "History", "Calendar", "Appointements", "Statistics"].includes(item.title)
  );
  const middleLinks = SideBarData.filter(item =>
    ["Chats", "Supports"].includes(item.title)
  );
  const bottomLink = SideBarData.find(item => item.title === "Settings");

  return (
    <div className='sidebar'>
      <h2 className='logo'>Health<span id='care'>care.</span></h2>

      <h3 className='headings'>General</h3>
      <div className='navbar'>
        {topLinks.map(item => (
          <div className='nav-link' key={item.title}>
            <item.icon className='icon' />
            <span>{item.title}</span>
          </div>
        ))}
      </div>

   
      <h3 className='headings'>Tools</h3>
      <div className='navbar'>
        {middleLinks.map(item => (
          <div className='nav-link' key={item.title}>
            <item.icon className='icon' />
            <span>{item.title}</span>
          </div>
        ))}
      </div>

      <div className='setting'>
        <div className='nav-link'>

          <bottomLink.icon className='icon' />
          <span>{bottomLink.title}</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
