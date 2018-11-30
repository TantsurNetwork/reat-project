import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import * as actions from './../actions/'
import { bindActionCreators } from 'redux'
import JsonEditor from './../components/JsonEditor'
import JsonViewer from './../components/JsonViewer'
import ConvertButton from './../components/buttons/ConvertButton'
import StepBackButton from './../components/buttons/StepBackButton'
import StepForwardButton from './../components/buttons/StepForwardButton'

console.log(actions);

class App extends Component {

    componentWillMount() {
        { console.log("THIS.PROPS", this.props) }
        this.props.getJsonByKey("someKey", 2);
    }

    render() {

        const {
            sendEditorValue,
            editorChangeFailure,
            editorChangeSuccess,
            stepBack,
            stepForward
        } = this.props;
        const {
            id,
            value,
            historyLength
        } = this.props.editorState

        console.log(this.props)

        return (
            <div className="App">
                {/* <button onClick={() => this.props.getJson("someKey", 2)}>Send request</button>
                <div>{this.props.receivedJson.isFetching ? "is fetching" : "is not fetching"}, {this.props.receivedJson.error.message}</div>
                <button onClick={() => this.props.createJson("otherKey", "otherTitle", "someJSON")}>Create JSON</button>
                <div>{this.props.createdJson.isFetching ? "is fetching" : "is not fetching"}, {this.props.createdJson.error.message}</div> */}

                <div className="editors">
                    <JsonEditor
                        actions={{
                            sendEditorValue
                        }}
                        value={value}
                    />

                    <div className="tryparse-buttons">
                        <ConvertButton
                            actions={{
                                editorChangeFailure,
                                editorChangeSuccess
                            }}
                            value={value}
                        >
                            {">"}
                        </ConvertButton>
                        <ConvertButton
                            style={{ display: "block", margin: "5px auto" }}
                            actions={null}
                            value={null}
                        >
                            {"<"}
                        </ConvertButton>
                        <StepBackButton
                            actions={{stepBack}}
                            checkout={{
                                id,
                                historyLength
                            }}
                        >
                            Step Back
                        </StepBackButton>
                        <StepForwardButton
                            actions={{stepForward}}
                            checkout={{
                                    id,
                                    historyLength
                            }}
                        >
                            Step Forward
                        </StepForwardButton>
                    </div>

                    <JsonViewer data={this.props.editorState.json}></JsonViewer>
                </div>
            </div>
        );
    }
}

const
    mapStateToProps = state => ({
        createdJson: state.createJson,
        receivedJson: state.getJsonByKey,
        editorState: state.editorChanges
    }),
    mapDispatchToProps = dispatch => bindActionCreators({ ...actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

