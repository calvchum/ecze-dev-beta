import React, { Component } from "react"

class MailchimpForm extends Component {
	render() {
		return (
			<div>
				{/* the email form has to wrapped in a form tag that contains the following action and method props */}
				<form
					action="https://gmail.us20.list-manage.com/subscribe/post"
					method="POST"
				>
					{/* there are two hidden inputs that have the following specific value and names */}
					<input type="hidden" name="u" value="c41941bbcbecdc562a2885df3" />
					<input type="hidden" name="id" value="b5400ff385" />
					{/* This is the input that the user puts email into */}
					<input
						name="MERGE0"
						type="email"
						id="mce-EMAIL"
						placeholder="x Email"
						pattern="(.+)@(.+){2,}\.(.+){2,}"
						required={true}
					/>
					{/* the submit button should be an input type="submit" */}
					<input type="submit" />
				</form>
			</div>
		)
	}
}

export default MailchimpForm
