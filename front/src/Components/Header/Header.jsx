import './Header.css';
import Logo from '../Logo/Logo';
import AddArticle from '../ArticleButton/ArticleButton';
import AvatarPlace from '../Avatar/Avatar';

function Header() {
    return (
        <div className="header">
            <Logo />
            <AddArticle />
            <AvatarPlace />
        </div>
    );
}

export default Header;