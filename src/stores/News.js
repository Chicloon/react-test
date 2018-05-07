import { observable, action } from 'mobx'
import axios from 'axios'

import { ROOT_URL } from '../helpers/constants';

class News {
  @observable news
  @observable error=null
  @observable isLoading=false

  @action async fetchNews() {
    this.isLoading = true
    const request = await axios.get(`${ROOT_URL}news`)
      .then(res=>res)
      .catch(err=>{
        this.error = err.message
      })
    
    if(request) {
      const {data} = request      
      this.news = data.data
    }
    this.isLoading = false
  }
}

export default new News()