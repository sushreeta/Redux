import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'

// import Counter from './Counter'
// import UserList from './UserList';
// import UserShow from './UserShow'

import Count from './components/count'
import ToDoList from './components/toDo'
import UserList from './components/userList'
import UserShow from './components/userShow'

function App(){
     return (
          <BrowserRouter>
          <div>
               <h2>Redux User</h2>
               <ul>
                    <li><Link to="/count">Count</Link></li>
                    <li><Link to="/todos">Todo</Link></li>
                    <li><Link to="/user">UsersList</Link></li>
               </ul>
               <Route path="/count" component={Count}/>
               <Route path="/todos" component={ToDoList}/>
               <Route path="/user" component={UserList}/>
               <Route path="/user/:id" component={UserShow}/>
          </div>
          </BrowserRouter>
     )
}

export default App