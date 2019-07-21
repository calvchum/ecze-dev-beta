import React, { useState } from "react"
import { animated, useSpring } from 'react-spring'
import { SubheaderText, BodyText } from "../utilities"
import { QuestionAnswer, QuestionArrow } from "./FaqPage"
import downArrow from "../assets/icons/down-arrow.svg"

const FaqListItem = ({ index, question, answer, handleClick }) => {

	const [isQuestionOpen, setQuestionOpen] = useState(false);
  const arrowAnimation = useSpring({
    transform: isQuestionOpen ? `rotate(180deg)` : `rotate(0deg)`,
    transformOrigin: isQuestionOpen ? `50% 50%` : `50% 50%`
  });

  console.log(isQuestionOpen)

	return (
		<QuestionAnswer onClick={() => handleClick(index)}>
			<QuestionArrow onClick={() => setQuestionOpen(!isQuestionOpen)}>
				<SubheaderText>{question}</SubheaderText>
				<animated.img style={arrowAnimation} src={downArrow} alt="" />
			</QuestionArrow>
			<BodyText>{answer}</BodyText>
		</QuestionAnswer>
	)
}

export default FaqListItem
