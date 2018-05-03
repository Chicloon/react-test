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
    if (data.data) {
      return <News data={data.data} />
    }
    if (data.error) {
      return <h4 style={{ color: 'red' }}> {data.error.message}</h4>
    }
    return <p> ....loading </p>
  }
}

const mapStateToProps = state => ({
  data: state.news,
})

export default connect(mapStateToProps)(NewsContainer)
