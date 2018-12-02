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
        const {value, name, key} = this.props;
    
        if (!this.state.editKey && !this.state.editValue) {
            return (
                <li>
                    {name && <span class="keys" onClick={this.onClickKey}>{`${String(name)}:`} </span>}
                    <span 
                        style={{ 
                            color: (typeof value === 'string') ? 'green' : 
                                        (typeof value === 'boolean') ? '#FF8C00' : 
                                        (typeof value === 'number') ? 'red' :
                                        (value === undefined || value === null) ? 'blue' :
                                        'black'
                        }}
                        onClick={this.onClickValue}
                    >
                        {String(value)}
                    </span>    
                </li>
            );            
        } 
        else if (this.state.editKey && this.state.editValue) {
            return (
                <li>
                    <input type="key" placeholder={key}/>
                    <input type="value" placeholder={value}/>
                </li>
            );          
        }
        else if (!this.state.editKey && this.state.editValue) {
            return (
                <li>
                    {name && <span style={{ fontWeight: 700 }} onClick={this.onClickKey}>{`${String(name)}:`} </span>}
                    <input type="value" placeholder={value}/>
                </li>
            );
        }
        else {
            return (
                <li>
                    <input type="key" ref={input => this.input } placeholder={key}/>
                    <span 
                        style={{ 
                            color: (typeof value === 'string') ? 'green' : 
                                        (typeof value === 'boolean') ? '#FF8C00' : 
                                        (typeof value === 'number') ? 'red' :
                                        (value === undefined || value === null) ? 'blue' :
                                        'black'
                        }}
                        onClick={this.onClickValue}
                    >
                        {String(value)}
                    </span>   
                </li>
            );            
        }
        
    }
}
