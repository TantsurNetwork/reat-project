import React, { Component } from 'react'

export default class StepForwardButton extends Component {
    render() {
        const { stepForward } = this.props.actions;
        const { id, historyLength } = this.props.checkout;
        return (
            <button
                className="one-step-button"
                onClick={stepForward}
                disabled={id + 1 === historyLength ? true : false}
            >
                {this.props.children}
            </button>
        )
    }
}