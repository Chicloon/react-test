import { observable, action } from 'mobx'

class List {  
  @observable todoList = [
    {complete: false, title:'Покормить собаку'},
    {complete: false, title: 'Постоить дом' },
    {complete: false, title: "Помыть машину"},
    {complete: false, title: 'Купить продукты'},
    {complete: true, title: 'Составить список'}]

  @action addListItem(item) {
    console.log(item);
    this.todoList.push({complete: false, title: item})
  }
  
  @action toggleCompleted(item, id) {
    console.log(item, id)
    this.todoList[id].complete = !this.todoList[id].complete
  }

  @action deleteCompleted() {
    this.todoList = this.todoList.filter(e=> e.complete !== true)   
  }
}

export default new List()