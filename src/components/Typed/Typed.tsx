import React, { Component } from 'react'

type TypedProps = {};
type TypedState = {
    result: number;
};
export default class Typed extends Component<TypedProps, TypedState> {
    private xRef: React.RefObject<HTMLInputElement>;
    private yRef: React.RefObject<HTMLInputElement>;
    state: TypedState = {
        result: 0
    };

    constructor(props: TypedProps) {
        super(props);
        this.xRef = React.createRef();
        this.yRef = React.createRef();
    };

    add = () => {
        let x = this.xRef.current != null ? parseInt(this.xRef.current.value) : 0;
        let y = this.yRef.current != null ? parseInt(this.yRef.current.value) : 0;
        this.setState({result: x + y});
        console.log("add = ", x+y);
    };


    render() {
        return (
            <div>
                <h3>Hello TypeScript</h3>
                <input ref={this.xRef} type="text"></input>
                <input ref={this.yRef} type="text"></input>
                <button onClick={this.add}>Sum</button>
                <h3>Result={this.state.result}</h3>
            </div>
        )
    }
}
