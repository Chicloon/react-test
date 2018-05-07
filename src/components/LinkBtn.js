import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const LinkBtn = ({ to, label }) => {
  return (
    <Link to={to}>
      <Button primary>
        <span>{label}</span>
      </Button>
    </Link >
  )
}

LinkBtn.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default LinkBtn
