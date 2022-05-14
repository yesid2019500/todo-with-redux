import { VISIVILITY_FILTER } from "../constants";

// vamos a filtrar por selccion
export const getTodosByVisivilityFilter = (store, visibilityFilter) => {
    switch (visibilityFilter) {
        case VISIVILITY_FILTER.COMPLETED:
            return store.todos.filter( todo => todo.completed)

        case VISIVILITY_FILTER.IMCOMPLETED:
            return store.todos.filter( todo => !todo.completed )

        default:
            return store.todos;
    }
}