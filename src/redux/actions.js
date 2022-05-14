import { ADD_TODO, SET_FILTER, TOGGLE_TODO } from './actionType';

let nextTodoId = 0;
// el parametro es la tarea que recibimos del input
export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content
    }
})


// funcion de toggle completed or not
export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: { id }
});

// filtro de todos
export const setFilter = filter => ({
    type: SET_FILTER,
    payload: { filter }
})