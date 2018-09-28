import PropTypes from 'prop-types';
import React from 'react';

const Content = (props) => {
    const { children } = props;

    return (
        <main>
            { children }
        </main>
    )
}

// validate properties
Content.propTypes = {
    children: PropTypes.element.isRequired
}

export default Content; 