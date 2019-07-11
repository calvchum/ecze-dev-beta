import React, { Component } from "react"

class FaqListItem extends Component {
	render() {
		const { question, answer, index } = this.props
		return (
			<div onClick={() => this.props.handleClick(index)}>
				<h3>{question}</h3>
				<p>{answer}</p>
			</div>
		)
	}
}

export default FaqListItem
