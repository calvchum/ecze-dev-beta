import React from "react"
import { SubheaderText, BodyText } from "../utilities"
import { QuestionAnswer, QuestionArrow } from "./FaqPage"
import downArrow from "../assets/icons/down-arrow.svg"

const FaqListItem = ({ index, question, answer, handleClick }) => (
	<QuestionAnswer onClick={() => handleClick(index)}>
		<QuestionArrow>
			<SubheaderText>{question}</SubheaderText>
			<img src={downArrow} alt="" />
		</QuestionArrow>
		<BodyText>{answer}</BodyText>
	</QuestionAnswer>
)

export default FaqListItem
