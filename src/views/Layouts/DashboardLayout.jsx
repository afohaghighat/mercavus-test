import React from "react";

const DashboardLayout = ({ children, ...rest }) => {
	return (
		<div className="page-wrapper" data-test="page-wrapper">
			<div className="main" data-test="main-section">{children}</div>
		</div>
	);
};

export default DashboardLayout;
