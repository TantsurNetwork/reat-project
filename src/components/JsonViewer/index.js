import React, {Component} from 'react';
import PrimitiveWrapper from './PrimitiveWrapper';
import ArrayWrapper from './ArrayWrapper';
import ObjectWrapper from './ObjectWrapper';


export default class JsonViewer extends Component {

    constructor(props) {
        super(props);

        this.typeHandlers = {
            primitiveTypeComponent: (value, key) =>
                <PrimitiveWrapper value={value} name={key} />,
        
            objectTypeComponent: (struct, parentKey) => {
                let result = [];
        
                for (let key in struct) {
                    result.push(this.typeChecker(struct[key], key))
                }
        
                return (
                    <ObjectWrapper parentKey={parentKey} result={result} length={Object.keys(struct).length}/>
                )
            },
        
            arrayTypeComponent: (struct, parentKey) => {
                let result = [];
        
                for (let key in struct) {
                    result.push(this.typeChecker(struct[key], key))
                }
        
                return (
                    <ArrayWrapper parentKey={parentKey} result={result} length={Object.keys(struct).length}/>
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