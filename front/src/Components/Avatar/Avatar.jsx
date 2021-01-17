import './Avatar.css';
import UserAvatar from '../../Images/INVISIBLEMAN.png';
import PropTypes from 'prop-types';

function AvatarPlace({userName}) {
    return (
        <div className="AvatarTheme">
            <img src={UserAvatar} alt="UserAvatar" className="AvatarImage"/>
                <span className="UserName">{userName}</span>
                <ul>
                    <li><a href="./">Profile</a></li>
                    <li><a href="./">Logout</a></li>
                </ul>
        </div>
    );
}

AvatarPlace.propTypes = {
    userName: PropTypes.string
}

AvatarPlace.defaultProps = {
    userName: 'Name Surname'
}

export default AvatarPlace;