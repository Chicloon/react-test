import { observable, action } from 'mobx'
import { logIn } from '../actions/SessionActions';
import axios from 'axios';

import {ROOT_URL} from '../helpers/constants';

class User {
  @observable isLoading = false;
  @observable signedIn = false;
  @observable error = null;
  @observable id = null;


  loaging = () => this.isLoading = !this.isLoading;

  @action async logIn(params) {
    this.loaging();

    const request = await axios.post(`${ROOT_URL}validate`, {
      email: 'max@test.com', password:'12345'
      // ...params
    })
      .then(res=>res)
      .catch(err=>{        
        this.error = err.message === 'Network Error' ? 'Сервер не доступен' : err.message    
        this.loaging()
      })
    
    if(request) {
      const {data}=request      
      if(data.status === 'err') {
        this.error = 'Имя пользователя или пароль введены не верно'
        this.loaging()
        return
      }
      this.id = data.data.id
      this.loaging()
    }
    
  }



}

export default new User()
