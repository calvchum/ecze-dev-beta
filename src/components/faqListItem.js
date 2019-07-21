import React, { useState } from "react"
import { animated, useSpring } from 'react-spring'
import { SubheaderText, BodyText } from "../utilities"
import { QuestionAnswer, QuestionArrow } from "./FaqPage"
import downArrow from "../assets/icons/down-arrow.svg"

const FaqListItem = ({ index, question, answer, handleClick }) => {
	const [isQuestionOpen, setQuestionOpen] = useState(false);
  const arrowAnimation = useSpring({
    transform: isQuestionOpen ? `rotate(180deg)` : `rotate(0deg)`
  });

	return (
		<QuestionAnswer onClick={() => { handleClick(index); setQuestionOpen(!isQuestionOpen); }}>
			<QuestionArrow>
				<SubheaderText>{question}</SubheaderText>
				<animated.img style={arrowAnimation} src={downArrow} alt="" />
			</QuestionArrow>
			<BodyText>{answer}</BodyText>
		</QuestionAnswer>
	)
}

export default FaqListItem
