import React from 'react';
import '../App.css';

const Profile = (props)=>{
    return(
    <div>
       <div >{props.children}</div>
       <h2>{props.bio}</h2>
       <h2>{props.profesion}</h2>
       <button 
       style={{
        backgroundColor: '#457b9d',
        border:'none',
        color: 'white',
        padding: '15px 32px',
        margin:'20px',
        textAlign: 'center',
        fontWeight:'bold',
        display: 'inline',
        fontSize: '16px',}}
        onClick={()=> props.handleName(props.fullName)} > Click me </button>
      
    </div>
    );
    }

    Profile.defaultProps = {
        fullName:  "User Name",
        bio: "Hello!",
        profesion: "Robot!",
      };
      
    export default Profile;