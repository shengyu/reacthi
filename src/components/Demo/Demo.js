import React from 'react';

class Demo extends React.Component{
    state = {isHot:true}

    showData1 = () =>{
        const hello = this.helloRef.current
        const {isHot} = this.state
        this.setState({isHot: !isHot})
        console.log(hello.value)
    }

    showData2 = (event) =>{
        alert(event.target.value)
    }

    helloRef = React.createRef()

    render(){
        const {isHot} = this.state
        return(
            <div>
                <h2> So {isHot ? 'hot' : 'cold'} </h2>
                <input ref={this.helloRef} type="text" placeholder="hello"></input>&nbsp;
                <button onClick={this.showData1}>Click me</button>&nbsp;
                <input onBlur={this.showData2} type="text" placeholder="haha"></input>
            </div>
        )

    }
}

export default Demo