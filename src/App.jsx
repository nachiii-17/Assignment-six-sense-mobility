import React, { Component } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import Widget from './components/widget/Widget';

import './App.scss';
import EvStationIcon from '@mui/icons-material/EvStation';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';


// Removed logo since we don't need it anymore
import './App.scss';
class App extends Component {
  render() {
    return (
      <div className="home">
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widget icon={<EvStationIcon />} title={"Fuel Usage"} amount={"6,548L"}/>
            <Widget icon={<FmdGoodIcon />} title={"Distance"} amount={"31,875L"}/>
            <Widget icon={<BrowseGalleryIcon/>} title={"Ideal time"} amount={"1h:22m:18s"}/>
          </div>
          </div>

        </div>
      
      
    
    );
  }
}
export default App;