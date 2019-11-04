import React from 'react'
import {connect} from 'react-redux'
import Btn from './btn'

function Count(props){
     return (
          <div>
               <h2>count: value here</h2>
               <Btn/>
          </div>
     )
}

const mapStateToProps = (state) =>{
     return {
          count: state.count
     }
}

export default connect(mapStateToProps)(Count)