import React from "react";
import Joi from "joi-browser";
import Form from "./../../components/common/form";

class UsersForm extends Form {
	state = {
		data: { name: "" },
		errors: {}
	};

	schema = {
		_id: Joi.string(),
		name: Joi.string()
			.required()
			.label("Name")
	};

	doSubmit = () => {
		const data = this.state.data;
		this.props.createUser(data);
		this.setState({ data: { name: "" } });
	};

	render() {
		return (
			<div className="form-container">
				<form onSubmit={this.handleSubmit}>
					<div className="row">
						<div className="col">
							{this.renderInput(
								"name",
								"",
								"text",
								"Enter user name",
								"form-control"
							)}
						</div>
						<div className="col">
							{this.renderButton("Add", "btn btn-sm btn-green")}
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default UsersForm;
