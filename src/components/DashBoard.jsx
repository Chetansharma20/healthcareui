import {   Search } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
 
import React from 'react'
import humanimage from '../assets/istockphoto-153816392-1024x1024-removebg-preview.png'
import activityData from '../data/activitydata'

import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../App.css'
import '../css/responsive.css'
import { healthCards } from '../data/healthstatus';
import '../css/dashboard.css'





const DashBoard = () => {
   const barWidth = 6;
  const gap = 2;
  const daySpacing = 50
  return (



    <div className='dashboard'>

 <div className="search-bar">
       <Search color= 'darkblue'  className='search-icon' size={26} />
        <input  type="text" placeholder="     Search "  style={{color:'grey'}} />
           <FontAwesomeIcon icon={faBell} style={{ color: '#21197f', fontSize: '24px', position:'relative', right:'40px', top:'12px' }} />   
 
        
        </div>


        <div className='headers'>
        <h2 >DashBoard</h2>
         <div className="week-select" >This Week ▼</div>
</div>

<div className="anatomy-and-cards">
  <div className='humanAnatomy'>
    <img  src={humanimage} alt="Human Anatomy" style={{ height: '310px', position:'absolute', left:'50px', top:'20px' }} />

    <div className='healthyheart'>
      <FontAwesomeIcon icon={faHeart} style={{ color: 'red', fontSize: '15px' }} /> Healthly Heart
    </div>

    <div className='healthyleg'>
      <span style={{ fontSize: '15px' }}>🦵</span> Healthly leg
    </div>
  </div>

  <div className="health-cards-container">
  {healthCards.map(card => {
    let indicatorColor;
    let statusPercentage
    switch (card.status) {
      case 'Healthy':
        indicatorColor = '#973433';
        statusPercentage = 75;
        break;
      case 'Checkup Needed':
        indicatorColor = '#7cd1c2';
        statusPercentage = 65;
        break;
      case 'Issue Detected':
        indicatorColor = '#fd7a5b';
        statusPercentage = 60;
        break;
      default:
        indicatorColor = 'gray';
        statusPercentage = 0;
    }
    

    return (
      <div key={card.id} className="card">
        <div>
       
          <h3><span>{card.icon}</span>{card.title}</h3>
        </div>
        <p style={{fontSize:"small", color:'grey', position:'relative', left:"20px"}}>{card.date}</p>
        <div className='status-bar-container'>
         <div className="status-bar"
           style={{ width: `${statusPercentage}%`, backgroundColor: indicatorColor }}>
         
        </div>
        </div>
      </div>
    );
  })}
</div>
 <div className='details'>Details →</div>
</div>


<div>
 
<div className='activity' style={{ width: '100%', height: 140, background: '#f7f9fd', borderRadius: '12px', padding: '15px 8px',marginTop:'20px', marginRight:'55px' }}>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
    <h4 style={{ color: '#1a237e', margin: 0, lineHeight: '1' }}>Activity</h4>
    <p style={{ fontSize: '13px', color: '#777', margin: 0 }}>3 appointments on this week</p>
  </div>

  <div style={{ width: '100%', overflowX: 'auto' }}>
    <svg width={activityData.length * daySpacing + 100} height="130">
      {/* Bars */}
      {activityData.map((day, dayIndex) =>
        day.bars.map((bar, barIndex) => {
          const x = 50 + dayIndex * daySpacing + barIndex * (barWidth + gap);
          return (
            <rect
              key={`${dayIndex}-${barIndex}`}
              x={x}
              y={bar.offsetY + 10}  
              width={barWidth}
              height={bar.height}
              fill={bar.fill}
              rx={2}
            />
          );
        })
      )}

   
      {activityData.map((day, index) => (
        <text
          key={`label-${index}`}
          x={50 + index * daySpacing + 10}
          y={120}
          textAnchor="middle"
          fontSize="12"
          fill="#333"
        >
          {day.day}
        </text>
      ))}
    </svg>
  </div>
</div>



   

</div>

    </div>
    
  )
}

export default DashBoard