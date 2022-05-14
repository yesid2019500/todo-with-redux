import React from 'react';
import { Container, Heading } from '@chakra-ui/react';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { VisivilityFilter } from './components/VisivilityFilter';

function App() {
  return (
  <div className="app">
        <Container  maxW="container.sm">
         <Heading my="4">TodoList App</Heading>
        <AddTodo/>
        <TodoList/>
        <VisivilityFilter/>
    </Container>
  </div>
  );
}

export default App;
