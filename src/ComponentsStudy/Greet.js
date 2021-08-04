// import { Component } from "react";
// import  ReactDOM  from "react";

// class TodoApp extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { items: [], text: '' };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     render() {
//         return (
//             <div>
//                 <h3>TODO</h3>
//                 <TodoList Items={this.state.items} ></TodoList>
//                 <form onSubmit={this.handleSubmit}>
//                     <label htmlFor="new-todo">
//                         What needs to be done?
//                     </label>
//                     <input
//                         id="new-todo "
//                         onChange={this.handleChange}
//                         value={this.state}>
//                     </input>
//                     <button>
//                         Add #{this.state.items.length + 1}
//                     </button>
//                 </form>
//             </div>
//         );
//     }

//     handleChange(e){
//         this.setState({text: e.target.value});
//     }

//     handleSubmit(e){
//         e.preventDefault();
//         if(this.state.text.length===0){
//             return;
//         }
//         const newItem = {
//             text: this.state.text,
//             id: Date.now()
//         };
//         this.setState(stste => ({
//             items: this.state.items.concat(newItem),
//             text: ''
//         }));
//     }
// }

// class TodoList extends Component{
//     render(){
//         return(
//         <ul>
//             {this.props.items.map(item => (
//                 <li key = {item.id} > {item.text}</li>
//             ))};
//         </ul>
//         );
//     }
// }

// ReactDOM.render(
//     <TodoApp />, document.getElementById('todos-e3xample')
// );

// export default TodoApp;