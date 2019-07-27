import * as actionTypes from "../services/actionTypes";
import UsersReducer from "./UsersReducer";

let defultState = { hobbies: [], users: [] };

describe("User Reducer", () => {
    it("should return default state", () => {
        const newState = UsersReducer(undefined, {});
        expect(newState).toEqual(defultState);
    });

    it("should return new state if receiving type", () => {
        const users = [{ name: "test1", _id: "id1" }, { name: "test2", _id: "id2" }];
        const newState = UsersReducer(undefined, {
            type: actionTypes.GET_USERS,
            users: users
        })

        expect(newState.users).toEqual(users);
    });
});
