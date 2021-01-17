import './Header.css';
import Logo from '../Logo/Logo';
import ArticlesButton from '../ArticleButton/ArticlesButton';
import AddArticleButton from '../AddArticleButton/AddArticleButton';
import ProfileButton from '../ProfileButton/ProfileButton';
import AvatarPlace from '../Avatar/Avatar';

function Header({switchContent, userName}) {
    return (
            <div className="header">
                <Logo />
                <ArticlesButton switchContent={switchContent} />
                <AddArticleButton switchContent={switchContent} />
                <ProfileButton  switchContent={switchContent}/>
                <AvatarPlace userName={userName}/>
            </div>
        
    );
}

export default Header;