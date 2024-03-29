import React from "react";

const Select = ({ name, label, placeholder, options, error, ...rest }) => {
	return (
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<select id={name} name={name} {...rest} className="form-control">
				{options.map(option => (
					<option key={option._id} value={option._id}>
						{option.name}
					</option>
				))}
			</select>
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	);
};

export default Select;
