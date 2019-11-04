import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import Counter from './Counter'
import UserList from './UserList';
import UserShow from './UserShow'

import Count from './components/count'
import ToDoList from './components/toDo'


function App(){
     return (
          <div>
               <h2>Redux User</h2>
               <hr/>
               <Count/>
               <hr/>
               <ToDoList/>

          </div>
     )
}

// function App(props){
//      return (
//           <BrowserRouter>
//           <div>
//                <h2>{props.title}</h2>
//                <Link to="/counter-example">Counter Link</Link>
//                <br/>
//                <Link to="/User">User Link</Link>
               
//                <Route path="/counter-example" component={Counter}/>
//                <Route path="/User" component={UserList}/>
//                <Route path="/User-show/:id" component={UserShow} />
//           </div>
//           </BrowserRouter>
//      )
// }

export default App