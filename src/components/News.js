import React from 'react'
import PropTypes from 'prop-types'

const renderNews = data => {
  return (
    <React.Fragment>
      <ul style={{ listStyle: 'none' }}>
        {data.map(news => (
          <li key={`news ${news.id}`}>
            <h5>{news.title}</h5>
            <p>{news.text}</p>
            <hr />
          </li>
        ))}
      </ul>
      <h5> Всего новостей: {data.length}</h5>
    </React.Fragment>
  )
}

const News = ({ data }) => {
  return (
    <div className={'news-list'}>
      {data.length ? renderNews(data) : <p>...loading</p>}
    </div>
  )
}

News.proptypes = {
  data: PropTypes.array.isRequired,
}

export default News
