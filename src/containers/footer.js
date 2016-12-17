import React, { Component } from 'react'
import FilterLink from './filter-link'
import {VISIBILITY_ACTIVE, VISIBILITY_ALL, VISIBILITY_COMPLETED} from '../constant'

class Footer extends Component {
  render() {
    return (
      <div>
        <span>
          Filter:
          <FilterLink filter={VISIBILITY_ALL} >All</FilterLink>
          {' '}
          <FilterLink filter={VISIBILITY_ACTIVE} >Active</FilterLink>
          {' '}
          <FilterLink filter={VISIBILITY_COMPLETED} >completed</FilterLink>
        </span>
      </div>
    )
  }
}

export default Footer
