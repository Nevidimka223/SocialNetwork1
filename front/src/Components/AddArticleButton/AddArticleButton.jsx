import './AddArticleButton.css';
import React from 'react';
import PropTypes from 'prop-types';

function AddArticleButton({switchContent}) {
    return (
        <div className='AddArticle'>
            <button onClick={switchContent('AddArticle')}>
                <span className='AddArticleText'>Add Article</span>
            </button>
        </div>
    );
}

AddArticleButton.propTypes = {
    switchContent: PropTypes.func.isRequired
};

export default AddArticleButton;
