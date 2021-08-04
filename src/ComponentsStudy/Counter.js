import React, { Component } from 'react'

 class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    changeCount() {
        // this.setState  ({
        //     count: this.state.count + 1 
        // }, () => {console.log('Callback Value', this.state.count)})
        this.setState(prevState => ({
            count: prevState.count + 1
        }),  () => {console.log('Callback Value', this.state.count)})
    }
    changeCountBy5(){
        this.changeCount()
        this.changeCount()
        this.changeCount()
        this.changeCount()
        this.changeCount()
    }
    
    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick = {() => this.changeCountBy5()}>Increment Count</button>
            </div>
        )
    }
}

export default Counter
