import React, { Component } from "react"

class EmailForm extends Component {
	render() {
		return (
			<div>
				<form
					action="https://gmail.us20.list-manage.com/subscribe/post"
					method="POST"
				>
					<input type="hidden" name="u" value="c41941bbcbecdc562a2885df3" />
					<input type="hidden" name="id" value="b5400ff385" />
					<input name="MERGE1" type="text" placeholder="name" required={true} />
					<input
						name="MERGE0"
						type="email"
						id="mce-EMAIL"
						placeholder="email"
						pattern="(.+)@(.+){2,}\.(.+){2,}"
						required={true}
					/>
					<input type="submit" />
				</form>
			</div>
		)
	}
}

export default EmailForm
