import React from "react"
import { animated, useSpring, useTransition } from "react-spring"
import { SubheaderText, BodyText } from "../utilities"
import { QuestionAnswer, QuestionArrow } from "./FaqPage"
import downArrow from "../assets/icons/down-arrow.svg"

const FaqListItem = ({ index, question, answer, handleClick, isClicked }) => {
	const arrowAnimation = useSpring({
		transform: isClicked ? `rotate(180deg)` : `rotate(0deg)`,
	})
	
	const transitions = useTransition(isClicked, null, {
    from: { opacity: 1, height: '0px' },
    enter: { opactiy: 1, height: `${answer.length < 200 ? '120px' : '220px'}` },
    leave: { opacity: 0, height: '0px' }
	})

	return (
		<QuestionAnswer
			onClick={() => {
				handleClick(index)
			}}
		>
			<QuestionArrow>
				<SubheaderText>{question}</SubheaderText>
				<animated.img style={arrowAnimation} src={downArrow} alt="down arrow" />
			</QuestionArrow>
			<div>
			  {transitions.map(({ item, key, props }) => (
					item && <animated.div style={props} key={key}><BodyText>{answer}</BodyText></animated.div>
				 ))}
			</div>
		</QuestionAnswer>
	)
}

export default FaqListItem
