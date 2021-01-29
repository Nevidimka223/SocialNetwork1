import './ArticlesButton.css';
import React from 'react';
import PropTypes from 'prop-types';

function ArticlesButton({switchContent}) {
    return (
        <div className='Article'>
            <button onClick ={switchContent('My Articles')}>
                <span className='ArticleText'>Article</span>
            </button>
        </div>
    );
}

ArticlesButton.propTypes = {
    switchContent: PropTypes.func.isRequired
  };

export default ArticlesButton;