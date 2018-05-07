import React from 'react'
import PropTypes from 'prop-types'

const News = ({ data }) => {
  console.log(data)
  return (
    <div className={'news-list'}>
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
    </div>
  )
}

News.proptypes = {
  data: PropTypes.array.isRequired,
}

export default News
