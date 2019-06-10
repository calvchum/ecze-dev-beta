import React, { Component } from "react"

class CheckBox extends Component {
  render() {
    return (
      <li>
        <label>
          <input
            type="checkbox"
            checked={this.props.category.isChecked}
            value={this.props.category.value}
            onChange={this.props.handleCheckChildElement}
          />
          {this.props.category.value}
        </label>
      </li>
    )
  }
}

export default CheckBox
