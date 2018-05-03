import React from 'react'
import { connect } from 'react-redux'
import News from '../components/News'
import { fetchNews } from '../actions/NewsActions'

class NewsContainer extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchNews())
  }

  render() {
    const { data } = this.props
    return <News data={data} />
  }
}

const mapStateToProps = state => ({
  data: state.news,
})

export default connect(mapStateToProps)(NewsContainer)
