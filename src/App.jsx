import React from 'react'
import SideBar from './components/SideBar'
import DashBoard from './components/DashBoard'
import Schedules from './components/Schedules'
import '../src/css/dashboard.css';
import '../src/css/schedule.css';
import '../src/css/sidebar.css';
import '../src/app.css';
import '../src/index.css';

const App = () => {
  return (
    <div className='AppBar'>
     <SideBar/>
    <DashBoard/>
<Schedules/>
    </div>
  )
}

export default App