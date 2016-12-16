import React, { Component } from 'react'
import Todo from './todo.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <div>React simple starter</div>
        <div>
          <Todo onCheckboxChange={() => {console.log('onCheckboxChange called')}}
                onTextClick={() => {console.log('onTextClick called')}}
                checked={false}
                label={'hooray'}/>
        </div>
      </div>
    );
  }
}
