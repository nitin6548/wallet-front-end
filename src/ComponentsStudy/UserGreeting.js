import React, { Component } from 'react'

 class UserGreeting extends Component {

constructor(props) {
    super(props)

    this.state = {
         isLoggedIn: true
    }
}


    render() {

        //element variable rendering
        // let message
        // if(this.state.isLoggedIn)
        //     message=<div>Welcome Vishwas</div>
        // else  message = <div>Welcome Guest</div>

        // return <div>{message}</div>

        //if-else conditional rendering
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>
        //             Welcome Vishwas
        //         </div>
        //     )
        // } else {
        //     return(
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }

        //ternary operator conditional rendering
        // return (
        //     this.state.isLoggedIn ?
        //         <div>Welcome Vishwas</div> :
        //         <div>Welcome Guest</div>
            
        // )
        
        return this.state.isLoggedIn && <div>Welcome Vishwas</div>
    }
}

export default UserGreeting
