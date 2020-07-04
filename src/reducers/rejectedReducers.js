import * as types from '../actions/actionTypes';

const initialState = {
    rejected_items : [],
    item : {},
    count : 0,
};

export default function (state = initialState, action){
    switch (action.type){
        case types.TOP_FIVE_BY_REJECTED:
            return { ...state, };
        case types.TOP_FIVE_BY_REJECTED_SUCCESS:
            return { ...state, rejected_items: action.payload, };
        case types.TOP_FIVE_BY_REJECTED_FAILS:
            return { ...state, error: action.error,}
        default:
            return state;
    };
}
