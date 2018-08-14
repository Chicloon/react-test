import React from 'react'
import News from '../components/News'
import {inject, observer} from 'mobx-react'

import Spinner from '../components/Spinner'

@inject('news')
@observer
class NewsContainer extends React.Component {

  componentWillMount() {
    this.props.news.fetchNews()
  }

  render() {
    return (
    <div> 
    map will go here

    </div>
      
    )


    // const {news: {news, isLoading, error}}=this.props  

    // if (!error && !isLoading) {
    //   return <News data={news} />
    // }
    // if (error) {
    //   return <h4 style={{ color: 'red' }}> {error}</h4>
    // }
    // return <Spinner />
  }
}

export default NewsContainer
