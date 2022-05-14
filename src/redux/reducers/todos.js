import { ADD_TODO, TOGGLE_TODO } from '../actionType'


const initialState = {
    todos: [
        // { 
        //     id: 1,
        //     content: 'Pogramando',
        //     completed: false
        //   }
    ]
}

// NUESTRO REDUCER
const todos = (state= initialState, action) => {
    switch (action.type) {
      
        case ADD_TODO:{
             const { id, content} = action.payload 
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {content, completed:false, id}
                ]
            }
        }
    
        // si no esta tachado lo tacha y miserversa
// si es igual devuelvo el elemento inveros a tachado, si no solo devuelvo el elemento
        case TOGGLE_TODO: {
             const { id } = action.payload
            const todos = state.todos.map(obj => {
              return  obj.id === id ? { ...obj, completed: !obj.completed } : obj
            })
            return {
                ...state,
                todos
            }    
        }
         

        default:
            return state;
    }
}

export default todos;

// return state.todos;