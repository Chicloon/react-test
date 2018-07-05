import React from 'react'
import { observer, inject } from 'mobx-react';
import {Header, Icon} from 'semantic-ui-react';



@inject('list')
@observer
class TodoHeader extends React.Component {  
  
  render() {    
    
    return (
      <React.Fragment>
        <Header as="h2" floated="right">
          <Icon name="trash" onClick={()=> this.props.list.deleteCompleted()}/>        
        </Header>
        <Header as="h2" floated="left">
          TODO list
        </Header>
    </React.Fragment>
    )
  }
}

export default TodoHeader
