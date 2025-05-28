import React from 'react'
// import {
//   calendarDays,
//   calendarDates,
//   calendarAppointments,
//   appointmentDetails,
// } from '../data/calendar';
import '../css/schedule.css'
import '../App.css'
import '../css/responsive.css'
import { weekDays, weekDates, weekAppointments } from '../data/calendar';
import { BiSolidRightArrowAlt, BiSolidLeftArrowAlt } from "react-icons/bi";
import { appointmentDetails } from '../data/appointementdetails';
import { UpcomingDetails } from '../data/Upcomingappointments';

const Schedules = () => {
    const selectedDate = "26";
  return (
  <div className='Schedules'>

<div className='top' >
    <div className="icon-button avatar-button">
        <span role="img" aria-label="avatar">🧑🏽‍🦱</span>
      </div>
          <div className="icon-button plus-button">
        <span>+</span>
      </div>



</div>
  <div className="weekly-calendar">
      <div className="calendar-header">
        <h4>October 2021</h4>
        <div className="arrows">
         
           <BiSolidLeftArrowAlt size={25} color="#1a237e" />
      <BiSolidRightArrowAlt size={25} color="#1a237e" />
        </div>
      </div>

      <div className="calendar-week">
        {weekDays.map((day, idx) => {
          const date = weekDates[idx];
          const isSelected = date === selectedDate;
          const appointments = weekAppointments[date] || ["–"];

          return (
            <div key={idx} className={`day-column ${isSelected ? 'selected' : ''}
             ${day !== 'Tues' ? 'blurred' : ''}`}>
              <div className="day-label">{day}</div>
              <div className="date-label">{date}</div>
              <div className="time-slots">
               {appointments.map((time, tIdx) => {

  const isActive = isSelected && time === "09:00";
  const isThursdayHighlight = day === "Thurs" && time === "11:00";
  const isFirstSatSun = (day === "Sat" || day === "Sun") && tIdx === 0;

  return (
    <div
      key={tIdx}
      className={`time-pill
        ${isActive ? 'active' : ''}
        ${isThursdayHighlight ? 'highlight' : ''}
        ${isFirstSatSun ? 'border-highlight' : ''}
         
      `}
    >
      {time}
    </div>
  );
})}

              </div>
            </div>
          );
        })}
      </div>
    </div>
 <div className="appointment-cards">
        {appointmentDetails.map((appointment, index) => {
             let typeClass = " ";
    if (appointment.title.includes("Dentist")) {
      typeClass = "dentist";
    } else if (appointment.title.includes("Physiotherapy")) {
      typeClass = "physio";
    }
    return(
          <div key={index} className={`appointment-card ${typeClass}`}>
            <h5>{appointment.title}<span style={{fontSize:'large', marginLeft:'35px'}}>{appointment.icon}</span></h5>
            <p>{appointment.time}</p>
             <p>{appointment.DrName}</p>
          </div>
)})}
      </div>
       <div className="schedule-container">
      <h2 className="schedule-title">The Upcoming Schedule</h2>
<div className="upcoming-schedule">
      {UpcomingDetails.map((dayItem) => (
        <div key={dayItem.day} className="day-section">
          <p className="day-label">On {dayItem.day}</p>

          <div className="box-container">
            {dayItem.list.map((item, index) => (
              <div key={index} className="mini-box">
                <span className="mini-icon">{item.icon}</span>
                <div className="mini-details">
                  <p className="mini-title">{item.title}</p>
                  <p className="mini-time">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>    </div>
    </div>

  )
}

export default Schedules