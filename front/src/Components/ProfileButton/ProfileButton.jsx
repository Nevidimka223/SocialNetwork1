import './ProfileButton.css';
import React from 'react';
import PropTypes from 'prop-types';

function ProfileButton({switchContent}) {
    return (
        <div className='Profile'>
            <button onClick={switchContent('My Profile')}>
                <span className='ProfileText'>Profile</span>
            </button>
        </div>
    );
}

ProfileButton.propTypes = {
    switchContent: PropTypes.func.isRequired
  };
  
export default ProfileButton;