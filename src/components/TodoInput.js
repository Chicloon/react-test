import React from 'react'
import { observer, inject } from 'mobx-react';
import { Button, Input} from 'semantic-ui-react';

@inject('list')
@observer
class TodoInput extends React.Component {  
  state = {
    todoContent: ''
  }

  handleInput () {
    this.props.list.addListItem(this.state.todoContent)    
  }

  render() {        
    return (
      <React.Fragment>
        <Button basic icon="plus" onClick={()=> this.handleInput()}/>         
        <Input onChange={(e)=>  this.setState({todoContent: e.target.value})} onKeyPress={(e)=> e.key === 'Enter' ? this.handleInput() : null}/>        
      </React.Fragment>
    )
  }
}

export default TodoInput
