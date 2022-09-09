import React from 'react'
import Logo from '../../imgs/logo1.jpg'
import './Sidebar.scss'

import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const Sidebar = () => {
  return (
    <div className="Sidebar">
      
      <div className="top">
      <LocalGasStationIcon/>
        <span className="logo">Fuel</span>
        </div>
        <hr />
      <div className="center">
        <ul>
          <li>
            <DashboardIcon/>
            <span>Dashboard</span>
            </li>
            
            <li>
            <LocalGasStationIcon/>
            <span>Fuel efficiency</span>
            </li>
            <li>
            <DocumentScannerIcon/>
            <span>Documents</span>
            </li>
            <li>
            <MessageOutlinedIcon/>
            <span>Messages</span>
            </li>
            
            <li>
            
              <SettingsIcon/>
            <span>settings</span>
            </li>
            
            <li>
              <CalendarMonthIcon/>
            <span>Calendar</span>
            </li>
           

            <li>
              <LocalPhoneIcon/>
            <span>Help centre</span>
            </li>
        </ul>
      </div>
      
        
    </div>
  )
}

export default Sidebar