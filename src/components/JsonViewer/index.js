import React, {Component} from 'react';
import ViewerElement from './ViewerElement';



export default class JsonViewer extends Component {

    constructor(props) {
        super(props);

        this.typeHandlers = {
            primitiveTypeComponent: (value, key) =>
                <ViewerElement value={value} name={key} />,
        
            objectTypeComponent: (struct, parentKey) => {
                let result = [];
        
                for (let key in struct) {
                    result.push(this.typeChecker(struct[key], key))
                }
        
                return (
                    <ul className={parentKey ? '' : 'root-list'}>
                        <span className="keys">{parentKey ? `${parentKey}: ` : ''}</span>
                        {`Object - {${Object.keys(struct).length}}`}
                        <span>{result}</span>
                    </ul>
                )
            },
        
            arrayTypeComponent: (struct, parentKey) => {
                let result = [];
        
                for (let key in struct) {
                    result.push(this.typeChecker(struct[key], key))
                }
        
                return (
                    <ul>
                        <span className="keys">{parentKey ? `${parentKey}: ` : ''}</span>
                        {`Array - [${struct.length}]`}
                        <span>{result}</span>
                    </ul>
                )
            }
        }
    }

    typeChecker(value, key) {
        if (value instanceof Array) {
            return this.typeHandlers.arrayTypeComponent(value, key);
        }
        else if (value instanceof Object) {
            return this.typeHandlers.objectTypeComponent(value, key);
        }
        else {
            return this.typeHandlers.primitiveTypeComponent(value, key)
        }
    }

    render() {
        return (
            <div className='JSON_Viewer'>
                {this.props.error || this.props.data && this.typeHandlers.objectTypeComponent(this.props.data)}
                {this.props.children}
            </div>
        )
    }
}