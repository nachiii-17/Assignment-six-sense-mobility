import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './navbar.scss'

const Navbar = () => {
    return (
        <div className= "Navbar">
            <div className="wrapper">
            <div className="Search">
           
        <SearchIcon />
        <input className="input" type="text" placeholder="searching for..."/>
        </div>
        

<div className= "items">
    <div className= "item">
       <CalendarTodayIcon className= "icon"/>
      </div>
      <div className= "item">
       <NotificationsIcon className= "icon"/>
       </div>
    
       
       <div className= "item">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSefXPrrBFIxxSprb_Ukn4iurS7um8vhglq93YzIh4&s/"
          alt=""
          className= "avatar"
          />
       </div>
       </div>
       </div>

    

     </div>

    )
}

export default Navbar;
