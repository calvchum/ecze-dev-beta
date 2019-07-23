import React from "react"
import { animated, useSpring } from "react-spring"
import { SubheaderText, BodyText } from "../utilities"
import { QuestionAnswer, QuestionArrow } from "./FaqPage"
import downArrow from "../assets/icons/down-arrow.svg"

const FaqListItem = ({ index, question, answer, handleClick, isClicked }) => {
	const arrowAnimation = useSpring({
		transform: isClicked ? `rotate(180deg)` : `rotate(0deg)`,
	})
	const answerAnimation = useSpring({
		transform: isClicked ? `translateY(0px)` : `translateY(-10px)`,
	})

	return (
		<QuestionAnswer
			onClick={() => {
				handleClick(index)
			}}
		>
			<QuestionArrow>
				<SubheaderText>{question}</SubheaderText>
				<animated.img style={arrowAnimation} src={downArrow} alt="" />
			</QuestionArrow>
			<animated.div style={answerAnimation}>
				{isClicked ? <BodyText>{answer}</BodyText> : null}
			</animated.div>
		</QuestionAnswer>
	)
}

export default FaqListItem
