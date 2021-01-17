import './Body.css';
import React from 'react';
import AddArticleComponents from '../BodyComponents/AddArticleComonents';
import ArticleComponents from '../BodyComponents/ArticleComponents';
import ProfileComponents from '../BodyComponents/ProfileComponents';
import PropTypes from 'prop-types';

function Body({bodyContent, handleSubmit}) {
    function switchPages (bodyContent) {
        if (bodyContent==='My Articles'){
            return <ArticleComponents />
        }
        else if (bodyContent==='AddArticle'){
            return <AddArticleComponents />
        }
        else if (bodyContent==='My Profile'){
            return <ProfileComponents handleSubmit={handleSubmit} />
        }
        else {
            return bodyContent
        }
    }
    return (
        <div>
            {switchPages(bodyContent)}
        </div>
    )
}

Body.propTypes = {
    bodyContent: PropTypes.string
}

Body.defaultProps = {
    bodyContent: null
}

export default Body;
