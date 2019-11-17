const {createStore, combineReducers, applyMiddleware} = require('redux')
const thunk = require('redux-thunk')
const axios = require('axios')

const usersReducer = (state = [], action)=>{
     switch(action.type){
          case 'SET_USER':{
               return [...state,action.payload]
          }
          default:{
               return [...state]
          }
     }
}

const configureStore = ()=>{
     const store = createStore(combineReducers({
          users:usersReducer
     }), applyMiddleware(thunk.default))
     return store
}

const store = configureStore()

console.log(store.getState())

const setUser = (users)=>{
     return {
          type:'SET_USER',
          payload:users
     }
}

const startSetUser = ()=>{
     return (dispatch)=>{
          axios.get('https://jsonplaceholder.typicode.com/users')
               .then((response)=>{
                    console.log(response)
                    const users = response.data
                    dispatch(setUser(users))
               })
     }
}

store.dispatch(startSetUser())

