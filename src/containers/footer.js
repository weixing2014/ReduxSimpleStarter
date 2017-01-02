import React, { Component } from 'react'
import FilterLink from './filter-link'
import * as todoFilters from '../constant/todo-filters'

class Footer extends Component {
  render() {
    return (
      <div>
        <span>
          Filter:
          <FilterLink filter={ todoFilters.VISIBILITY_ALL } >All</FilterLink>
          {' '}
          <FilterLink filter={ todoFilters.VISIBILITY_ACTIVE } >Active</FilterLink>
          {' '}
          <FilterLink filter={ todoFilters.VISIBILITY_COMPLETED } >Completed</FilterLink>
        </span>
      </div>
    )
  }
}

export default Footer
