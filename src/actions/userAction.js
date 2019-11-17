import axios from 'axios'
const setUser = (user)=>{
     return {
          type: 'SET-USER',
          payload: user
     }
}

export const setFirstUser = (dispatch)=>{
     return (dispatch)=>{
          axios.get('https://jsonplaceholder.typicode.com/users')
          .then((response)=>{
               const users = response.data
               dispatch(setUser(users))
          })
     }
}
