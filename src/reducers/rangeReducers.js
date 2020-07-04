import * as types from '../actions/actionTypes';

const initialState = {
    items : [],
    item : {},
    count : 0,
    success : false,
};

export default function (state = initialState, action){
    switch (action.type){
        case types.TOTAL_PRODUCED_BY_DATE:
            return { ...state };
        case types.TOTAL_PRODUCED_BY_DATE_SUCCESS:
            return { ...state, items: action.payload };
        case types.TOTAL_PRODUCED_BY_DATE_FAILS:
            return { ...state, error: action.error}
        default:
            return state;
    };
}