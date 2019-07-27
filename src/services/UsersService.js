import * as request from "../utils/requests";
import endpoints from "../config/endpoints";
import * as actionTypes from "./actionTypes";

export const getUsers = () => dispatch => {
	request
		.get(`${endpoints.users.list}`)
		.then(res => {
			// console.log(res);
			dispatch({
				type: actionTypes.GET_USERS,
				users: res.data
			});
		})
		.catch(err => {
			dispatch({
				type: actionTypes.GET_USERS,
				users: []
			});
		});
};

export const createUser = data => dispatch => {
	request
		.post(`${endpoints.users.create}`, data)
		.then(res => {
			console.log(res);
			dispatch({
				type: actionTypes.ADD_USER,
				user: res.data
			});
		})
		.catch(err => {
			dispatch({
				type: actionTypes.ADD_USER,
				user: {}
			});
		});
};

export const getUserHobbies = userId => dispatch => {
	request
		.get(`${endpoints.hobbies.list}/${userId}`)
		.then(res => {
			dispatch({
				type: actionTypes.GET_USER_HOBBIES,
				hobbies: res.data
			});
		})
		.catch(err => {
			dispatch({
				type: actionTypes.GET_USER_HOBBIES,
				hobbies: []
			});
		});
};

export const addUserHobby = data => dispatch => {
	request
		.post(`${endpoints.hobbies.create}`, data)
		.then(res => {
			console.log(res);
			dispatch({
				type: actionTypes.ADD_USER_HOBBY,
				hobby: res.data
			});
		})
		.catch(err => {
			dispatch({
				type: actionTypes.ADD_USER_HOBBY,
				hobby: {}
			});
		});
};

export const deleteUserHobby = hobby => dispatch => {
	request
		.deleteItem(`${endpoints.hobbies.delete}/${hobby._id}`)
		.then(res => {
			dispatch({
				type: actionTypes.DELETE_USER_HOBBY,
				hobbyId: hobby._id,
				payload: res
			});
		})
		.catch(err =>
			dispatch({
				type: actionTypes.DELETE_USER_HOBBY,
				payload: {}
			})
		);
};
