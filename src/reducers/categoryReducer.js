import { categoryConstants } from "../actions/constant"

const initState = {
    categories: [],
    loading: false,
    error: null
};

export default (state = initState, action) => {

    console.log(action);
    switch (action.type) {

        case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:

            state = {
                ...state,
                categories: action.payload.categories
            }
            break;
        //     case authConstants.LOGIN_SUCCESS:

        //         state = {
        //             ...state,
        //             user: action.payload.user,
        //             token: action.payload.token,
        //             authenticate: true,
        //             authenticating: false
        //         }
        //         break;
        //     case authConstants.LOGOUT_REQUEST:
        //         state = {
        //             ...state,
        //             loading: true
        //         }
        //         break;
        //     case authConstants.LOGOUT_SUCCESS:
        //         state = {
        //             ...initState
        //         }
        //         break;
        //     case authConstants.LOGOUT_FAILURE:
        //         state = {
        //             ...state,
        //             error: action.payload.error,
        //             loading: false

        //         }
        //         break;
        // 
    }
    return state;
}