import './Avatar.css';
import UserAvatar from '../../Images/INVISIBLEMAN.png';

function AvatarPlace() {
    return (
        <div className="AvatarTheme">
            <img src={UserAvatar} alt="UserAvatar" className="AvatarImage"/>
                <span className="UserName">Vynokur Vova</span>
                <ul>
                    <li><a href="./">Profile</a></li>
                    <li><a href="./">Logout</a></li>
                </ul>
        </div>
    );
}

export default AvatarPlace;