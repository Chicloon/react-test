import React from 'react'
import { observer, inject } from 'mobx-react';
import {List} from 'semantic-ui-react';


@inject('list')
@observer
class TodoList extends React.Component {  
  _renderListItem (item, id) {    
    const {complete} = item    
    return  (
      <List.Item key={`item-${item.title}`} onClick={()=>this.props.list.toggleCompleted(item, id)}>
        <List.Icon name={complete ? 'check circle outline' : 'circle outline'} />
        <List.Content style={complete ? {fontStyle:'italic'}: null}>{item.title}</List.Content>
      </List.Item>        
    )    
  }
  
  render() {    
    const listItems = this.props.list.todoList.slice();
    return (
      <List style={{cursor: 'pointer'}}>        
        {listItems.map((item, index) => this._renderListItem(item, index))}        
      </List>      
    )
  }
}

export default TodoList
