  const todoInitialState = ()=>{
      return{
      id: Number(new Date()), 
      title: 'task1'
 }}
const todoReducer = (state = [], action) => {
     switch(action.type){
          case 'ADD_TODO': {
               return [...state,action.payload]
          }
          default: {
               return [...state]
          }
     }
}

export default todoReducer