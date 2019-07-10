import React, { Component } from 'react'
import styled from 'styled-components'

const CheckBoxStyling = styled.input`
  width: 100px;
`;

class CheckBox extends Component {
  render() {
    return (
      <li>
        <label>
          <CheckBoxStyling
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
