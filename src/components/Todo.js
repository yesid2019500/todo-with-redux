import { Box, Checkbox, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo } from '../redux/actions'

// estamos recibiendo el estopo por las props
export const Todo = ({ todo }) => {

const dispatch = useDispatch();

const [checked, setChecked] = useState(false)

const handleChecked = (e) => {
  dispatch(toggleTodo(todo.id))
}


useEffect( ()=> {
  setChecked(todo.completed)
}, [todo])

  return (  
    <Box mb={1} bgColor="green" p={2} >
      <Checkbox onChange={ handleChecked }  colorScheme="teal" isChecked={checked} >
{/* subrrayrlo de acuerdo al estado si es true o false 
  en nuestro initialState
*/}
          <Text as={todo.completed && "del" } >{todo.content}</Text>
      </Checkbox>
    </Box>
  )
}
