import * as actionTypes from "../services/actionTypes";

const initialState = {
	users: [],
	hobbies: []
};

const UsersReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_USERS:
			return {
				...state,
				users: [...state.users, ...action.users]
			};

		case actionTypes.ADD_USER:
			return {
				...state,
				users: [action.user, ...state.users]
			};

		case actionTypes.GET_USER_HOBBIES:
			return {
				...state,
				hobbies: [...action.hobbies]
			};

		case actionTypes.ADD_USER_HOBBY:
			return {
				...state,
				hobbies: [action.hobby, ...state.hobbies]
			};

		case actionTypes.DELETE_USER_HOBBY:
			if (action.payload.status === 200)
				return {
					...state,
					hobbies: state.hobbies.filter(h => h._id !== action.hobbyId)
				};
			return state;

		default:
			return state;
	}
};

export default UsersReducer;
