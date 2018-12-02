import React, {Component} from 'react';
import PrimitiveWrapper from './PrimitiveWrapper';
import ArrayWrapper from './ArrayWrapper';
import ObjectWrapper from './ObjectWrapper';


export default class JsonViewer extends Component {

    constructor(props) {
        super(props);

        this.typeHandlers = {
            primitiveTypeComponent: (value, key, nestingLevel) =>
                <PrimitiveWrapper value={value} name={key} nestingLevel={nestingLevel}/>,
        
            objectTypeComponent: (struct, parentKey, nestingLevel) => {
                let result = [];
        
                for (let key in struct) {
                    result.push(this.typeChecker(struct[key], key, nestingLevel + 1))
                }
        
                return (
                    <ObjectWrapper parentKey={parentKey} result={result} length={Object.keys(struct).length}/>
                )
            },
        
            arrayTypeComponent: (struct, parentKey, nestingLevel) => {
                let result = [];
        
                for (let key in struct) {
                    result.push(this.typeChecker(struct[key], key, nestingLevel + 1))
                }
        
                return (
                    <ArrayWrapper parentKey={parentKey} result={result} length={Object.keys(struct).length}/>
                )
            }
        }
    }

    typeChecker(value, key, nestingLevel) {

        !nestingLevel && (nestingLevel = 0)
        alert(nestingLevel)
        if (value instanceof Array) {
            return this.typeHandlers.arrayTypeComponent(value, key, nestingLevel);
        }
        else if (value instanceof Object) {
            return this.typeHandlers.objectTypeComponent(value, key, nestingLevel);
        }
        else {
            return this.typeHandlers.primitiveTypeComponent(value, key, nestingLevel)
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