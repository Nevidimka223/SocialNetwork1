import React from 'react';
import PropTypes from 'prop-types';

function ProfileComponents ({handleSubmit}) {
    return (
        <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Send" />
      </form>
    )
};

ProfileComponents.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default ProfileComponents;