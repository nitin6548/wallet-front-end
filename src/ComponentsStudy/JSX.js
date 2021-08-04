import React from 'react'

// const JSX = (props) => {

//     //JSX used
//     return(
//         <div>
//             <h1> JSX Used  {props.name} a.k.a {props.heroname} </h1>
//             {props.children}
//         </div>
//     )

    //without JSX
    // return(
    //     React.createElement(
    //     'div', 
    //     {id: 'hello', className: 'dummyClass'},
    //     React.createElement('h1', null, 'JSX is not used')
    //     )
    // )
//}

//destructuring props in function parameter
// const JSX = ({name, heroname}) => {

//     //JSX used
//     return(
//         <div>
//             <h1> JSX Used  {name} a.k.a {heroname} </h1>
//             {/* {props.children} */}
//         </div>
//     )
// }

//destructuring props in function body
const JSX = (props) => {
    const {name, heroname} = props
    //JSX used
    return(
        <div>
            <h1> JSX Used  {name} a.k.a {heroname} </h1>
            {/* {props.children} */}
        </div>
    )
}

export default JSX