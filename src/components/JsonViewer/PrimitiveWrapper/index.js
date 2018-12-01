import React, {Component} from 'react';

export default class PrimitiveWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editKey: false,
            editValue: false
        }
    }

    onClickKey = (event) => {
        this.setState({
            ...this.state,
            editKey: !this.state.editKey
        })
    }

    onClickValue = (event) => {
        this.setState({
            ...this.state,
            editValue: !this.state.editValue
        })
    }

    render() {
        if (!this.state.editKey && !this.state.editValue) {
            return (
                <li>
                    {this.props.name && <span class="keys" onClick={this.onClickKey}>{`${String(this.props.name)}:`} </span>}
                    <span 
                        style={{ 
                            color: (typeof this.props.value === 'string') ? 'green' : 
                                        (typeof this.props.value === 'boolean') ? '#FF8C00' : 
                                        (typeof this.props.value === 'number') ? 'red' :
                                        (this.props.value === undefined || this.props.value === null) ? 'blue' :
                                        'black'
                        }}
                        onClick={this.onClickValue}
                    >
                        {String(this.props.value)}
                    </span>    
                </li>
            );            
        } 
        else if (this.state.editKey && this.state.editValue) {
            return (
                <li>
                    <input type="key" placeholder={this.props.key}/>
                    <input type="value" placeholder={this.props.value}/>
                </li>
            );          
        }
        else if (!this.state.editKey && this.state.editValue) {
            return (
                <li>
                    {this.props.name && <span style={{ fontWeight: 700 }} onClick={this.onClickKey}>{`${String(this.props.name)}:`} </span>}
                    <input type="value" placeholder={this.props.value}/>
                </li>
            );
        }
        else {
            return (
                <li>
                    <input type="key" ref={input => this.input } placeholder={this.props.key}/>
                    <span 
                        style={{ 
                            color: (typeof this.props.value === 'string') ? 'green' : 
                                        (typeof this.props.value === 'boolean') ? '#FF8C00' : 
                                        (typeof this.props.value === 'number') ? 'red' :
                                        (this.props.value === undefined || this.props.value === null) ? 'blue' :
                                        'black'
                        }}
                        onClick={this.onClickValue}
                    >
                        {String(this.props.value)}
                    </span>   
                </li>
            );            
        }
        
    }
}
