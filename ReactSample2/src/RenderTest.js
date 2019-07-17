import React, { Component } from 'react';

class RenderTest extends Component{

    state = {
        counter: 0,
        array: [],
    };

    shouldComponentUpdate(nextProps, nextState, nextContext){
        if(this.state.counter !== nextState.counter){
            return true;
        }
        return false;
    }

    onClick = () => {
        this.setState({
            counter: this.state.counter + 1,
            array: [...this.state.array, this.state.counter],
        });
    }

    render(){
        console.log('랜더링', this.state);
        return(
            <div>
                <button onClick={this.onClick}>Click {this.state.counter}</button>
            </div>
        );
    }
}

export default RenderTest;