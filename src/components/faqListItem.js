import React, { Component } from "react"
import { SubheaderText, BodyText } from "../utilities"
import { QuestionAnswer, QuestionArrow } from "./FaqPage"
import downArrow from '../assets/icons/down-arrow.svg'

class FaqListItem extends Component {
	render() {
		const { question, answer, index } = this.props
		return (
			<QuestionAnswer onClick={() => this.props.handleClick(index)}>
				<QuestionArrow>
					<SubheaderText>{question}</SubheaderText>
					<img src={downArrow} alt=""/>
				</QuestionArrow>
				<BodyText>{answer}</BodyText>
			</QuestionAnswer>
		)
	}
}

export default FaqListItem
