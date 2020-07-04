import { combineReducers } from 'redux';
import pendingReducers from './pendingReducer';
import producedReducers from './producedReducers';
import rejectedReducers from './rejectedReducers';
import rangeReducers from './rangeReducers';

const rootReducer = combineReducers({
    pending : pendingReducers,
    produced : producedReducers,
    rejected : rejectedReducers,
    range : rangeReducers,
});

export default rootReducer;
