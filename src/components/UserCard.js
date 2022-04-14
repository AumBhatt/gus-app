import React, { useState } from 'react';
import './UserCard.css'

const UserCard = (props) => {
    return(
        <div className='user-card-wrapper'>
            <img className='gh-avatar-img' src={props.userData.avatar_url}></img>
            <div className='inner-card-text-wrapper'>
                <div className='gh-username'>{props.userData.login}</div>
                <input className='show-more-btn' type="button" value="show more" />
            </div>
        </div>
    );
};

export default UserCard;