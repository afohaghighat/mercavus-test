import axios from "axios";

const request = axios.create();

//request.defaults.baseURL = process.env.REACT_APP_API_URL;
request.defaults.headers.post["Content-Type"] = "application/json";

request.interceptors.response.use(
	response => {
		if (response.data.message) {
			const { message } = response.data;
			// Clear localStorage if token is expired/invalid
			if (message[0] === "token_expired" || message[0] === "token_invalid") {
				localStorage.clear();
				window.location.reload();
			}
		}
		return response;
	},
	error => {
		// Do something with response error
		return Promise.reject(error);
	}
);

// get request
// return promise result
export const get = (url, config) => {
	const settings = Object.assign({}, config);
	return request.get(url, settings);
};

// post request
// return promise result
export const post = (url, data, config) => {
	const settings = Object.assign({}, config);
	return request.post(url, data, settings);
};

// put request
// return promise result
export const put = (url, data, config) => {
	const settings = Object.assign({}, config);
	return request.put(url, data, settings);
};

// put request
// return promise result
export const deleteItem = (url, data, config) => {
	const settings = Object.assign({}, config);
	return request.delete(url, data, settings);
};

export default request;
