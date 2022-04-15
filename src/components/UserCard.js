import React, { useState } from 'react';
import './UserCard.css'

const UserCard = (props) => {
    return(
        <div className='user-card-wrapper'>
            <img className='gh-avatar-img' src={props.userData.avatar_url}></img>
            <div className='inner-card-text-wrapper'>
                <div className='gh-username'>{props.userData.login}</div>
                <a
                    title='Click to see on GitHub' 
                    href={props.userData.html_url}
                    target='_blank'
                    className='gh-html-url' >
                    <span className="material-icons link-icon">link</span>
                    GitHub Profile
                </a>
            </div>
        </div>
    );
};

export default UserCard;