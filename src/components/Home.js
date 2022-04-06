import React, { Component } from 'react'
import Category from './Category'
import Slider from './Slider'
export default class Home extends Component {
  render() {
    return (
      <div>
        <Slider/>
        <Category/>
      </div>
    )
  }
}
