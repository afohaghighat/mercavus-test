import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";

class Form extends Component {
	state = {
		data: {},
		errors: {}
	};

	validate = () => {
		const options = { abortEarly: false };
		const result = Joi.validate(this.state.data, this.schema, options);

		if (!result.error) return null;

		const errors = {};
		for (let item of result.error.details) errors[item.path[0]] = item.message;
		return errors;
	};
	validateProperty = ({ name, value }) => {
		const obj = { [name]: value };
		const schema = { [name]: this.schema[name] };
		const { error } = Joi.validate(obj, schema);
		return error ? error.details[0].message : null;
	};

	handleSubmit = e => {
		e.preventDefault();

		const errors = this.validate();
		this.setState({ errors: errors || {} }); //We set this to error or an empty object to avoid null error!
		if (errors) return;

		this.doSubmit();
	};

	handleChange = ({ currentTarget: input }) => {
		const errors = { ...this.state.erros };
		const errorMessage = this.validateProperty(input);
		if (errorMessage) errors[input.name] = errorMessage;
		else delete errors[input.name];

		const data = { ...this.state.data };
		data[input.name] = input.value;
		this.setState({ data, errors });
	};

	renderButton = (label, classNames) => {
		return (
			<button disabled={this.validate()} className={classNames}>
				{label}
			</button>
		);
	};

	renderInput = (name, label, type = "text", placeholder, classNames) => {
		const { data, errors } = this.state;
		return (
			<Input
				type={type}
				name={name}
				value={data[name]}
				placeholder={placeholder}
				label={label}
				onChange={this.handleChange}
				error={errors[name]}
				className={classNames}
			/>
		);
	};

	renderSelect = (name, label, options) => {
		const { data, errors } = this.state;

		return (
			<Select
				name={name}
				value={data[name]}
				label={label}
				onChange={this.handleChange}
				error={errors[name]}
				options={options}
			/>
		);
	};
}

export default Form;
