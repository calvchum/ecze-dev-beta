import React, { Component } from 'react'
import styled from 'styled-components'
import { BodyText } from '../utilities'

const CheckBoxStyling = styled.input`
  
`;

const PaddedBodyText = styled(BodyText)`
  padding: 0.5em 0em 0.5em 1em;
`;


class CheckBox extends Component {
  render() {
    return (
      <PaddedBodyText>
        <label>
          <CheckBoxStyling
            type="checkbox"
            checked={this.props.category.isChecked}
            value={this.props.category.value}
            onChange={this.props.handleCheckChildElement}
          />
          {this.props.category.value}
        </label>
      </PaddedBodyText>
    )
  }
}

export default CheckBox
