import React, { Component } from 'react';
import { render } from 'react-dom';
import AceEditor from 'react-ace';
import brace from 'brace';
import './styles.css'

import 'brace/mode/json';
import 'brace/theme/monokai';

export default class JsonEditor extends Component {

    onChange = (value) => {
        this.props.actions.sendEditorValue(value)
    }

    render() {
        return (
            <AceEditor
                mode="json"
                theme="monokai"
                name="editor"
                onChange={this.onChange}
                highlightActiveLine={true}
                fontSize={18}
                value={this.props.value || ""}
            />
        )
    }
}
