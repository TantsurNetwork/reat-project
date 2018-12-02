import React, { Component } from 'react';

export default class ArrayWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wrapped: true
        }
    }

    rewrap = () => this.setState({
        wrapped: !this.state.wrapped
    })

    render() {
        const { length, parentKey, result } = this.props;
        const { wrapped } = this.state;

        return (
            <ul>
                <span onClick={this.rewrap} className={`keys array-keys ${wrapped ? 'wrapped' : 'opened'}`}>
                    {`${parentKey}: Array - [${length}] `}
                </span>
                {
                    wrapped
                        ? null
                        : <span>{result}</span>
                }
            </ul>
        )
    }

}