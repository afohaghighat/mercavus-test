import React from "react";

// layouts
const DashboardLayout = React.lazy(() => import("../views/Layouts/DashboardLayout"));

// Users
const Users = React.lazy(() => import("../views/Dashboard/Users"));

const routes = [
	// user dashboard
	{ path: "/", exact: true, name: "URL Generator", component: Users, layout: DashboardLayout }
];

export default routes;
