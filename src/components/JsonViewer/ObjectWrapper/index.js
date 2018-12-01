import React, { Component } from 'react';

export default class ObjectWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wrapped: true
        }
    }

    rewrap = () => this.setState({
        wrapped: !this.state.wrapped,
    })

    render() {
        const { length, parentKey, result } = this.props;

        return (
            <ul className={parentKey ? '' : 'root-list'}>
                <span 
                    className={`keys ${parentKey ? 'object-keys' : ''} ${this.state.wrapped && parentKey ? 'wrapped' : 'opened'}`} 
                    onClick={this.rewrap}
                >
                        {parentKey ? `${parentKey}: ` : ''} 
                        {` Object - {${length}} `}
                </span>
                {
                    this.state.wrapped && parentKey
                        ? null
                        : this.props.result
                }
            </ul>
        )
    }

}