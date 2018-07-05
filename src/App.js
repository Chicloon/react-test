import React from 'react'

import { Segment, Container } from 'semantic-ui-react'
import TodoList from './components/TodoList'
import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput'

import './App.css'

const App = () => (
  <Container>
    <Segment clearing>
      <TodoHeader />
    </Segment>

    <Segment>
      <TodoList />
    </Segment>
    <Segment>
      <TodoInput />
    </Segment>
  </Container>
)

export default App
