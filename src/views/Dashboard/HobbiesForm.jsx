import React from "react";
import Joi from "joi-browser";
import Form from "./../../components/common/form";

class HobbiesForm extends Form {
	state = {
		data: {
			passionLevel: "",
			hobbyTitle: "",
			since: ""
		},
		errors: {}
	};

	schema = {
		userId: Joi.number(),
		passionLevel: Joi.string()
			.required()
			.label("Passion Level"),
		hobbyTitle: Joi.string()
			.required()
			.label("Hobby"),
		since: Joi.string()
			.required()
			.label("Since")
	};

	doSubmit = () => {
		const data = this.state.data;
		data.userId = this.props.user._id;
		this.props.addUserHobby(this.state.data);
		this.setState({ data: { passionLevel: "", hobbyTitle: "", since: "" } });
	};

	render() {
		const passionOptions = [
			{ _id: -1, name: "Select passion level" },
			{ _id: 1, name: "Low" },
			{ _id: 2, name: "Medium" },
			{ _id: 3, name: "High" },
			{ _id: 4, name: "Very-High" }
		];
		return (
			<div className="form-container" data-test="hobbies-form-wrapper">
				{this.props.user && (
					<div className="hobbies-control d-none">
						<div className="selected-user-info">
							Hobbies for: <b> {this.props.user.name}</b>
						</div>
						<button
							onClick={this.props.returnToUsers}
							className="btn btn-sm btn-blue return-btn"
						>
							Return
						</button>
					</div>
				)}
				<form onSubmit={this.handleSubmit}>
					<div className="row">
						<div className="col tbody" data-test="passion-select-input">
							{this.renderSelect("passionLevel", "", passionOptions)}
						</div>
						<div className="col tbody" data-test="hobby-title-input">
							{this.renderInput(
								"hobbyTitle",
								"",
								"text",
								"Enter hobby",
								"form-control"
							)}
						</div>
						<div className="col tbody" data-test="hobby-duration-input">
							{this.renderInput(
								"since",
								"",
								"text",
								"Enter year",
								"form-control"
							)}
						</div>
						<div className="col tbody actionsBody" data-test="hobby-add-btn">
							{this.renderButton("Add", "btn btn-sm btn-green")}
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default HobbiesForm;
