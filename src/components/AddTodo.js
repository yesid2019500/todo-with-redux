import { Button, Flex, FormControl, Input,  } from '@chakra-ui/react'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';



// flex es como el display flex en css
export const AddTodo = () => {

    const dispatch = useDispatch();

// si esta vacio el input el boton estara desabilitado
 const [value, setValue] = useState('')

//  el boton se activa al momento de escribir
 const handleInput = (e) => {

    setValue(e.target.value);
 }
 
 const handleSubmit = (e) => {
     dispatch(addTodo(value))
    e.preventDefault();
    setValue('')
 }

  return (
   <form onSubmit={ handleSubmit } >
       <Flex>
            <FormControl>
                <Input
                type="text"
                value={value}
                onChange={ handleInput }
                borderTopRadius={0}
                borderBottomRightRadius={0}
                />
            </FormControl>
            <Button 
            colorScheme="teal"
            type='submit'
            disabled={!value}
            borderLeftRadius={0}
            borderBottomLeftRadius={0}
            >
                Add todo
            </Button>
       </Flex>
       
   </form>
  )
}
