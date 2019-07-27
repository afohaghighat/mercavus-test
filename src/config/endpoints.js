export const baseURL = "http://localhost:7000";

const endpoints = {
	//Users
	users: {
		list: `${baseURL}/users`,
		create: `${baseURL}/users`,
		delete: `${baseURL}/users`
	},
	//Hobbies
	hobbies: {
		list: `${baseURL}/hobbies`,
		create: `${baseURL}/hobbies`,
		delete: `${baseURL}/hobbies/delete`
	}
};

export default endpoints;
