import React from 'react';

interface ButtonProps {
    onClick(...args: unknown[]): unknown;
    label: string;
}

export default class Button extends React.Component<ButtonProps> {
    render() {
        return (
            <button className="btn code" onClick={this.props.onClick}>
                {this.props.label}
            </button>
        );
    }
}