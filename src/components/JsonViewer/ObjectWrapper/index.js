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
        const { wrapped } = this.state;

        if (parentKey) {
            return (
                <ul>
                    <span
                        className={`keys object-keys ${wrapped ? 'wrapped' : 'opened'}`}
                        onClick={this.rewrap}
                    >
                        {`${parentKey}: Object - {${length}} `}
                    </span>
                    {
                        wrapped
                            ? null
                            : result
                    }
                </ul>
            )
        }
        else {
            return (
                <ul className={'root-list'}>
                    <span
                        className="keys"
                        onClick={this.rewrap}
                    >
                        {`Object - {${length}} `}
                    </span>
                    {result}
                </ul>
            )
        }
    }

}