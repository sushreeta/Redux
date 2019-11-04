import {connect} from 'react-redux'
import {increment} from '../actions/countAction'
import React from 'react'

const Btn = (props)=>{
     return (
          <button onClick={()=>{
               (props.dispatch(increment()))
          }}>up</button>
     )
}

export default connect()(Btn)