import React, { useState, useEffect } from 'react';


//export default class File extends Component{

export default function File() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log(document.title )
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
    // constructor(props){
    //     super(props);
    //     this.state = {counter:0};
    //     console.log("state value from constructor",this.state.counter)
    // }

    // componentDidMount(){
    //     console.log("state value from didmount before setstate",this.state.counter)
    //     this.setState({counter:1});
    //     console.log("state value from didmount aftersetstae",this.state.counter)
    //     // var response = (async) => {
    //     //     return response;
    //     // }
    //     // this.setState = false;
    // }

    // componentDidUpdate(){
    //     console.log("state after in Didupdate", this.state.counter)
    //     if(this.state.counter === 1){
    //     this.setState({counter:2});
    //     }
    //     console.log("state after update", this.state.counter)
    // }

    // componentWillUnmount(){
    //     console.log("state before unmount")    
    // }
    // render(){
    //     console.log("render called")
    //     return(<h1>{this.state.counter}</h1>);
    // }

    
