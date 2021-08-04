
import { Router } from 'react-router-dom';
import './App.css';
// import Welcome from './Components/Welcome';
// // import { render } from '@testing-library/react';
// // import { Component } from 'react';
// // import Greet from './Components/Greet';
// import  File from './File';
// import JSX from './Components/JSX';
// import Counter from './Components/Counter';
// import Message from './Components/Message';
// import FunctionClick from './Components/FunctionClick';
// import ClassClick from './Components/ClassClick';
// import EventBind from './Components/EventBind';
// import ParentComponent from './Components/ParentComponent';
// import UserGreeting from './Components/UserGreeting';
// import NameList from './Components/NameList';
import SelectService from './Components/SelectionService/SelectService';
import { BrowserRouter as  Route, Switch } from "react-router-dom";
import DepositAmount from './Components/DepositAmount/DepositAmount';
import WithdrawAmount from './Components/WithdrawAmount/WithdrawAmount';
import TotalAmount from './Components/TotalAmount/TotalAmount';

export default function App() {
  return (
    //    <Router>
    // <Switch>
    //   <div>
    // <Route
		// 		exact
		// 		path="/SelectService"
    //     component={(props) => <SelectService {...props}/>}
		// 	/>
      
    //   <Route
		// 		exact
		// 		path="/DepositAmount"
    //     component={(props) => <DepositAmount {...props}/>}
		// 	/> 
    // <Route
		// 		exact
		// 		path="/WithdrawAmount"
		// 		component={(props) => <WithdrawAmount {...props}/>}
		// 	/>
    // <Route
		// 		exact
		// 		path="/TotalAmount"
		// 		component={(props) => <TotalAmount {...props}/>}
		// 	/>
    //   </div>
    //   </Switch>
    //  </Router>
    // <Router>
    //  <Route
		// 		exact
		// 		path="/SelectService"
    //     component={(props) => <SelectService {...props}/>}
		// 	/>
    // </Router>
    <SelectService/>
        );
        
      }
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <ClassClick/> */}
      {/* <FunctionClick /> */}
      {/* <Message/> */}
      {/* <Counter /> */}
     {/* <File></File>
     <Welcome name = 'Parth' heroname = 'Batman'/>
     <Welcome name = 'Jatin' heroname = 'Tony'/>
     <JSX name = 'Nitin' heroname = 'Supername'>
       <p>This is children props</p>
     </JSX>*/}
     {/* <Welcome name = 'Nitin' heroname = 'Supername'/>
     <JSX name = 'Parth' heroname = 'Batman'>
       <button>Action</button>
     </JSX>
     <JSX name = 'Jatin' heroname = 'Tony'/>  */}

