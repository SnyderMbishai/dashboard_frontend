import * as types from '../actions/actionTypes';

const initialState = {
    pending_items : [],
    item : {},
    count : 0,
};

export default function (state = initialState, action){
    switch (action.type){
        case types.BOTTOM_FIVE_BY_PENDING:
            return { ...state, };
        case types.BOTTOM_FIVE_BY_PENDING_SUCCESS:
            return { ...state, pending_items: action.payload, };
        case types.BOTTOM_FIVE_BY_PENDING_FAILS:
            return { ...state, error: action.error,}
        default:
            return state;
    };
}
