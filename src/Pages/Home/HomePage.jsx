import React from 'react';
import Landing from "../landing_pages/landing";
import MenuAppBar from '../../Components/AppBar/AppBar'
const HomePage = props =>  {
    return (<div>
      <MenuAppBar title='Applications'/>
      <br/>
      <br/>
      <hr/>
        <Landing/>
    
    </div>)
}

export default HomePage;