const userReducer = (state = [], action)=>{
     switch(action.type){
          case 'SET-USER':{
               return [...action.payload]
          }
          default: {
               return [...state]
          }
     }
}

export default userReducer