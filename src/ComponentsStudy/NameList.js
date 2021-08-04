import React from 'react'
import Person from './Person'

function NameList() {
    // const names = ['Bruce', 'Diana', 'Clark']
    // const nameList = names.map(name => <h2>{name}</h2>)
    // return (
    //     <div>
    //         {/* <h2>{names[0]}</h2>
    //         <h2>{names[1]}</h2>
    //         <h2>{names[2]}</h2> */}

    //         { nameList }
            
    //     </div>
    //)

    const persons = [
        {
        id: 1,
        name: 'Diana',
        age: '20',
        skill: 'Vue' 
        },
        {
        id: 2,
        name: 'Bruce',
        age: '22',
        skill: 'React' 
        },
        {
        id: 3,
        name: 'Tony',
        age: '24',
        skill: 'Html' 
        }
    ]

    const personList = persons.map(person => <Person person = {person}/>)
    return <div>{personList}</div>
}

export default NameList
