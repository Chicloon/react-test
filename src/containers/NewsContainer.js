import React from 'react'
import { connect } from 'react-redux'
import News from '../components/News'
import { fetchNews } from '../actions/NewsActions'
import Spinner from '../components/Spinner'

import { inject, observer } from 'mobx-react'

@observer(['users'])
class NewsContainer extends React.Component {
  render() {
    console.log(this.props)

    // if (data.data) {
    //   return <News data={data.data} />
    // }
    // if (data.error) {
    //   return <h4 style={{ color: 'red' }}> {data.error.message}</h4>
    // }
    return <Spinner />
  }
}

export default NewsContainer
