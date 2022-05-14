import { Box } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { getTodosByVisivilityFilter } from '../redux/selector'
import { Todo } from './Todo'

export const TodoList = () => {

const { todos, visibilityFilter } = useSelector( state => state)
console.log(todos)

const filterTodos = getTodosByVisivilityFilter(todos, visibilityFilter)

  return (
  /* vamos a mostrar de manera condional, si hay algo mostramos
  las tareas si no, solo el texto
   */
    <Box my="4">
      {filterTodos.length ? filterTodos.map(todo => (
        <Todo key={`todo-${todo.id}`} todo={todo} />
      )): <Box textAlign="center" my="4" >No Todos now!</Box>}
       
    </Box>
   
  )
}
