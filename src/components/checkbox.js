import React, { Component } from 'react'
import styled from 'styled-components'
import { BodyText, colors } from '../utilities'

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 2px solid ${colors.almostBlack};
  background: ${colors.white};
  transition: all 150ms;
  vertical-align: middle;
  ${HiddenCheckbox}:focus + & {
    outline: none;
  }
`

const BlackBox = styled.div`
  width: 12px;
  height: 12px;
  background: ${props => props.checked ? `${colors.almostBlack}` : `${colors.white}`};
  transition: all 150ms;
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  padding-right: 0.5em;
`

const PaddedBodyText = styled(BodyText)`
  padding: 0.5em 0em 0.5em 0em;
`;


class CheckBox extends Component {
  render() {
    return (
      <PaddedBodyText>
        <label>
        <CheckboxContainer>
          <HiddenCheckbox
            checked={this.props.category.isChecked}
            value={this.props.category.value}
            onChange={this.props.handleCheckChildElement}
          />
          <StyledCheckbox 
            checked={this.props.category.isChecked}
            value={this.props.category.value}
            onChange={this.props.handleCheckChildElement}
          >
            <BlackBox checked={this.props.category.isChecked} />
          </StyledCheckbox>
        </CheckboxContainer>
          {this.props.category.value}
        </label>
      </PaddedBodyText>
    )
  }
}

export default CheckBox
