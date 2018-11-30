import React, {Component} from 'react'

export default class ConvertButton extends Component{
    onClick = (event) => {
        try {
            const parsedValue = JSON.parse(this.props.value)
            console.log("PARSER -", this.props.value, parsedValue)
            this.props.actions.editorChangeSuccess(parsedValue);
            console.log('parse is ok', parsedValue)
        }
        catch (exc) {
            this.props.actions.editorChangeFailure();
            alert(exc.message);
            console.log('parse is NOT ok', exc)
        }
    }

    render() {
        return (
            <button onClick={this.onClick}>{this.props.children}</button>
        )
    }
}