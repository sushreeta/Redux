//ES6 module loader for React
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import {setFirstUser} from './actions/userAction'

import configureStore from './store/configureStore'
const store = configureStore()

console.log(store.getState())

store.subscribe(()=>{
     console.log(store.getState())
})

store.dispatch(setFirstUser())
const ele = (
     <Provider store = {store}>
          <App/>
     </Provider>
)

ReactDOM.render(ele,document.getElementById("root"))
