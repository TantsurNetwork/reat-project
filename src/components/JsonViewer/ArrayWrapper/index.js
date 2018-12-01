import React, { Component } from 'react';

export default class ArrayWrapper extends Component {
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
            <ul>
                <span onClick={this.rewrap} className={`keys array-keys ${this.state.wrapped ? 'wrapped' : 'opened'}`}>
                    {parentKey ? `${parentKey}: ` : ''}
                    {` Array - [${length}] `}
                </span>
                {
                    this.state.wrapped
                        ? null
                        : <span>{this.props.result}</span>
                }
            </ul>
        )
    }

}