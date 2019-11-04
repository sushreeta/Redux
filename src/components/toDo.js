import React from 'react'
import {connect} from 'react-redux'
import addToDo from '../actions/actionToDo'

function ToDoList(props){
     return (
          <div>
               <h2>Listing Tasks -- {props.todo.length}</h2>
               <ul>
                    {props.todo.map((todo)=>{
                         return <li key={todo.id}> {todo.title} </li>
                    })}
               </ul>
               <button onClick={()=>{
                    const title = window.prompt('Enter a todo')
                    const todo = {
                         id: Number(new Date()),
                         title
                    }
                    props.dispatch(addToDo(todo))
               }}> Add ToDo</button>
          </div>
          
     )
}

const mapStateToProps = (state)=>{
     return{
          todo: state.todo
     }
}

export default connect(mapStateToProps)(ToDoList)