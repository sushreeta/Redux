import React from 'react'
import {Link} from 'react-router-dom'
import userAction from '../actions/userAction'
import {connect} from 'react-redux'

function UserList (props){
     return (
          <div>
               <h2>UserList</h2>
               <ul>
               {props.users.map((user)=>{
                    return <li key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link></li>
               })}
               </ul>
          </div>
     )
}
 const mapStateToProps = (state)=>{
      return {
           users: state.users
      }
 }

export default connect(mapStateToProps)(UserList)