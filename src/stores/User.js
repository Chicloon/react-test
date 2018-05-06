import { observable, action } from 'mobx'
import { logIn } from '../actions/SessionActions';
import axios from 'axios';

import {ROOT_URL} from '../helpers/constants';

class User {  
  @observable id = null;

  @action async logIn(params) {
    let error;

    const request = await axios.post(`${ROOT_URL}validate`, {
      ...params
    })
      .then(res=>res)
      .catch(err=>{        
        error = err.message === 'Network Error' ? 'Сервер не доступен' : err.message             
      })
    
    if(request) {      
      const {data}=request      
      if(data.status === 'err') {
        error = 'Имя пользователя или пароль введены не верно'
      } else {
        this.id = data.data.id
      }
    }        
    return error;
  }
}

export default new User()
