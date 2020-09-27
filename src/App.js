import React from 'react';
import './App.css';
import Profile from './Profile/Profile';
import image from './mon_image.jpg';
import PropTypes from 'prop-types';



function App() {
    const fullName= 'Meriem Souissi'
    const bio='Thanks God!'
    const profesion='Web Developer'

    const handleName=(e)=> {
        return (alert(e) );
     }

return (
    <div className="App" style={{padding:20}}>
      <Profile fullName={fullName} bio={bio} profesion={profesion} handleName={handleName}>
      <img src={image} style={{height:500 , boxShadow: '0px 5px 10px 0px #457b9d'}}/>
      </Profile>
    </div>
  );
}

Profile.PropTypes={
  fullName:PropTypes.string,
  bio:PropTypes.string,
  profesion:PropTypes.string,
  handleName:PropTypes.func,
}

export default App;

