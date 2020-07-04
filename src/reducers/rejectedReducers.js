import * as types from '../actions/actionTypes';

const initialState = {
    items : [],
    item : {},
    count : 0,
    success : false,
};

export default function (state = initialState, action){
    switch (action.type){
        case types.TOP_FIVE_BY_REJECTED:
            return { ...state };
        case types.TOP_FIVE_BY_REJECTED_SUCCESS:
            return { ...state, items: action.payload };
        case types.TOP_FIVE_BY_REJECTED_FAILS:
            return { ...state, error: action.error}
        default:
            return state;
    };
}
