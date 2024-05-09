import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
    render() {
        return (
            <button className="btn code" onClick={this.props.onClick}>
                {this.props.label}
            </button>
        );
    }
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
};