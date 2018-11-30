import React, { Component } from 'react'

export default class StepBackButton extends Component {
    render() {
        const { stepBack } = this.props.actions;
        const { id } = this.props.checkout;
        return (
            <button
                className="one-step-button"
                onClick={stepBack}
                disabled={!id || id === -1 ? true : false}
            >
                {this.props.children}
            </button>
        )
    }
}